import { useContext } from 'react'
import { AtmosphereContext } from './atmosphereContext.js'

export function useAtmosphere() {
  const context = useContext(AtmosphereContext)

  if (!context) {
    throw new Error('useAtmosphere AtmosphereProvider ichida ishlatilishi kerak')
  }

  return context
}
