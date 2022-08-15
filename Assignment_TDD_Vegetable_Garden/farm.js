const getYieldForPlant = (crops, factor) => {
    const defaultYield = crops.yield;
    if (!factor) {
        return defaultYield;
    } 
    else {
        let factorSun;
        let factorWind;
        const influence = crops.factor;

        switch (factor.sun) {
            case "low":
                factorSun = (influence.sun.low + 100) / 100;
                break;
            case "medium":
                factorSun = (influence.sun.medium + 100) /100;
                break;
            case "high":
                factorSun = (influence.sun.high + 100) /100;
                break;
            default: factorSun = 1;
        }
        switch (factor.wind) {
            case "low":
                factorWind = (influence.wind.low + 100) / 100;
                break;
            case "medium":
                factorWind = (influence.wind.medium + 100) /100;
                break;
            case "high":
                factorWind = (influence.wind.high + 100) /100;
                break;
            default: factorWind = 1;
        };
        return defaultYield * factorSun * factorWind;
    };
};



const getYieldForCrop = (crop, factor) => crop.numCrops * getYieldForPlant(crop.crop, factor);

/*
alternatively, this has proven to work also:



const getYieldForCrop =(crops, factor) =>{
    const defaultYield = crops.numCrops * crops.crop.yield;
    if (!factor) {
        return defaultYield;
    } 
    else {
        let factorSun;
        let factorWind;
        const influence = crops.crop.factor

        switch (factor.sun) {
            case "low":
                factorSun = (influence.sun.low + 100) / 100;
                break;
            case "medium":
                factorSun = (influence.sun.medium + 100) /100;
                break;
            case "high":
                factorSun = (influence.sun.high + 100) /100;
                break;
            default: factorSun = 1;
        }
        switch (factor.wind) {
            case "low":
                factorWind = (influence.wind.low + 100) / 100;
                break;
            case "medium":
                factorWind = (influence.wind.medium + 100) /100;
                break;
            case "high":
                factorWind = (influence.wind.high + 100) /100;
                break;
            default: factorWind = 1;
        };
        return defaultYield * factorSun * factorWind;
    };
};
*/



const getTotalYield = (harvest, factor) => {
    const crops = harvest.crops;
    const cropsYield = crops.map((crop) => getYieldForCrop(crop, factor));
    return cropsYield.reduce((total, crop) => total + crop);
};


const getCostsForCrop= (crops) => {
    return crops.numCrops * crops.crop.cost
};

const getRevenueForCrop = (crops, factor) => {
    cropsYield= getYieldForCrop(crops, factor);
    return cropsYield * crops.crop.salePrice;
};

const getProfitForCrop = (crops, factor) => {
    return getRevenueForCrop(crops, factor) - getCostsForCrop(crops);
};

const getTotalProfit = (harvest, factor) => {
    const cropsYield = harvest.crops;
    const cropsProfit = cropsYield.map((crops) => getProfitForCrop(crops, factor));
    return cropsProfit.reduce((total, crop) => crop + total);
};


module.exports= {
    getYieldForPlant, 
    getYieldForCrop, 
    getTotalYield, 
    getCostsForCrop, 
    getRevenueForCrop, 
    getProfitForCrop,
    getTotalProfit    
};