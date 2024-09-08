ServerEvents.recipes(event => {
    event.recipes.create.mixing('ad_astra:oil', [
        Item.of('minecraft:coal', 10),
        Item.of('minecraft:blaze_powder', 4),
        '#forge:seeds',
        '#forge:seeds',
        '#forge:seeds',
        '#forge:seeds',
        '#forge:seeds',
        '#forge:seeds',
        '#forge:seeds',
        '#forge:seeds',
        '#forge:seeds',
        '#forge:seeds',
        Fluid.water(1000),
    ]).superheated().id('gac:kjs/ad_astra/oil');
});