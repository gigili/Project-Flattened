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
        '#forge:raw_materials',
        'minecraft:netherite_scrap',
        '#forge:dusts',
        'minecraft:diamond',
        'minecraft:emerald',
        'mob_grinding_utils:dragon_muffler',
        'mob_grinding_utils:mob_swab',
        '#forge:nether_stars',
        '#forge:gems/lapis',
        'minecraft:quartz',
        'minecraft:end_stone',
        'minecraft:netherrack',
    ];

   
    itemsToTag.forEach(item => {
        event.add('gac:remove_emc', item);
    });


    const advanceAEQuantumArmor = [
        'advanced_ae:quantum_chestplate',
        'advanced_ae:quantum_helmet',
        'advanced_ae:quantum_leggings',
        'advanced_ae:quantum_boots',
    ];

    const projectEDarkArmor = ['projecte:dm_helmet', 'projecte:dm_chestplate', 'projecte:dm_leggings', 'projecte:dm_boots'];
    const projectERadArmor = ['projecte:rm_helmet', 'projecte:rm_chestplate', 'projecte:rm_leggings', 'projecte:rm_boots'];
    const projectEGemArmor = ['projecte:gem_helmet', 'projecte:gem_chestplate', 'projecte:gem_chestplate', 'projecte:gem_boots'];

    advanceAEQuantumArmor.forEach(item => event.add('ad_astra:nether_space_suit_items', item));
    advanceAEQuantumArmor.forEach(item => event.add('ad_astra:freeze_resistant_armor', item));
    advanceAEQuantumArmor.forEach(item => event.add('ad_astra:heat_resistant_armor', item));
    advanceAEQuantumArmor.forEach(item => event.add('ad_astra:jet_suit_items', item));

    // Dark Matter Armor
    projectEDarkArmor.forEach(item => event.add('ad_astra:nether_space_suit_items', item));
    projectEDarkArmor.forEach(item => event.add('ad_astra:freeze_resistant_armor', item));
    
    // Red Matter Armor 
    projectERadArmor.forEach(item => event.add('ad_astra:nether_space_suit_items', item));
    projectERadArmor.forEach(item => event.add('ad_astra:heat_resistant_armor', item));
    
    // Gem Armor
    projectEGemArmor.forEach(item => event.add('ad_astra:nether_space_suit_items', item));
    projectEGemArmor.forEach(item => event.add('ad_astra:jet_suit_items', item));  
    projectEGemArmor.forEach(item => event.add('ad_astra:freeze_resistant_armor', item));
    projectEGemArmor.forEach(item => event.add('ad_astra:heat_resistant_armor', item));
});