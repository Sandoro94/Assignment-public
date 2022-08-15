const { getYieldForPlant, getYieldForCrop, getTotalYield, getCostsForCrop, getRevenueForCrop, getProfitForCrop, getTotalProfit} = require("./farm");

describe("getYieldForPlant", () => {
    const corn = {
        name: "corn",
        yield: 30,
    };
    test("Get yield for plant with no environment factors", () => {
        expect(getYieldForPlant(corn)).toBe(30);
    });
});

describe("getYieldForCrop", () => {
    test("Get yield for crop, simple", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(getYieldForCrop(input)).toBe(30);
    });
});


describe("getTotalYield", () => {
    test("Calculate total yield with multiple crops", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
        ];
        expect(getTotalYield({ crops })).toBe(23);
    });

    test("Calculate total yield with 0 amount", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const crops = [{ crop: corn, numCrops: 0 }];
        expect(getTotalYield({ crops })).toBe(0);
    });
        test("Calculate total yield with 0 amount", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const crops = [{ crop: corn, numCrops: 0 }];
        expect(getTotalYield({ crops })).toBe(0);
    });
});

describe("getCostsForCrop", () => {
    test("Calculate costs with a single crop without environmental factors", () => {
        const maize = {
            name: "maize",
            cost: 1,
        };
        const harvest = {
            crop: maize,
            numCrops: 230,
        };
        expect(getCostsForCrop(harvest)).toBe(230);
    });
});

describe("getRevenueForCrop", () => {
    test("Calculate revenue from single crop without environmental factors", () => {
        const apple = {
            name: "apple",
            yield: "5",
            salePrice: 2,
        };
        const harvest = {
            crop: apple,
            numCrops: 5,
        };
        expect (getRevenueForCrop(harvest)).toBe(50)
    });
});

describe("getProfitForCrop", () => {
    test("Calculate profit from crops without environmental factors", () => {
        const apple = {
            name: "apple",
            salePrice: 2,
            cost: 1.25,
            yield: 1
        };
        const harvest = {
            crop: apple,
            numCrops: 5,
        };
        expect (getProfitForCrop(harvest)).toBe(3.75)
    });
});

describe("getTotalProfit", () => {
    test("Calculate total profit without environmental factors with multiple crops", () =>{
        const apple = {
            name: "apple",
            salePrice: 2,
            cost: 1.25,
            yield: 1
        };
        const corn = {
            name: "corn",
            salePrice: 1,
            cost: 0.50,
            yield: 3,

        };
        const pumpkin = {
            name: "pumpkin",
            salePrice: 4,
            cost: 3,
            yield: 4,
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
            { crop: apple, numCrops: 5 }
        ];
        expect (getTotalProfit({crops})).toBe(42.25)
    });
});

describe("getYieldForPlant with environmental factors", () => {
    const corn = {
        name: "corn",
        yield: 30,
        factor: {
            sun: {
            low: -50,
            medium: 0,
            high: 50,
            },
        },
    };
    const environmentFactors = {
        sun: "low",
    };
    
    test("Get yield for plant with environment(sun) factors", () => {
        expect(getYieldForPlant(corn, environmentFactors)).toBe(15);
    });
});

describe("getYieldForcrop with environmental factors", () => {
    test("getYieldForCrop, 1 crop with 1 negative environmental factor", () => {
        const corn = {
            name: "corn",
            yield: 30,
            factor: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                wind: {
                    lots: -60,
                    normal: -30,
                    little: 0,
                }
            },
        };
        const environmentFactors = {
            sun: "low",
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(getYieldForCrop(input, environmentFactors)).toBe(150);
    });
    test("getYieldForCrop, 1 crop with 1 positive environmental factor ", () => {
        const corn = {
            name: "corn",
            yield: 30,
            factor: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                wind: {
                    lots: -60,
                    normal: -30,
                    little: 0,
                }
            },
        };
        const environmentFactors = {
            sun: "high",
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(getYieldForCrop(input, environmentFactors)).toBe(450);
    });

    test("getYieldForCrop, 1 crop with multiple environmental factors", () =>{
        const corn = {
            name: "corn",
            yield: 30,
            factor: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                wind: {
                    high: -60,
                    medium: -30,
                    low: 0,
                }
            },
        };
        const environmentFactors = {
            sun: "high",
            wind: "high",
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(getYieldForCrop(input, environmentFactors)).toBe(180);
    });
});

