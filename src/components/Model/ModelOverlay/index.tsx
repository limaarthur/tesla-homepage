import React, { useCallback, useLayoutEffect, useState, type ReactNode } from 'react'
import { useWrapperScroll } from '../useWrapperScroll'
import { useTransform } from 'framer-motion'
import type { CarModel } from '../ModelsContext'

import { Container } from './styles'

interface ModelOverlayProps {
  model: CarModel
  children: ReactNode;
}

type SectionDimensions = Pick<HTMLDivElement, 'offsetTop' | 'offsetHeight'>

export function ModelOverlay({ children, model }: ModelOverlayProps) {
  const getSectionDimensions = useCallback(() => {
    return {
      offsetTop: model.sectionRef.current?.offsetTop,
      offsetHeight: model.sectionRef.current?.offsetHeight
    } as SectionDimensions
  }, [model.sectionRef])

  const [dimensions, setDimensions] = useState<SectionDimensions>(
    getSectionDimensions()
  )

  useLayoutEffect(() => {
    function onResize() {
      window.requestAnimationFrame(() => setDimensions(getSectionDimensions()))
    }

    window.addEventListener('resize', onResize)

    return () => window.removeEventListener('resize', onResize)
  }, [])

  const { scrollY } = useWrapperScroll()

  const sectionScrollProgress = useTransform(
    scrollY, 
    y => (y - dimensions.offsetTop) / dimensions.offsetHeight
  )

  React.useEffect(() => {
    sectionScrollProgress.on("change", value => 
      console.log({ sectionScrollProgress: value })
    )
  }, [sectionScrollProgress])

  const opacity = useTransform(
    sectionScrollProgress, 
    [-0.42, -0.05, 0.05, 0.42], 
    [0, 1, 1, 0]
  )

  const pointerEvents = useTransform(opacity, value => 
    // Função que permite selecionar o produto - pointer events issue
    value > 0 ? 'auto' : 'none'
  )

  return (
    <Container style={{ opacity, pointerEvents }}>
      {children}
    </Container>
  )
}