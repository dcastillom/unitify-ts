import { conversionFactors } from './utils/conversionFactors';

export type Category =
  | 'length'
  | 'weight'
  | 'volume'
  | 'temperature'
  | 'speed'
  | 'area'
  | 'time'
  | 'energy'
  | 'pressure'
  | 'power'
  | 'data'
  | 'angle'
  | 'luminance'
  | 'computationTime'

export type Unit =
  | keyof typeof conversionFactors.length
  | keyof typeof conversionFactors.weight
  | keyof typeof conversionFactors.volume
  | keyof typeof conversionFactors.temperature
  | keyof typeof conversionFactors.speed
  | keyof typeof conversionFactors.area
  | keyof typeof conversionFactors.time
  | keyof typeof conversionFactors.energy
  | keyof typeof conversionFactors.pressure
  | keyof typeof conversionFactors.power
  | keyof typeof conversionFactors.data
  | keyof typeof conversionFactors.angle
  | keyof typeof conversionFactors.luminance
  | keyof typeof conversionFactors.computationTime
