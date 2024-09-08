ServerEvents.recipes(event => {        
    event.remove({ output: 'projectexpansion:final_star_shard' });
	event.remove({ output: 'projectexpansion:final_star' });

    event.recipes.create.sequenced_assembly([
		Item.of('projectexpansion:final_star_shard').withChance(.75), // this is the item that will appear in JEI as the result
		Item.of('minecraft:nether_star').withChance(.25),
	], 'minecraft:nether_star', [ // 'minecraft:nether_star' is the input
		// the transitional item set by `transitionalItem('create:incomplete_large_cogwheel')` is the item used during the intermediate stages of the assembly
		event.recipes.createDeploying('kubejs:incomplete_final_star_shard', ['kubejs:incomplete_final_star_shard', 'projectexpansion:colossal_star_omega']),
		// like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
		event.recipes.createDeploying('kubejs:incomplete_final_star_shard', ['kubejs:incomplete_final_star_shard', 'minecraft:netherite_block']),
		event.recipes.createFilling('kubejs:incomplete_final_star_shard', ['kubejs:incomplete_final_star_shard', Fluid.of('create_enchantment_industry:hyper_experience', 500)])
	]).id("gac:kjs/create/assembly/final_star_shard").transitionalItem('kubejs:incomplete_final_star_shard').loops(4) // set the transitional item and the number of loops

	event.recipes.create.mechanical_crafting('projectexpansion:final_star', [
		'RCCCR',
		'TXFXT',
		'TFDFT',
		'TXFXT',
		'RCCCR'
	  ], {
		R: 'minecraft:end_crystal',
		F: 'projectexpansion:final_power_flower',
		D: 'minecraft:dragon_egg',
		T: 'minecraft:nether_star',
		X: 'minecraft:netherite_block',
		C: 'ad_astra:calorite_block'
	  }).id("gac:kjs/create/crafting/final_star");
})