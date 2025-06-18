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

    event.recipes.create.mixing('minecraft:end_stone', [
        Item.of('minecraft:stone', 4),
        'minecraft:ender_pearl',
        Fluid.lava(1000),
    ]).heated().id('gac:kjs/minecraft/end_stone');

     event.recipes.create.mixing('minecraft:rabbit_spawn_egg', [
        'minecraft:beef', 
        'minecraft:porkchop', 
        'minecraft:mutton', 
        'minecraft:chicken', 
        Item.of('minecraft:egg', 4),
        Fluid.of('create:potion', 250, {Potion: "minecraft:regeneration"}),
    ]).heated().id('gac:kjs/minecraft/rabbit_spawn_egg');
});