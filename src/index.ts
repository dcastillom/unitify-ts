import { Category, Unit } from './index.d';
import { conversionFactors } from './utils/conversionFactors';

export const UnitifyJS = (function () {
  function convert(
    value: number,
    fromUnit: Unit,
    toUnit: Unit,
    category: Category
  ) {
    try {
      if (category === 'temperature') {
        return convertTemperature(value, fromUnit, toUnit);
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

  function convertTemperature(value: number, fromUnit: Unit, toUnit: Unit) {
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

    // Convert to Celsius first, then to the target unit
    // @ts-ignore
    const celsiusValue = toCelsius[fromUnit](value);
    // @ts-ignore
    return fromCelsius[toUnit](celsiusValue);
  }

  // function convertTemperature(value: number, fromUnit: Unit, toUnit: Unit) {
  //   if (fromUnit === 'celsius') {
  //     return toUnit === 'fahrenheit' ? (value * 9) / 5 + 32 : value + 273.15
  //   } else if (fromUnit === 'fahrenheit') {
  //     return toUnit === 'celsius'
  //       ? ((value - 32) * 5) / 9
  //       : ((value - 32) * 5) / 9 + 273.15
  //   } else if (fromUnit === 'kelvin') {
  //     return toUnit === 'celsius'
  //       ? value - 273.15
  //       : ((value - 273.15) * 9) / 5 + 32
  //   }
  // }

  return {
    convert,
  };
})();

// Ejemplo de uso:
// console.log(UnitifyJS.convert(1000, 'meters', 'miles', 'length')) // 0.621371
console.log(UnitifyJS.convert(100, 'grams', 'pounds', 'weight')); // 0.220462
