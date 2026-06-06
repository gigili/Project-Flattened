ServerEvents.recipes(event => {
	const inter = 'kubejs:incomplete_blaze_egg';

	event.recipes.create.sequenced_assembly([
		Item.of('minecraft:blaze_spawn_egg').withChance(.40),
        Item.of('minecraft:rotten_flesh').withChance(.60)
	], 'minecraft:egg', [
		event.recipes.createFilling(inter, [inter, Fluid.of('minecraft:water', 1000)]),
		event.recipes.createPressing(inter, inter),
		event.recipes.createPressing(inter, inter),
		event.recipes.createFilling(inter, [inter, Fluid.of('minecraft:lava', 1000)]),
		event.recipes.createFilling(inter, [inter, Fluid.of('minecraft:lava', 1000)])
	]).transitionalItem(inter).loops(5).id("gac:kjs/create/assembly/blaze_egg");
});
