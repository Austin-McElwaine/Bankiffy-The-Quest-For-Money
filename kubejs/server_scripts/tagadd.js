const leaves = [
    'minecraft:oak_leaves', 'minecraft:spruce_leaves', 'minecraft:birch_leaves',
'minecraft:jungle_leaves', 'minecraft:acacia_leaves', 'minecraft:dark_oak_leaves',
'minecraft:mangrove_leaves', 'minecraft:cherry_leaves', 'minecraft:pale_oak_leaves', 'minecraft:azalea_leaves',
'minecraft:flowering_azalea_leaves', 'quark:ancient_leaves', 'quark:blue_blossom_leaves', 'quark:lavender_blossom_leaves', 'quark:orange_blossom_leaves',
'quark:yellow_blossom_leaves', 'quark:red_blossom_leaves', 'occultism:otherworld_leaves', 'occultism:otherworld_leaves_natural', 'forestry:tree_oak_decorative_leaves',
'forestry:tree_dark_oak_decorative_leaves', 'forestry:tree_birch_decorative_leaves', 'forestry:tree_lime_decorative_leaves',
'forestry:tree_walnut_decorative_leaves', 'forestry:tree_chestnut_decorative_leaves', 'forestry:tree_cherry_decorative_leaves', 'forestry:tree_hill_cherry_decorative_leaves',
'forestry:tree_lemon_decorative_leaves', 'forestry:tree_plum_decorative_leaves', 'forestry:tree_maple_decorative_leaves', 'forestry:tree_spruce_decorative_leaves', 'forestry:tree_larch_decorative_leaves',
'forestry:tree_pine_decorative_leaves', 'forestry:tree_sequoia_decorative_leaves', 'forestry:tree_giant_sequoia_decorative_leaves', 'forestry:tree_jungle_decorative_leaves',
'forestry:tree_teak_decorative_leaves', 'forestry:tree_ipe_decorative_leaves', 'forestry:tree_kapok_decorative_leaves', 'forestry:tree_ebony_decorative_leaves', 'forestry:tree_zebrawood_decorative_leaves',
'forestry:tree_mahogany_decorative_leaves', 'forestry:tree_acacia_decorative_leaves', 'forestry:tree_desert_acacia_decorative_leaves', 'forestry:tree_padauk_decorative_leaves',
'forestry:tree_balsa_decorative_leaves', 'forestry:tree_cocobolo_decorative_leaves', 'forestry:tree_wenge_decorative_leaves', 'forestry:tree_baobab_decorative_leaves',
'forestry:tree_mahoe_decorative_leaves', 'forestry:tree_willow_decorative_leaves', 'forestry:tree_sipiri_decorative_leaves', 'forestry:tree_papaya_decorative_leaves', 'forestry:tree_date_decorative_leaves',
'forestry:tree_poplar_decorative_leaves', 'forestry:tree_elm_decorative_leaves', 'forestry:tree_fir_decorative_leaves', 'forestry:tree_coconut_decorative_leaves', 'forestry:tree_beech_decorative_leaves',
'forestry:tree_feijoa_decorative_leaves', 'forestry:tree_dogwood_decorative_leaves', 'forestry:tree_ginkgo_decorative_leaves', 'forestry:tree_jacaranda_decorative_leaves',
'forestry:tree_pewen_decorative_leaves', 'forestry:tree_macrocarpa_decorative_leaves', 'forestry:tree_olive_decorative_leaves', 'forestry:tree_orange_decorative_leaves', 'forestry:tree_pear_decorative_leaves',
'forestry:tree_kauri_decorative_leaves', 'jaffabricate:orange_leaves', 'jaffabricate:orange_leaves_alt', 'bloodyhell:blood_leaves', 'bloodyhell:soul_leaves', 'bloodyhell:hanging_bloodtree_leaves',
'tconstruct:earth_slime_leaves', 'tconstruct:sky_slime_leaves', 'tconstruct:ender_slime_leaves', 'biomesoplenty:origin_leaves', 'biomesoplenty:flowering_oak_leaves', 'biomesoplenty:cypress_leaves',
'biomesoplenty:snowblossom_leaves', 'biomesoplenty:rainbow_birch_leaves', 'biomesoplenty:fir_leaves', 'biomesoplenty:pine_leaves', 'biomesoplenty:red_maple_leaves', 'biomesoplenty:orange_maple_leaves',
'biomesoplenty:yellow_maple_leaves', 'biomesoplenty:redwood_leaves', 'biomesoplenty:mahogany_leaves', 'biomesoplenty:jacaranda_leaves', 'biomesoplenty:palm_leaves', 'biomesoplenty:willow_leaves',
'biomesoplenty:dead_leaves', 'biomesoplenty:magic_leaves', 'biomesoplenty:umbran_leaves', 'biomesoplenty:hellbark_leaves', 'biomesoplenty:empyreal_leaves', 'vampirism:dark_leaves',
'ars_nouveau:blue_archwood_leaves', 'ars_nouveau:red_archwood_leaves', 'ars_nouveau:purple_archwood_leaves', 'ars_nouveau:green_archwood_leaves', 'fossil:calamites_leaves', 'fossil:cordaites_leaves',
'fossil:mutant_tree_leaves', 'fossil:palm_leaves', 'fossil:sigillaria_leaves', 'fossil:tempskya_leaves', 'forbidden_arcanus:aurum_leaves', 'forbidden_arcanus:nuggety_aurum_leaves', 'crabbersdelight:palm_leaves'
];

