LootJS.modifiers((event) => {
    event
        .addLootTypeModifier(LootType.FISHING) // or multiple LootType.BLOCK, LootType.CHEST ...
        .randomChance(0.3)
        .addLoot("minecraft:heart_of_the_sea");
});