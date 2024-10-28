# Unitify

Unitify is a library for converting and manipulating units of measurement. It simplifies working with different unit systems, allowing for precise and quick conversions.

## Features

- Conversion between multiple units of measurement.
- Support for units of length, weight, volume, temperature, speed, area, energy, pressure, power, data, angle, luminance and computation time.
- Simple and easy-to-use.

## Installation

To install Unitify, use npm:

```bash
npm install unitify
```

## Usage

Here is a basic example of how to use Unitify:

```javascript
const unitify = require('unitify')

// Convert 5 celsius to fahrenheit
const fahrenheit = unitify.convert(5, 'celsius', 'fahrenheit', 'temperature')
console.log(`5 celsius is ${feet} fahrenheit`)
```

## Contributing

Contributions are welcome! Please open an issue or a pull request on GitHub.

## License

This project is licensed under the MIT License.
