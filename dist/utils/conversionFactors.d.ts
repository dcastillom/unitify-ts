export declare const conversionFactors: {
    length: {
        meters: number;
        kilometers: number;
        miles: number;
        feet: number;
        inches: number;
        centimeters: number;
        millimeters: number;
        yards: number;
        nauticalMiles: number;
        micrometers: number;
        nanometers: number;
        angstroms: number;
        lightYears: number;
        astronomicalUnits: number;
        parsecs: number;
    };
    weight: {
        grams: number;
        kilograms: number;
        pounds: number;
        ounces: number;
        tons: number;
        milligrams: number;
        stones: number;
        micrograms: number;
        nanograms: number;
        picograms: number;
        carats: number;
        grains: number;
        longTons: number;
        shortTons: number;
    };
    volume: {
        liters: number;
        milliliters: number;
        gallons: number;
        pints: number;
        cups: number;
        tablespoons: number;
        teaspoons: number;
        cubicMeters: number;
        cubicCentimeters: number;
        cubicInches: number;
        cubicFeet: number;
        cubicYards: number;
        cubicMillimeters: number;
        cubicDecimeters: number;
        fluidOunces: number;
        quarts: number;
        barrels: number;
        bushels: number;
        pecks: number;
    };
    temperature: {
        celsius: (value: number) => number;
        fahrenheit: (value: number) => number;
        kelvin: (value: number) => number;
        rankine: (value: number) => number;
        delisle: (value: number) => number;
        newton: (value: number) => number;
        reaumur: (value: number) => number;
        romer: (value: number) => number;
    };
    speed: {
        'km/h': number;
        'miles/h': number;
        'm/s': number;
        knots: number;
        'ft/s': number;
        'cm/s': number;
        'mm/s': number;
        'in/s': number;
        mach: number;
        speedOfLight: number;
    };
    area: {
        squareMeters: number;
        squareKilometers: number;
        squareMiles: number;
        squareYards: number;
        squareFeet: number;
        squareInches: number;
        hectares: number;
        acres: number;
        squareCentimeters: number;
        squareMillimeters: number;
        squareMicrometers: number;
        squareNanometers: number;
        squareDecimeters: number;
        squareDecameters: number;
        squareHectometers: number;
        squareGigameters: number;
    };
    time: {
        nanoseconds: number;
        microseconds: number;
        milliseconds: number;
        seconds: number;
        minutes: number;
        hours: number;
        days: number;
        weeks: number;
        months: number;
        years: number;
        decades: number;
        centuries: number;
        millennia: number;
    };
    energy: {
        joules: number;
        kilojoules: number;
        calories: number;
        kilocalories: number;
        wattHours: number;
        kilowattHours: number;
        electronVolts: number;
        britishThermalUnits: number;
        therms: number;
        footPounds: number;
        ergs: number;
        horsepowerHours: number;
    };
    pressure: {
        pascals: number;
        kilopascals: number;
        bar: number;
        psi: number;
        atmospheres: number;
        millibars: number;
        torr: number;
        inchesOfMercury: number;
        centimetersOfWater: number;
        kilogramsPerSquareCentimeter: number;
        poundsPerSquareFoot: number;
    };
    power: {
        watts: number;
        kilowatts: number;
        horsepower: number;
        megawatts: number;
        gigawatts: number;
        milliwatts: number;
        microwatts: number;
        nanowatts: number;
        picowatts: number;
        femtowatts: number;
        attowatts: number;
        deciwatts: number;
        decawatts: number;
        hectowatts: number;
        kilocaloriesPerHour: number;
        footPoundsPerMinute: number;
        BTUsPerHour: number;
    };
    data: {
        bits: number;
        bytes: number;
        kilobits: number;
        kilobytes: number;
        megabits: number;
        megabytes: number;
        gigabits: number;
        gigabytes: number;
        terabits: number;
        terabytes: number;
    };
    angle: {
        degrees: number;
        radians: number;
        gradians: number;
        arcminutes: number;
        arcseconds: number;
        milliradians: number;
        microradians: number;
        nanoradians: number;
        turns: number;
        quadrants: number;
        sextants: number;
    };
    luminance: {
        candelasPerSquareMeter: number;
        nits: number;
        footLamberts: number;
        stilbs: number;
        lumensPerSquareMeter: number;
        lumensPerSquareCentimeter: number;
        lumensPerSquareMillimeter: number;
        phot: number;
        nox: number;
        lamberts: number;
        millilamberts: number;
    };
    computationTime: {
        seconds: number;
        minutes: number;
        hours: number;
        days: number;
        weeks: number;
        months: number;
        years: number;
        decades: number;
        centuries: number;
        millennia: number;
        cpuCycles: number;
    };
};