ServerEvents.recipes(event => {
    event.recipes.create.mixing('minecraft:obsidian', [
        Fluid.water(1000),
        Fluid.lava(1000),
    ]).id('gac:kjs/minecraft/obsidian');
});