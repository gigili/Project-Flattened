ServerEvents.recipes(event => {
    const recipiesToRemoveByMod = [];

    const recipiesToRemoveByOutput = [
        'powah:uraninite',
        'cobblefordays:tier_2',
        'cobblefordays:tier_3', 
        'cobblefordays:tier_4', 
        'cobblefordays:tier_5',
    ];

    const recipiesToRemoveById = [
        'createsifter:sifting/gravel_andesite_mesh',
        'createsifter:sifting/gravel_zinc_mesh',
        'createsifter:sifting/gravel_advanced_brass_mesh',
        'projectexpansion:transmutation_interface',
        'ae2:transform/certus_quartz_crystals',
        'ae2:charger/meteorite_compass',
        'create:milling/gravel',
    ];

    recipiesToRemoveByMod.forEach(modId => {
        event.remove({ mod: modId });
    });

    recipiesToRemoveByOutput.forEach(modId => {
        event.remove({ output: modId });
    });

    recipiesToRemoveById.forEach(id => {
        event.remove({ id: id });
    });

    // Remove emerald to diamond recipe via Philosophers Stone
    event.remove({
        output: 'minecraft:diamond',
        mod: 'projecte'
    });

    event.remove({
        output: 'minecraft:emerald',
        mod: 'projecte'
    });
})