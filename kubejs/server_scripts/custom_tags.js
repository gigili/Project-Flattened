ServerEvents.tags('item', event => {
    const itemsToTag = [
        'minecraft:obsidian',
        '#forge:seeds',
        '#forge:crops',
        '@create',
        '@powah',
        '@ae2',
        '@laserio',
        '@framedblocks',
        '#forge:ingots',
        'minecraft:blaze_rod',
        'minecraft:blaze_powder',
        '#minecraft:stairs',
        '#forge:fences',
        '#forge:fence_gates',
        '#minecraft:doors',
        '#minecraft:trapdoors',
        '#minecraft:pressure_plates',
        '#minecraft:buttons',
        '#minecraft:planks',
        '#minecraft:slabs',
        '#forge:dyes',
        'minecraft:paper',
        'minecraft:book',
        'minecraft:bookshelf',
        'minecraft:enchanted_book',
        '#forge:stripped_logs',
        '#forge:stripped_wood',
        '#forge:nuggets',
        '#forge:nuggets',
        '#chipped:lantern',
        '#minecraft:stone_bricks',
        '#minecraft:walls',
        'minecraft:water_bucket',
        'minecraft:lava_bucket',
        '#forge:chests',
        'minecraft:dried_kelp',
        'minecraft:dried_kelp_block',
        '#utilitix:potions',
        '#minecraft:arrows',
        '#forge:armors',
        '#forge:tools',
        '@ironfurnaces',
        '@ironjetpacks',
    ];

   
    itemsToTag.forEach(item => {
        event.add('gac:remove_emc', item);
    });
});