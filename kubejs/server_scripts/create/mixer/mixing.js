ServerEvents.recipes(event => {
    event.recipes.create.mixing('minecraft:obsidian', [
        Fluid.water(1000),
        Fluid.lava(1000),
    ]).id('gac:kjs/minecraft/obsidian');

    event.recipes.create.mixing('minecraft:soul_sand', [
        'minecraft:brown_terracotta',
        'minecraft:sandstone',
        Fluid.lava(500),
    ]).id('gac:kjs/minecraft/soulsand');
});