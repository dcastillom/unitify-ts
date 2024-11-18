# Unitify TS

Unitify TS is a TypeScript library for converting and manipulating units of measurement.
It simplifies working with different unit systems, allowing for precise and quick conversions.

## Features

- Conversion between multiple units of measurement.
- Support for units of length, weight, volume, temperature, speed, area, energy, pressure, power, data, angle, luminance and computation time.
- Simple and easy-to-use.

## Installation

To install Unitify, use npm:

```bash
npm install unitify-ts
```

## Conversion Units

| Category        | Units                                                                                                                                                                                                                                |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| angle           | arcminutes, arcseconds, degrees, gradians, microradians, milliradians, nanoradians, quadrants, radians, sextants, turns                                                                                                              |
| area            | acres, hectares, squareCentimeters, squareDecameters, squareDecimeters, squareFeet, squareGigameters, squareInches, squareKilometers, squareMeters, squareMicrometers, squareMiles, squareMillimeters, squareNanometers, squareYards |
| computationTime | centuries, cpuCycles, days, decades, hours, millennia, minutes, months, seconds, weeks, years                                                                                                                                        |
| data            | bits, bytes, gigabits, gigabytes, kilobits, kilobytes, megabits, megabytes, terabits, terabytes                                                                                                                                      |
| energy          | britishThermalUnits, calories, electronVolts, ergs, footPounds, horsepowerHours, joules, kilocalories, kilojoules, kilowattHours, therms, wattHours                                                                                  |
| length          | angstroms, astronomicalUnits, centimeters, feet, inches, kilometers, lightYears, meters, micrometers, miles, millimeters, nanometers, nauticalMiles, parsecs, yards                                                                  |
| luminance       | candelasPerSquareMeter, footLamberts, lamberts, lumensPerSquareCentimeter, lumensPerSquareMeter, lumensPerSquareMillimeter, millilamberts, nits, nox, phot, stilbs                                                                   |
| power           | attowatts, BTUsPerHour, decawatts, deciwatts, femtowatts, footPoundsPerMinute, gigawatts, hectowatts, horsepower, kilocaloriesPerHour, kilowatts, megawatts, microwatts, milliwatts, nanowatts, picowatts, watts                     |
| pressure        | atmospheres, bar, centimetersOfWater, inchesOfMercury, kilogramsPerSquareCentimeter, kilopascals, millibars, pascals, poundsPerSquareFoot, psi, torr                                                                                 |
| speed           | cm/s, ft/s, in/s, km/h, knots, mach, m/s, miles/h, mm/s, speedOfLight                                                                                                                                                                |
| temperature     | celsius, delisle, fahrenheit, kelvin, newton, rankine, reaumur, romer                                                                                                                                                                |
| time            | centuries, days, decades, hours, microseconds, millennia, milliseconds, minutes, months, nanoseconds, seconds, weeks, years                                                                                                          |
| volume          | barrels, bushels, cups, cubicCentimeters, cubicDecimeters, cubicFeet, cubicInches, cubicMeters, cubicMillimeters, cubicYards, fluidOunces, gallons, liters, milliliters, pecks, pints, quarts, tablespoons, teaspoons                |
| weight          | carats, grains, grams, kilograms, longTons, micrograms, milligrams, nanograms, ounces, picograms, pounds, shortTons, stones, tons                                                                                                    |

## Usage

Here is a basic example of how to use Unitify TS:

```javascript
import { UnitifyTS } from 'unitify-ts'

// Convert 5 celsius to fahrenheit
const fahrenheit = UnitifyTS.convert(5, 'celsius', 'fahrenheit', 'temperature')
console.log(`5 celsius is ${fahrenheit} fahrenheit`)
```

## Contributing

Contributions are welcome! Please open an issue or a pull request on GitHub.

## License

This project is licensed under the MIT License.
