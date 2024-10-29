'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.UnitifyTS = void 0;
const conversionFactors_1 = require('./utils/conversionFactors');
exports.UnitifyTS = (function () {
    function convert(value, fromUnit, toUnit, category) {
        try {
            if (category === 'temperature') {
                return convertTemperature(value, fromUnit, toUnit);
            }
            // @ts-ignore
            const factorFrom = conversionFactors_1.conversionFactors[category][fromUnit];
            // @ts-ignore
            const factorTo = conversionFactors_1.conversionFactors[category][toUnit];
            return (value / factorFrom) * factorTo;
        }
        catch (e) {
            console.error('No valid unit conversion');
        }
    }
    function convertTemperature(value, fromUnit, toUnit) {
        const toCelsius = {
            celsius: (v) => v,
            fahrenheit: (v) => ((v - 32) * 5) / 9,
            kelvin: (v) => v - 273.15,
            rankine: (v) => ((v - 491.67) * 5) / 9,
            delisle: (v) => 100 - (v * 2) / 3,
            newton: (v) => (v * 100) / 33,
            reaumur: (v) => (v * 5) / 4,
            romer: (v) => ((v - 7.5) * 40) / 21,
        };
        const fromCelsius = {
            celsius: (v) => v,
            fahrenheit: (v) => (v * 9) / 5 + 32,
            kelvin: (v) => v + 273.15,
            rankine: (v) => ((v + 273.15) * 9) / 5,
            delisle: (v) => ((100 - v) * 3) / 2,
            newton: (v) => (v * 33) / 100,
            reaumur: (v) => (v * 4) / 5,
            romer: (v) => (v * 21) / 40 + 7.5,
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
