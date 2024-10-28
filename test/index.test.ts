import { UnitifyJS } from '../src/index';

describe('UnitifyJS', () => {
  const assert = require('assert');
  describe('convert', () => {
    it('should convert length units correctly', () => {
      const result = UnitifyJS.convert(1000, 'meters', 'miles', 'length');
      assert.strictEqual(result, 0.621371);
    });

    it('should convert weight units correctly', () => {
      const result = UnitifyJS.convert(100, 'grams', 'pounds', 'weight');
      assert.strictEqual(result, 0.220462);
    });

    it('should convert volume units correctly', () => {
      const result = UnitifyJS.convert(100, 'teaspoons', 'gallons', 'volume');
      assert.strictEqual(result, 0.13020839494489464);
    });

    it('should convert temperature units correctly', () => {
      const result = UnitifyJS.convert(
        100,
        'celsius',
        'fahrenheit',
        'temperature'
      );
      assert.strictEqual(result, 212);
    });

    it('should convert speed units correctly', () => {
      const result = UnitifyJS.convert(100, 'km/h', 'knots', 'speed');
      assert.strictEqual(result, 53.9957);
    });

    it('should convert time units correctly', () => {
      const result = UnitifyJS.convert(100, 'years', 'months', 'time');
      assert.strictEqual(result, 1200.1522070015221);
    });

    it('should convert energy units correctly', () => {
      const result = UnitifyJS.convert(
        100,
        'joules',
        'horsepowerHours',
        'energy'
      );
      assert.strictEqual(result, 0.00003725);
    });

    it('should convert power pressure correctly', () => {
      const result = UnitifyJS.convert(
        100,
        'torr',
        'poundsPerSquareFoot',
        'pressure'
      );
      assert.strictEqual(result, 278.44898155085843);
    });

    it('should convert power units correctly', () => {
      const result = UnitifyJS.convert(
        100,
        'watts',
        'kilocaloriesPerHour',
        'power'
      );
      assert.strictEqual(result, 85.9845);
    });

    it('should convert data units correctly', () => {
      const result = UnitifyJS.convert(100, 'bytes', 'bits', 'data');
      assert.strictEqual(result, 800);
    });

    it('should convert angle units correctly', () => {
      const result = UnitifyJS.convert(100, 'degrees', 'radians', 'angle');
      assert.strictEqual(result, 1.7453292519943295);
    });

    it('should convert luminance units correctly', () => {
      const result = UnitifyJS.convert(
        100,
        'candelasPerSquareMeter',
        'nits',
        'luminance'
      );
      assert.strictEqual(result, 100);
    });
    it('no valid conversion', () => {
      const result = UnitifyJS.convert(
        100,
        'candelasPerSquareMeter',
        'nits',
        'power'
      );
      assert.strictEqual(result, NaN);
    });
  });
});
