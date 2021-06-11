// Product's Carbon Footprint in kg
// for one "unit" = SUM(Materials, Manufacturing, Transportation, Product Use, End of Life)

// Materials = component material * consumption * weight - percent recycled
// Manufacturing = manufacturing process energy * country grid
// Transport = distance * product weight * mode
// Product Use = number of cycles * product weight * wash/dry
// End of Life = product weight * end of life factor - percent returned - percent recycled


export const getFootprint = (name) => {


    if(name) {
        return 8
    }
    return 10
}