ServerEvents.tags('item', event => {
    event.add('forge:ingots/redstone_alloy', 'projectred_core:red_ingot')
    event.add('forge:plastic', 'pneumaticcraft:plastic')
    event.add('minecolonies:breakable_ore', 'nuclearcraft:boron_deepslate_ore')
    event.add('minecolonies:breakable_ore', 'nuclearcraft:boron_ore')
    event.add('minecolonies:breakable_ore', 'nuclearcraft:cobalt_deepslate_ore')
    event.add('minecolonies:breakable_ore', 'nuclearcraft:cobalt_ore')
    event.add('minecolonies:breakable_ore', 'nuclearcraft:lead_deepslate_ore')
    event.add('minecolonies:breakable_ore', 'nuclearcraft:lead_ore')
    event.add('minecolonies:breakable_ore', 'nuclearcraft:magnesium_deepslate_ore')
    event.add('minecolonies:breakable_ore', 'nuclearcraft:magnesium_ore')
    event.add('minecolonies:breakable_ore', 'nuclearcraft:platinum_deepslate_ore')
    event.add('minecolonies:breakable_ore', 'nuclearcraft:platinum_ore')
    event.add('minecolonies:breakable_ore', 'nuclearcraft:silver_deepslate_ore')
    event.add('minecolonies:breakable_ore', 'nuclearcraft:silver_ore')
    event.add('minecolonies:breakable_ore', 'nuclearcraft:thorium_deepslate_ore')
    event.add('minecolonies:breakable_ore', 'nuclearcraft:thorium_ore')
    event.add('minecolonies:breakable_ore', 'nuclearcraft:tin_deepslate_ore')
    event.add('minecolonies:breakable_ore', 'nuclearcraft:tin_ore')
    event.add('minecolonies:breakable_ore', 'nuclearcraft:uranium_deepslate_ore')
    event.add('minecolonies:breakable_ore', 'nuclearcraft:uranium_ore')
    event.add('minecolonies:breakable_ore', 'nuclearcraft:zinc_deepslate_ore')
    event.add('minecolonies:breakable_ore', 'nuclearcraft:zinc_ore')
    event.add('minecolonies:breakable_ore', 'immersiveengineering:deepslate_ore_aluminum')
    event.add('minecolonies:breakable_ore', 'immersiveengineering:ore_aluminum')
    event.add('minecolonies:breakable_ore', 'immersiveengineering:deepslate_ore_nickel')
    event.add('minecolonies:breakable_ore', 'immersiveengineering:ore_nickel')
    event.add('minecolonies:breakable_ore', 'mekanism:deepslate_fluorite_ore')
    event.add('minecolonies:breakable_ore', 'mekanism:fluorite_ore')
    event.add('minecolonies:breakable_ore', 'mekanism:deepslate_osmium_ore')
    event.add('minecolonies:breakable_ore', 'mekanism:osmium_ore')
    event.add('minecolonies:breakable_ore', 'forestry:deepslate_apatite_ore')
    event.add('minecolonies:breakable_ore', 'forestry:apatite_ore')
    event.add('minecolonies:breakable_ore', 'projectred_core:deepslate_electrotine_ore')
    event.add('minecolonies:breakable_ore', 'projectred_core:electrotine_ore')
    event.add('minecolonies:breakable_ore', 'projectred_core:deepslate_peridot_ore')
    event.add('minecolonies:breakable_ore', 'projectred_core:peridot_ore')
    event.add('minecolonies:breakable_ore', 'projectred_core:deepslate_ruby_ore')
    event.add('minecolonies:breakable_ore', 'projectred_core:ruby_ore')
    event.add('minecolonies:breakable_ore', 'projectred_core:deepslate_sapphire_ore')
    event.add('minecolonies:breakable_ore', 'projectred_core:sapphire_ore')
    event.add('minecolonies:breakable_ore', 'fossil:fossil_calcite')
    event.add('minecolonies:breakable_ore', 'fossil:fossil_deepslate')
    event.add('minecolonies:breakable_ore', 'fossil:fossil_dripstone')
    event.add('minecolonies:breakable_ore', 'fossil:fossil_red_sandstone')
    event.add('minecolonies:breakable_ore', 'fossil:fossil_sandstone')
    event.add('minecolonies:breakable_ore', 'fossil:fossil_stone')
    event.add('minecolonies:breakable_ore', 'fossil:fossil_tuff')
    event.add('minecolonies:raw_ore', 'nuclearcraft:boron_chunk')
    event.add('minecolonies:raw_ore', 'nuclearcraft:cobalt_chunk')
    event.add('minecolonies:raw_ore', 'nuclearcraft:lead_chunk')
    event.add('minecolonies:raw_ore', 'nuclearcraft:magnesium_chunk')
    event.add('minecolonies:raw_ore', 'nuclearcraft:platinum_chunk')
    event.add('minecolonies:raw_ore', 'nuclearcraft:silver_chunk')
    event.add('minecolonies:raw_ore', 'nuclearcraft:thorium_chunk')
    event.add('minecolonies:raw_ore', 'nuclearcraft:tin_chunk')
    event.add('minecolonies:raw_ore', 'nuclearcraft:uranium_chunk')
    event.add('minecolonies:raw_ore', 'nuclearcraft:zinc_chunk')
    event.add('minecolonies:raw_ore', 'immersiveengineering:raw_aluminum')
    event.add('minecolonies:raw_ore', 'immersiveengineering:raw_nickel')
    event.add('minecolonies:raw_ore', 'mekanism:raw_osmium')
    event.add('forge:leaves', leaves);
})

ServerEvents.tags('block', event => {
    event.add('forge:leaves', leaves);
});
