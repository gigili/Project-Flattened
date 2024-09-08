ServerEvents.recipes(event => {
    event.remove({ output: 'powah:energy_cell_creative' });

    event.custom({
        "type": "powah:energizing",
        "ingredients": [
            Ingredient.of('powah:energy_cell_nitro').toJson(),
            Ingredient.of('powah:energy_cell_nitro').toJson(),
            Ingredient.of('projectexpansion:final_star').toJson(),
            Ingredient.of('powah:energy_cell_nitro').toJson(),
            Ingredient.of('powah:energy_cell_nitro').toJson(),
        ],
        "energy": 2147483647,
        "result": Item.of('powah:energy_cell_creative').toJson()
    }).id('gac:kjs/powah/energizing/energy_cell_creative');

    event.shaped(Item.of('ironjetpacks:cell', { Id: "ironjetpacks:creative" }).strongNBT(), [
        ' A ',
        'BCB',
        ' A '
    ], {
        A: '#forge:storage_blocks/redstone',
        B: 'powah:ender_cell_nitro',
        C: 'powah:battery_nitro'
    }).id('gac:kjs/creative/ironjetpacks_creative_cell');

    event.shaped(Item.of('ironjetpacks:thruster', { Id: "ironjetpacks:creative" }).strongNBT(), [
        ' B ',
        'BCB',
        ' D '
    ], {
        B: 'powah:nitro_crystal_block',
        C: Item.of('ironjetpacks:cell', { Id: "ironjetpacks:creative" }).strongNBT(),
        D: 'ironfurnaces:netherite_furnace'
    }).id('gac:kjs/creative/ironjetpacks_creative_thruster');

    event.shaped(Item.of('ironjetpacks:capacitor', { Id: "ironjetpacks:creative" }), [
        'BAB',
        'CDC',
        'BAB'
    ], {
        A: Item.of('ironjetpacks:cell', { Id: "ironjetpacks:creative" }).strongNBT(),
        B: 'powah:energy_cell_nitro',
        C: 'powah:reactor_nitro',
        D: 'powah:energy_cell_creative',
    }).id('gac:kjs/creative/ironjetpacks_creative_capacator');

    event.shaped(Item.of('ironjetpacks:jetpack', { Id: "ironjetpacks:creative" }).strongNBT(), [
        ' C ',
        'BFB',
        'DED'
    ], {
        B: 'minecfraft:netherite_ingot',
        C: Item.of('ironjetpacks:capacitor', { Id: "ironjetpacks:creative" }).strongNBT(),
        D: Item.of('ironjetpacks:thruster', { Id: "ironjetpacks:creative" }).strongNBT(),
        E: 'projectexpansion:final_star',
        F: Item.of('ironjetpacks:jetpack', { Id: "ironjetpacks:emerald" }).weakNBT()
    }).id('gac:kjs/creative/ironjetpacks_creative_jetpack');

    event.custom({
        type: 'powah:energizing',
        ingredients: [
            Ingredient.of('megacells:mega_energy_cell').toJson(),
            Ingredient.of('megacells:mega_energy_cell').toJson(),
            Ingredient.of('projectexpansion:final_star').toJson(),
            Ingredient.of('megacells:mega_energy_cell').toJson(),
            Ingredient.of('megacells:mega_energy_cell').toJson(),
        ],
        energy: '2147483647',
        result: Item.of('ae2:creative_energy_cell').toJson()
    }).id(`gac:kjs/creative/ae2_creative_energy_cell`);

    event.recipes.create.mechanical_crafting('create:creative_crate', [
        'ESSSE',
        'EBCBE',
        'ECXCE',
        'EBCBE',
        'ESSSE',
    ], {
        E: 'minecraft:ender_chest',
        B: 'minecraft:barrel',
        C: 'minecraft:chest',
        X: 'projectexpansion:final_star',
        S: 'minecraft:nether_star'
    }).id("gac:kjs/creative/crate");

    event.recipes.create.mechanical_crafting('create:handheld_worldshaper', [
        'NRERN',
        'NPMPN',
        'CMXMC',
        'NPMPN',
        'NRERN'
    ], {
        R: 'create:mechanical_arm',
        P: 'create:potato_cannon',
        E: 'create:extendo_grip',
        N: 'minecraft:netherite_block',
        X: 'projectexpansion:final_star',
        C: 'create:creative_crate',
        M: 'create:precision_mechanism'
    }).id("gac:kjs/creative/world_shaper");

    event.recipes.create.sequenced_assembly([
        Item.of('create:creative_blaze_cake').withChance(1), // this is the item that will appear in JEI as the result
    ], 'create:blaze_cake', [ // 'create:blaze_cake' is the input
        event.recipes.createFilling('create:blaze_cake', ['create:blaze_cake', Fluid.of('create_enchantment_industry:hyper_experience', 1000)]),
        event.recipes.createDeploying('create:blaze_cake', ['create:blaze_cake', 'projectexpansion:final_star']),
    ]).id("gac:kjs/creative/create/assembly/creative_blaze_cake").transitionalItem('create:blaze_cake').loops(1) // set the transitional item and the number of loops
});