describe("getTotalYield, multiple crops with environmental factors", () => {
    test("Calculate total yield with multiple crops and different environmental factors", () => {
        const corn = {
            name: "corn",
            yield: 30,
            factor: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                wind: {
                    high: -60,
                    medium: -30,
                    low: 0,
                }
            },
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
            factor: {
                sun: {
                    low: -25,
                    medium: 0,
                    high: 25,
                },
                wind: {
                    high: -60,
                    medium: -30,
                    low: 0,
                }
            }
        };
        const environmentFactors = {
            sun: "high",
            wind: "high",
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
        ];
        expect(getTotalYield({crops}, environmentFactors)).toBe(94);
    });
    test("Calculate total yield with multiple crops", () => {
        const corn = {
            name: "corn",
            yield: 30,
            factor: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                wind: {
                    high: -60,
                    medium: -30,
                    low: 0,
                }
            },
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
            factor: {
                sun: {
                    low: -25,
                    medium: 0,
                    high: 25,
                },
                wind: {
                    high: -60,
                    medium: -30,
                    low: 0,
                }
            }
        };
        const environmentFactors = {
            sun: "low",
            wind: "low",
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
        ];
        expect(getTotalYield({crops}, environmentFactors)).toBe(81);
    });
});

describe("getRevenueForCrop, with environmentalFactors", () => {
    test("Calculate revenue from single crop without environmental factors", () => {
        const apple = {
            name: "apple",
            yield: 5,
            salePrice: 2,
            factor: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                wind: {
                    high: -60,
                    medium: -30,
                    low: 0,
                }
            }
        };
        const harvest = {
            crop: apple,
            numCrops: 5,
        };
        const environmentFactors = {
            sun: "high",
            wind: "medium",
        };
        expect (getRevenueForCrop(harvest, environmentFactors)).toBe(52.5)
    });
});

describe("getProfitForCrop, with entironmentalFactors", () => {
    test("Calculate profit from single crop with environmental factors", () => {
        const apple = {
            name: "apple",
            salePrice: 2,
            cost: 1.25,
            yield: 5,
            factor: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                wind: {
                    high: -60,
                    medium: -30,
                    low: 0,
                }
            }
        };
        const harvest = {
            crop: apple,
            numCrops: 5,
        };
        const environmentFactors = {
            sun: "high",
            wind: "high",
        };
        expect (getProfitForCrop(harvest, environmentFactors)).toBe(23.75)
    });
});

describe("getTotalProfit", () => {
    test("Calculate total profit without environmental factors with multiple crops", () =>{
        const apple = {
            name: "apple",
            salePrice: 2,
            cost: 1.25,
            yield: 1,
            factor: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                wind: {
                    high: -60,
                    medium: -30,
                    low: 0,
                }
            }
        };
        const corn = {
            name: "corn",
            salePrice: 1,
            cost: 0.50,
            yield: 3,
            factor: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                wind: {
                    high: -60,
                    medium: -30,
                    low: 0,
                }
            }

        };
        const pumpkin = {
            name: "pumpkin",
            salePrice: 4,
            cost: 3,
            yield: 4,
            factor: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                wind: {
                    high: -60,
                    medium: -30,
                    low: 0,
                }
            }
        };
        const environmentFactors = {
            sun: "high",
            wind: "low",
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
            { crop: apple, numCrops: 5 }
        ];
        expect (getTotalProfit({crops}, environmentFactors)).toBe(70.75)
    });
});