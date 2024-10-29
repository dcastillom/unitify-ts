import { conversionFactors } from './utils/conversionFactors';
export const UnitifyTS = (function () {
  function convert(
    value: number,
    fromUnit:
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
      | keyof typeof conversionFactors.computationTime,
    toUnit:
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
      | keyof typeof conversionFactors.computationTime,
    category:
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
  ): number | undefined {
    try {
      if (category === 'temperature') {
        return convertTemperature(
          value,
          fromUnit as keyof typeof conversionFactors.temperature,
          toUnit as keyof typeof conversionFactors.temperature
        );
      }
      // @ts-ignore
      const factorFrom = conversionFactors[category][fromUnit];
      // @ts-ignore
      const factorTo = conversionFactors[category][toUnit];
      return (value / factorFrom) * factorTo;
    } catch (e) {
      console.error('No valid unit conversion');
    }
  }

  function convertTemperature(
    value: number,
    fromUnit: keyof typeof conversionFactors.temperature,
    toUnit: keyof typeof conversionFactors.temperature
  ): number | undefined {
    const toCelsius = {
      celsius: (v: number) => v,
      fahrenheit: (v: number) => ((v - 32) * 5) / 9,
      kelvin: (v: number) => v - 273.15,
      rankine: (v: number) => ((v - 491.67) * 5) / 9,
      delisle: (v: number) => 100 - (v * 2) / 3,
      newton: (v: number) => (v * 100) / 33,
      reaumur: (v: number) => (v * 5) / 4,
      romer: (v: number) => ((v - 7.5) * 40) / 21,
    };

    const fromCelsius = {
      celsius: (v: number) => v,
      fahrenheit: (v: number) => (v * 9) / 5 + 32,
      kelvin: (v: number) => v + 273.15,
      rankine: (v: number) => ((v + 273.15) * 9) / 5,
      delisle: (v: number) => ((100 - v) * 3) / 2,
      newton: (v: number) => (v * 33) / 100,
      reaumur: (v: number) => (v * 4) / 5,
      romer: (v: number) => (v * 21) / 40 + 7.5,
    };

    // @ts-ignore
    const celsiusValue = toCelsius[fromUnit](value);
    // @ts-ignore
    return fromCelsius[toUnit](celsiusValue);
  }

  return {
    convert,
  };
})();
