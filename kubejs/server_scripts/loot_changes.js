LootJS.modifiers(event => {
    event.addLootTableModifier(/^minecraft:chests\/.*/)
    // PneumaticCraft
    .removeLoot('pneumaticcraft:logistics_core')
    .removeLoot('pneumaticcraft:pressure_tube')
    .removeLoot('pneumaticcraft:capacitor')
    .removeLoot('pneumaticcraft:transistor')
    .removeLoot('pneumaticcraft:spawner_agitator')
    .removeLoot('pneumaticcraft:compressed_stone')
    .removeLoot('pneumaticcraft:compressed_iron_leggings')
    .removeLoot('pneumaticcraft:compressed_iron_chestplate')
    .removeLoot('pneumaticcraft:compressed_iron_helmet')
    .removeLoot('pneumaticcraft:compressed_iron_boots')
    .removeLoot('pneumaticcraft:vortex_cannon')
    .removeLoot('pneumaticcraft:pneumatic_cylinder')
    .removeLoot('pneumaticcraft:gun_ammo_ap')
    .removeLoot('pneumaticcraft:gun_ammo_explosive')
    .removeLoot('pneumaticcraft:gun_ammo_freezing')
    .removeLoot('pneumaticcraft:gun_ammo_weighted')
    .removeLoot('pneumaticcraft:gun_ammo_incendiary')
    .removeLoot('pneumaticcraft:programming_puzzle')
    .removeLoot('pneumaticcraft:ingot_iron_compressed')
    // EnderIO
    .removeLoot('enderio:wood_gear')
    .removeLoot('enderio:stone_gear')
    .removeLoot('enderio:iron_gear')
    .removeLoot('enderio:vibrant_gear')
    .removeLoot('enderio:energized_gear')
    .removeLoot('enderio:dark_steel_ingot')
    .removeLoot('enderio:vibrant_alloy_ingot')
    .removeLoot('enderio:copper_alloy_ingot')
    .removeLoot('enderio:pulsating_alloy_ingot')
    .removeLoot('enderio:dark_steel_sword')
    .removeLoot('enderio:redstone_alloy_ingot');
});


