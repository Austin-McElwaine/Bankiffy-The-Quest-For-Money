ServerEvents.recipes(event => {
    event.remove({output: 'tconstruct:pattern'});

    event.shaped('tconstruct:pattern', [
        'WS ',
        'RW ',
        '   '
    ], {
        S: '#forge:string',
        R: '#forge:rods/wooden',
        W: '#minecraft:planks'
    });

    //grout
    event.remove({ type: 'minecraft:smelting', input: 'tconstruct:grout' })
    event.remove({ type: 'minecraft:blasting', input: 'tconstruct:grout' })
    event.remove({ type: 'enderio:alloy_smelting', input: 'tconstruct:grout' })

    event.custom({
        type: 'jumbofurnace:jumbo_smelting',
        ingredients: [
            { item: 'tconstruct:grout',
              count: 1

            }
        ],
        result: {
            item: 'tconstruct:seared_brick',
            count: 1
        },
        experience: 0.3,
        cookingtime: 200
    })

    //red alloy
    event.remove({ type: 'minecraft:smelting', input: 'projectred_core:red_iron_comp' })
    event.remove({ type: 'minecraft:blasting', input: 'projectred_core:red_iron_comp' })
    event.remove({ type: 'enderio:alloy_smelting', input: 'projectred_core:red_iron_comp' })
    event.remove({ type: 'jumbofurnace:jumbo_smelting', output: 'morered:red_alloy_ingot' })

    event.custom({
        type: 'jumbofurnace:jumbo_smelting',
        ingredients: [
            { item: 'projectred_core:red_iron_comp',
                count: 1

            }
        ],
        result: {
            item: 'morered:red_alloy_ingot',
            count: 1
        },
        experience: 0.3,
        cookingtime: 200
    })

    event.remove({ type: 'pneumaticcraft:explosion_crafting' })

    event.recipes.create.compacting('pneumaticcraft:dense_iron_clump', ['5x minecraft:iron_ingot']).superheated();

    event.recipes.create.compacting('pneumaticcraft:compressed_iron_clump', ['pneumaticcraft:dense_iron_clump', '5x minecraft:iron_ingot']).superheated();

    event.recipes.create.mixing('pneumaticcraft:softened_compressed_iron_clump', ['pneumaticcraft:compressed_iron_clump', Fluid.lava(250)]).superheated();

    event.recipes.createaddition.rolling({input: { item: 'pneumaticcraft:softened_compressed_iron_clump' },result: { item: 'pneumaticcraft:hot_compressed_iron', count: 8 }})

    event.recipes.create.splashing('pneumaticcraft:ingot_iron_compressed','pneumaticcraft:hot_compressed_iron');

    event.remove({ id: 'createaddition:mixing/biomass_from_leaves' })

    event.recipes.create.mixing('createaddition:biomass', ['3x #forge:leaves', { fluidTag: 'forge:plantoil', amount: 100 }]).heated();

    event.replaceInput({}, 'cyclic:biomass', 'createaddition:biomass');

    event.custom({
        "type": "immersiveengineering:generator_fuel",
        "burnTime": 250,
        "fluidTag": "forge:biofuel"
    });

    event.custom({
        "type": "immersiveengineering:generator_fuel",
        "burnTime": 250,
        "fluidTag": "forge:ethanol"
    });

    event.custom({
        "type": "immersiveengineering:generator_fuel",
        "burnTime": 500,
        "fluidTag": "forge:diesel"
    });

    event.custom({
        "type": "immersiveengineering:generator_fuel",
        "burnTime": 500,
        "fluidTag": "forge:kerosene"
    });

    event.custom({
        "type": "immersiveengineering:generator_fuel",
        "burnTime": 1000,
        "fluidTag": "forge:lpg"
    });

    event.remove({ output: 'cyclic:biomass' })

    event.custom({
        type: 'immersiveengineering:arc_furnace',
        input: { item: 'minecraft:iron_ingot' },
        additives: [
            { item: 'minecraft:redstone' }
        ],
        results: [
            { item: 'morered:red_alloy_ingot' }
        ],
        slag: { item: 'immersiveengineering:slag' },
        energy: 25600,
        time: 100
    })

    event.remove({ type: 'minecraft:crafting_shapeless', output: 'immersiveengineering:dust_constantan' })
    event.remove({ type: 'create:mixing', output: 'immersiveengineering:dust_constantan' })
    event.remove({ type: 'immersiveengineering:alloy', output: 'immersiveengineering:dust_constantan' })
    event.remove({ type: 'create:mixing', output: 'immersiveengineering:ingot_constantan' })
    event.remove({ type: 'immersiveengineering:alloy', output: 'immersiveengineering:ingot_constantan' })
    event.remove({ id: 'tconstruct:smeltery/alloys/molten_constantan' })

    event.remove({
        output: 'create:andesite_alloy',
        type: 'minecraft:crafting_shaped',
        input: ['minecraft:andesite', '#c:nuggets/zinc']
    })

    event.remove({
        output: 'create:andesite_alloy',
        type: 'minecraft:crafting_shaped',
        input: ['minecraft:andesite', '#minecraft:nuggets/iron']
    })

    event.remove({output: 'mysticalagriculture:inferium_farmland'});

    event.shaped('mysticalagriculture:inferium_farmland', [
        'IMI',
        'IDI',
        'III'
    ], {
        I: 'mysticalagriculture:inferium_essence',
        D: 'minecraft:farmland',
        M: '#matc:inferium'
    });

    event.remove({output: 'mysticalagriculture:prudentium_farmland'});

    event.shaped('mysticalagriculture:prudentium_farmland', [
        'IMI',
        'IDI',
        'III'
    ], {
        I: 'mysticalagriculture:prudentium_essence',
        D: 'mysticalagriculture:inferium_farmland',
        M: '#matc:prudentium'
    });

    event.remove({output: 'mysticalagriculture:tertium_farmland'});

    event.shaped('mysticalagriculture:tertium_farmland', [
        'IMI',
        'IDI',
        'III'
    ], {
        I: 'mysticalagriculture:tertium_essence',
        D: 'mysticalagriculture:prudentium_farmland',
        M: '#matc:tertium'
    });

    event.remove({output: 'mysticalagriculture:imperium_farmland'});

    event.shaped('mysticalagriculture:imperium_farmland', [
        'IMI',
        'IDI',
        'III'
    ], {
        I: 'mysticalagriculture:imperium_essence',
        D: 'mysticalagriculture:tertium_farmland',
        M: '#matc:imperium'
    });

    event.remove({output: 'mysticalagriculture:supremium_farmland'});

    event.shaped('mysticalagriculture:supremium_farmland', [
        'IMI',
        'IDI',
        'III'
    ], {
        I: 'mysticalagriculture:supremium_essence',
        D: 'mysticalagriculture:imperium_farmland',
        M: '#matc:supremium'
    });

    event.remove({output: 'mysticalagradditions:insanium_farmland'});

    event.shaped('mysticalagradditions:insanium_farmland', [
        'IMI',
        'IDI',
        'III'
    ], {
        I: 'mysticalagradditions:insanium_essence',
        D: 'mysticalagriculture:supremium_farmland',
        M: 'mysticalagriculture:master_infusion_crystal'
    });

    event.remove({output: 'mysticalagriculture:prosperity_seed_base'});

    event.shaped('mysticalagriculture:prosperity_seed_base', [
        'IDI',
        'DSD',
        'IDI'
    ], {
        S: 'minecraft:wheat_seeds',
        I: 'forbidden_arcanus:dark_nether_star',
        D: 'mysticalagriculture:prosperity_gemstone_block'
    });

    event.remove({output: 'mysticalagriculture:infusion_altar'});

    event.shaped('mysticalagriculture:infusion_altar', [
        'IWI',
        ' S ',
        'SSS'
    ], {
        S: 'minecraft:stone',
        W: 'vampirism:blood_infused_enhanced_iron_block',
        I: 'botania:gaia_ingot'
    });

    event.remove({output: 'mysticalagriculture:infusion_pedestal'});

    event.shaped('mysticalagriculture:infusion_pedestal', [
        'IWI',
        ' S ',
        ' S '
    ], {
        S: 'minecraft:stone',
        W: 'vampirism:blood_infused_enhanced_iron_block',
        I: 'botania:gaia_ingot'
    });

    event.remove({output: 'mysticalagriculture:awakening_altar'});

    event.shaped('mysticalagriculture:awakening_altar', [
        'SSS',
        'SAS',
        'SSS'
    ], {
        A: 'mysticalagriculture:infusion_altar',
        S: 'mysticalagriculture:soulstone'
    });

    event.remove({output: 'mysticalagriculture:awakening_pedestal'});

    event.shaped('mysticalagriculture:awakening_pedestal', [
        'SSS',
        'SAS',
        'SSS'
    ], {
        A: 'mysticalagriculture:infusion_pedestal',
        S: 'mysticalagriculture:soulstone'
    });

    event.remove({output: 'mysticalagriculture:prosperity_gemstone'});

    event.shaped('mysticalagriculture:prosperity_gemstone', [
        'III',
        'IDI',
        'III'
    ], {
        I: 'mysticalagriculture:prosperity_shard',
        D: 'ae2:charged_certus_quartz_crystal'
    });

    event.remove({output: 'mysticalagriculture:soulium_seed_base'});

    event.shaped('mysticalagriculture:soulium_seed_base', [
        'IDI',
        'DSD',
        'IDI'
    ], {
        S: 'mysticalagriculture:prosperity_seed_base',
        I: 'quark:soul_bead',
        D: 'mysticalagriculture:soulium_block'
    });

    event.remove({output: 'immersiveengineering:conveyor_basic'});

    event.shaped(Item.of('immersiveengineering:conveyor_basic', 4), [
        '   ',
        'BBB',
        'IRI'
    ], {
        B: 'create:belt_connector',
        I: 'minecraft:iron_ingot',
        R: 'minecraft:redstone'
    });

    event.remove({output: 'immersiveengineering:dynamo'});

    event.shaped(Item.of('immersiveengineering:dynamo', 1), [
        'IPI',
        'RMR',
        'ICI'
    ], {
        P: 'pneumaticcraft:printed_circuit_board',
        M: 'immersiveengineering:component_iron',
        C: 'immersiveengineering:coil_lv',
        I: 'minecraft:iron_ingot',
        R: 'minecraft:redstone'
    });

    event.shaped(Item.of('immersiveengineering:capacitor_lv', 1), [
        'WPW',
        'ICI',
        'WPW'
    ], {
        P: '#forge:plates/lead',
        W: '#forge:treated_wood',
        C: 'cyclic:battery_clay',
        I: 'minecraft:iron_ingot',
    });

    event.remove({output: 'immersiveengineering:rs_engineering'});

    event.shaped(Item.of('immersiveengineering:rs_engineering', 4), [
        'IRI',
        'RPR',
        'IRI'
    ], {
        P: 'pneumaticcraft:printed_circuit_board',
        I: 'immersiveengineering:sheetmetal_iron',
        R: 'minecraft:redstone'
    });

    event.remove({output: 'immersiveengineering:heavy_engineering'});

    event.shaped(Item.of('immersiveengineering:heavy_engineering', 4), [
        'IRI',
        'RPR',
        'IRI'
    ], {
        P: 'pneumaticcraft:printed_circuit_board',
        I: 'immersiveengineering:sheetmetal_steel',
        R: 'immersiveengineering:component_steel'
    });

    event.remove({output: 'immersiveengineering:light_engineering'});

    event.shaped(Item.of('immersiveengineering:light_engineering', 4), [
        'IRI',
        'RPR',
        'IRI'
    ], {
        P: 'pneumaticcraft:printed_circuit_board',
        I: 'immersiveengineering:sheetmetal_iron',
        R: 'immersiveengineering:component_iron'
    });

    event.remove({output: 'immersiveengineering:cokebrick'});

    event.shaped(Item.of('immersiveengineering:cokebrick', 3), [
        'IRI',
        'RPR',
        'IRI'
    ], {
        P: 'pneumaticcraft:large_tank',
        I: '#forge:ingots/brick',
        R: 'pneumaticcraft:compressed_bricks'
    });

    event.remove({output: 'immersiveengineering:blastbrick'});

    event.shaped(Item.of('immersiveengineering:blastbrick', 3), [
        'IRI',
        'RIR',
        'IRI'
    ], {
        I: 'minecraft:nether_brick',
        R: 'pneumaticcraft:compressed_bricks'
    });

    event.remove({output: 'adpother:iron_respirator'});

    event.shaped(Item.of('adpother:iron_respirator', 1), [
        'BHB',
        'LIL',
        'WGW'
    ], {
        B: 'minecraft:glass_bottle',
        H: 'minecraft:leather_helmet',
        L: '#forge:leather',
        I: 'minecraft:iron_ingot',
        W: '#minecraft:wool',
        G: '#forge:leaves',
    });

    event.remove({output: 'adpother:gold_respirator'});

    event.shaped(Item.of('adpother:gold_respirator', 1), [
        'BHB',
        'LIL',
        'WGW'
    ], {
        B: 'minecraft:glass_bottle',
        H: 'minecraft:leather_helmet',
        L: '#forge:leather',
        I: 'minecraft:gold_ingot',
        W: '#minecraft:wool',
        G: '#forge:leaves',
    });

    event.remove({output: 'adpother:diamond_respirator'});

    event.shaped(Item.of('adpother:diamond_respirator', 1), [
        'BHB',
        'LIL',
        'WGW'
    ], {
        B: 'minecraft:glass_bottle',
        H: 'minecraft:leather_helmet',
        L: '#forge:leather',
        I: 'minecraft:diamond',
        W: '#minecraft:wool',
        G: '#forge:leaves',
    });

    event.remove({output: 'industrialforegoing:fluid_extractor'});

    event.shaped(Item.of('industrialforegoing:fluid_extractor', 1), [
        'INI',
        'CMC',
        'IPI'
    ], {
        N: 'minecraft:light_weighted_pressure_plate',
        I: '#forge:ingots/steel',
        C: '#forge:cobblestone',
        M: 'industrialforegoing:machine_frame_pity',
        P: 'minecraft:piston'
    });

    event.remove({output: 'industrialforegoing:machine_frame_pity'});

    event.shaped(Item.of('industrialforegoing:machine_frame_pity', 1), [
        'WIW',
        'IMI',
        'WIW'
    ], {
        W: 'immersiveengineering:plate_constantan',
        I: '#forge:ingots/steel',
        M: 'pneumaticcraft:printed_circuit_board'
    });

    event.remove({output: 'industrialforegoing:latex_processing_unit'});

    event.shaped(Item.of('industrialforegoing:latex_processing_unit', 1), [
        'IRI',
        'BMB',
        'IFI'
    ], {
        I: '#forge:ingots/steel',
        R: 'morered:red_alloy_ingot',
        B: 'minecraft:bucket',
        M: 'industrialforegoing:machine_frame_pity',
        F: 'minecraft:furnace'
    });

    event.remove({output: 'industrialforegoing:ore_laser_base'});

    event.shaped(Item.of('industrialforegoing:ore_laser_base', 1), [
        'FRF',
        'BMB',
        'IFI'
    ], {
        R: 'createoreexcavation:drilling_machine',
        I: '#forge:gears/diamond',
        B: 'minecraft:iron_ore',
        M: 'industrialforegoing:machine_frame_advanced',
        F: 'immersiveengineering:sample_drill'
    });

    event.remove({output: 'mekanism:digital_miner'});

    event.shaped(Item.of('mekanism:digital_miner', 1), [
        'FRF',
        'BMB',
        'ISI'
    ], {
        I: 'mekanism:teleportation_core',
        R: 'industrialforegoing:ore_laser_base',
        B: 'mekanism:logistical_sorter',
        M: 'mekanism:robit',
        F: 'mekanism:alloy_atomic',
        S: 'mekanism:steel_casing'
    });

    event.remove({ id: 'solarflux:mirror' });

    event.shaped(Item.of('solarflux:mirror', 3), [
        '   ',
        'GGG',
        ' I '
    ], {
        I: 'pneumaticcraft:ingot_iron_compressed',
        G: '#forge:glass'
    });

    event.shaped(Item.of('solarflux:mirror', 6), [
        '   ',
        'GGG',
        ' J '
    ], {
        J: '#forge:ingots/steel',
        G: '#forge:glass'
    });

    event.remove({output: 'littlelogistics:fishing_barge'});

    event.shaped(Item.of('littlelogistics:fishing_barge', 1), [
        ' M ',
        'FFF',
        'SSS'
    ], {
        S: '#forge:ingots/steel',
        F: 'minecraft:fishing_rod',
        M: 'industrialforegoing:marine_fisher'
    });

    event.remove({output: 'ae2:inscriber'});

    event.shaped(Item.of('ae2:inscriber', 1), [
        'IPI',
        'R I',
        'IPI'
    ], {
        I: '#forge:ingots/steel',
        P: 'minecraft:sticky_piston',
        R: 'morered:red_alloy_ingot'
    });

    event.remove({output: 'ae2:drive'});

    event.shaped(Item.of('ae2:drive', 1), [
        'ISI',
        'C C',
        'ISI'
    ], {
        I: '#forge:ingots/steel',
        C: 'ae2:fluix_glass_cable',
        S: 'ae2:engineering_processor'
    });

    event.remove({output: 'pipez:item_pipe'});

    event.shaped(Item.of('pipez:item_pipe', 64), [
        'III',
        'DRD',
        'III'
    ], {
        I: '#forge:ingots/steel',
        D: 'minecraft:dropper',
        R: 'morered:red_alloy_ingot'
    });

    event.remove({output: 'pipez:fluid_pipe'});

    event.shaped(Item.of('pipez:fluid_pipe', 64), [
        'III',
        'BRB',
        'III'
    ], {
        I: '#forge:ingots/steel',
        B: 'minecraft:bucket',
        R: 'morered:red_alloy_ingot'
    });

    event.remove({output: 'pipez:energy_pipe'});

    event.shaped(Item.of('pipez:energy_pipe', 64), [
        'III',
        'RRR',
        'III'
    ], {
        I: '#forge:ingots/steel',
        R: 'morered:red_alloy_ingot'
    });

    event.remove({output: 'pipez:gas_pipe'});

    event.shaped(Item.of('pipez:gas_pipe', 64), [
        'III',
        'BRB',
        'III'
    ], {
        I: '#forge:ingots/steel',
        B: 'mekanism:alloy_infused',
        R: 'morered:red_alloy_ingot'
    });

    event.remove({output: 'pipez:universal_pipe'});

    event.shaped(Item.of('pipez:universal_pipe', 64), [
        'XYZ',
        'IBI',
        'XYZ'
    ], {
        I: '#forge:ingots/steel',
        B: 'morered:red_alloy_ingot',
        X: 'pipez:item_pipe',
        Y: 'pipez:energy_pipe',
        Z: 'pipez:fluid_pipe'
    });

//    event.custom({
//        type: 'industrialforegoing:dissolution_chamber',
//        input: [
//            { tag: 'forge:plastic' },
//            { tag: 'industrialforegoing:machine_frame/advanced' },
//            { tag: 'forge:plastic' },
//            { item: 'minecraft:netherite_ingot' },
//            { item: 'minecraft:netherite_ingot' },
//            { item: 'ae2:logic_processor' },
//            { item: 'ae2:calculation_processor' },
//            { item: 'ae2:engineering_processor' }
//        ],
//        inputFluid: '{Amount:300,FluidName:"industrialforegoing:pink_slime"}',
//        output: {
//            count: 1,
//            item: 'industrialforegoing:machine_frame_supreme'
//        },
//        processingTime: 300
//    })

    event.remove({output: 'mekanism:metallurgic_infuser'});

    event.shaped(Item.of('mekanism:metallurgic_infuser', 1), [
        'IFI',
        'RMR',
        'IFI'
    ], {
        I: '#forge:ingots/steel',
        R: 'morered:red_alloy_ingot',
        F: 'industrialforegoing:resourceful_furnace',
        M: 'industrialforegoing:machine_frame_supreme'
    });

    event.remove({output: 'mekanism:basic_infusing_factory'});

    event.shaped(Item.of('mekanism:basic_infusing_factory', 1), [
        'RAR',
        'IMI',
        'RAR'
    ], {
        I: '#forge:ingots/steel',
        R: 'morered:red_alloy_ingot',
        A: 'mekanism:basic_control_circuit',
        M: 'mekanism:metallurgic_infuser'
    });

    event.remove({output: 'mekanism:advanced_infusing_factory'});

    event.shaped(Item.of('mekanism:advanced_infusing_factory', 1), [
        'RAR',
        'IMI',
        'RAR'
    ], {
        I: 'industrialforegoing:pink_slime_ingot',
        R: 'mekanism:alloy_infused',
        A: 'mekanism:advanced_control_circuit',
        M: 'mekanism:basic_infusing_factory'
    });

    event.remove({output: 'mekanism:elite_infusing_factory'});

    event.shaped(Item.of('mekanism:elite_infusing_factory', 1), [
        'RAR',
        'IMI',
        'RAR'
    ], {
        I: 'mekanism:ingot_refined_glowstone',
        R: 'mekanism:alloy_reinforced',
        A: 'mekanism:elite_control_circuit',
        M: 'mekanism:advanced_infusing_factory'
    });

    event.remove({output: 'mekanism:ultimate_infusing_factory'});

    event.shaped(Item.of('mekanism:ultimate_infusing_factory', 1), [
        'RAR',
        'IMI',
        'RAR'
    ], {
        I: 'mekanism:ingot_refined_obsidian',
        R: 'mekanism:alloy_atomic',
        A: 'mekanism:ultimate_control_circuit',
        M: 'mekanism:elite_infusing_factory'
    });

    event.remove({output: 'mekanism:steel_casing'});

    event.shaped(Item.of('mekanism:steel_casing', 1), [
        'III',
        'IMI',
        'III'
    ], {
        I: '#forge:ingots/steel',
        M: 'industrialforegoing:machine_frame_supreme'
    });

    event.remove({output: 'mekanism:energy_tablet'});

    event.shaped(Item.of('mekanism:energy_tablet', 1), [
        'ARA',
        'RBR',
        'ARA'
    ], {
        R: 'morered:red_alloy_ingot',
        A: 'mekanism:alloy_infused',
        B: 'pneumaticcraft:printed_circuit_board'
    });

    event.remove({output: 'mekanismgenerators:heat_generator'});

    event.shaped(Item.of('mekanismgenerators:heat_generator', 1), [
        'III',
        'COC',
        'CFC'
    ], {
        I: '#forge:ingots/steel',
        O: '#forge:ingots/osmium',
        C: 'mekanism:basic_control_circuit',
        F: 'industrialforegoing:resourceful_furnace'
    });

    event.remove({output: 'mekanism:precision_sawmill'});

    event.shaped(Item.of('mekanism:precision_sawmill', 1), [
        'ICI',
        'AMA',
        'ICI'
    ], {
        I: 'immersiveengineering:ingot_constantan',
        A: 'mekanism:alloy_infused',
        C: 'mekanism:basic_control_circuit',
        M: 'mekanism:steel_casing'
    });

    event.remove({output: 'mekanism:basic_sawing_factory'});

    event.shaped(Item.of('mekanism:basic_sawing_factory', 1), [
        'RAR',
        'IMI',
        'RAR'
    ], {
        I: '#forge:ingots/steel',
        R: 'morered:red_alloy_ingot',
        A: 'mekanism:basic_control_circuit',
        M: 'mekanism:precision_sawmill'
    });

    event.remove({output: 'mekanism:advanced_sawing_factory'});

    event.shaped(Item.of('mekanism:advanced_sawing_factory', 1), [
        'RAR',
        'IMI',
        'RAR'
    ], {
        I: 'industrialforegoing:pink_slime_ingot',
        R: 'mekanism:alloy_infused',
        A: 'mekanism:advanced_control_circuit',
        M: 'mekanism:basic_sawing_factory'
    });

    event.remove({output: 'mekanism:elite_sawing_factory'});

    event.shaped(Item.of('mekanism:elite_sawing_factory', 1), [
        'RAR',
        'IMI',
        'RAR'
    ], {
        I: 'mekanism:ingot_refined_glowstone',
        R: 'mekanism:alloy_reinforced',
        A: 'mekanism:elite_control_circuit',
        M: 'mekanism:advanced_sawing_factory'
    });

    event.remove({output: 'mekanism:ultimate_sawing_factory'});

    event.shaped(Item.of('mekanism:ultimate_sawing_factory', 1), [
        'RAR',
        'IMI',
        'RAR'
    ], {
        I: 'mekanism:ingot_refined_obsidian',
        R: 'mekanism:alloy_atomic',
        A: 'mekanism:ultimate_control_circuit',
        M: 'mekanism:elite_sawing_factory'
    });

    event.remove({output: 'mekanism:enrichment_chamber'});

    event.shaped(Item.of('mekanism:enrichment_chamber', 1), [
        'ICI',
        'AMA',
        'ICI'
    ], {
        I: 'immersiveengineering:ingot_constantan',
        A: 'minecraft:iron_ingot',
        C: 'mekanism:basic_control_circuit',
        M: 'mekanism:steel_casing'
    });

    event.remove({output: 'mekanism:basic_enriching_factory'});

    event.shaped(Item.of('mekanism:basic_enriching_factory', 1), [
        'RAR',
        'IMI',
        'RAR'
    ], {
        I: '#forge:ingots/steel',
        R: 'morered:red_alloy_ingot',
        A: 'mekanism:basic_control_circuit',
        M: 'mekanism:enrichment_chamber'
    });

    event.remove({output: 'mekanism:advanced_enriching_factory'});

    event.shaped(Item.of('mekanism:advanced_enriching_factory', 1), [
        'RAR',
        'IMI',
        'RAR'
    ], {
        I: 'industrialforegoing:pink_slime_ingot',
        R: 'mekanism:alloy_infused',
        A: 'mekanism:advanced_control_circuit',
        M: 'mekanism:basic_enriching_factory'
    });

    event.remove({output: 'mekanism:elite_enriching_factory'});

    event.shaped(Item.of('mekanism:elite_enriching_factory', 1), [
        'RAR',
        'IMI',
        'RAR'
    ], {
        I: 'mekanism:ingot_refined_glowstone',
        R: 'mekanism:alloy_reinforced',
        A: 'mekanism:elite_control_circuit',
        M: 'mekanism:advanced_enriching_factory'
    });

    event.remove({output: 'mekanism:ultimate_enriching_factory'});

    event.shaped(Item.of('mekanism:ultimate_enriching_factory', 1), [
        'RAR',
        'IMI',
        'RAR'
    ], {
        I: 'mekanism:ingot_refined_obsidian',
        R: 'mekanism:alloy_atomic',
        A: 'mekanism:ultimate_control_circuit',
        M: 'mekanism:elite_enriching_factory'
    });

    event.remove({ id: 'solarflux:solar_panel_5' });

    event.shaped(Item.of('solarflux:sp_5', 2), [
        'PPP',
        'SES',
        'SBS'
    ], {
        P: 'solarflux:photovoltaic_cell_3',
        S: 'solarflux:sp_4',
        E: 'mekanism:energy_tablet',
        B: 'minecraft:gold_block'
    });

    event.remove({output: 'nuclearcraft:coil_copper'});

    event.shaped(Item.of('nuclearcraft:coil_copper', 1), [
        'CC ',
        'II ',
        'CC '
    ], {
        C: 'immersiveengineering:wirecoil_copper',
        I: 'minecraft:iron_ingot'
    });

    event.remove({output: 'nuclearcraft:manufactory'});

    event.shaped(Item.of('nuclearcraft:manufactory', 1), [
        'LRL',
        'AMA',
        'LCL'
    ], {
        L: '#c:ingots/lead',
        R: 'morered:red_alloy_ingot',
        A: 'mekanism:basic_control_circuit',
        M: 'mekanism:steel_casing',
        C: 'nuclearcraft:coil_copper'
    });

    event.remove({output: 'nuclearcraft:alloy_smelter'});

    event.shaped(Item.of('nuclearcraft:alloy_smelter', 1), [
        'PRP',
        'IFI',
        'PCP'
    ], {
        P: 'nuclearcraft:plate_basic',
        F: 'minecraft:blast_furnace',
        C: 'nuclearcraft:coil_copper',
        I: 'mekanism:basic_control_circuit',
        R: 'morered:red_alloy_ingot'
    });

    event.remove({output: 'nuclearcraft:plate_basic'});

    event.shaped(Item.of('nuclearcraft:plate_basic', 1), [
        'SL ',
        'LS ',
        '   '
    ], {
        S: '#forge:ingots/steel',
        L: '#c:ingots/lead'
    });

    event.shaped(Item.of('nuclearcraft:plate_basic', 1), [
        'LS ',
        'SL ',
        '   '
    ], {
        S: '#forge:ingots/steel',
        L: '#c:ingots/lead'
    });

    event.remove({output: 'nuclearcraft:plate_advanced'});

    event.shaped(Item.of('nuclearcraft:plate_advanced', 2), [
        'TPT',
        'TRT',
        'TPT'
    ], {
        T: 'nuclearcraft:tough_alloy_ingot',
        P: 'nuclearcraft:plate_basic',
        R: 'morered:red_alloy_ingot'
    });

    event.remove({output: 'nuclearcraft:isotope_separator'});

    event.shaped(Item.of('nuclearcraft:isotope_separator', 1), [
        'PMP',
        'RFR',
        'PMP'
    ], {
        P: 'nuclearcraft:plate_basic',
        F: 'nuclearcraft:chassis',
        M: 'nuclearcraft:motor',
        R: 'morered:red_alloy_ingot'
    });

    event.remove({output: 'nuclearcraft:chassis'});

    event.shaped(Item.of('nuclearcraft:chassis', 1), [
        'TST',
        'SFS',
        'TST'
    ], {
        S: '#c:ingots/lead',
        T: 'nuclearcraft:tough_alloy_ingot',
        F: 'mekanism:steel_casing'
    });

    event.remove({output: 'nuclearcraft:servo'});

    event.shaped(Item.of('nuclearcraft:servo', 1), [
        'FIF',
        'RSR',
        'SCS'
    ], {
        F: 'nuclearcraft:ferroboron_ingot',
        R: 'morered:red_alloy_ingot',
        S: '#c:ingots/steel',
        C: 'minecraft:copper_ingot',
        I: 'mekanism:basic_control_circuit'
    });

    event.remove({output: 'nuclearcraft:chemical_reactor'});

    event.shaped(Item.of('nuclearcraft:chemical_reactor', 1), [
        'PMP',
        'GFG',
        'PSP'
    ], {
        P: 'nuclearcraft:plate_advanced',
        F: 'nuclearcraft:chassis',
        M: 'nuclearcraft:motor',
        G: 'mekanism:ingot_refined_glowstone',
        S: 'nuclearcraft:servo'
    });

    event.remove({output: 'nuclearcraft:fuel_reprocessor'});

    event.shaped(Item.of('nuclearcraft:fuel_reprocessor', 1), [
        'TGT',
        'EFE',
        'TCT'
    ], {
        T: 'nuclearcraft:tin_silver_ingot',
        F: 'nuclearcraft:chassis',
        E: 'minecraft:ender_pearl',
        G: 'mekanism:ingot_refined_glowstone',
        C: 'nuclearcraft:coil_copper'
    });

    event.remove({output: 'mekanism:crusher'});

    event.shaped(Item.of('mekanism:crusher', 1), [
        'ICI',
        'AMA',
        'ICI'
    ], {
        I: 'morered:red_alloy_ingot',
        A: 'minecraft:lava_bucket',
        C: 'mekanism:basic_control_circuit',
        M: 'mekanism:steel_casing'
    });

    event.remove({output: 'mekanism:basic_crushing_factory'});

    event.shaped(Item.of('mekanism:basic_crushing_factory', 1), [
        'RAR',
        'IMI',
        'RAR'
    ], {
        I: '#forge:ingots/steel',
        R: 'morered:red_alloy_ingot',
        A: 'mekanism:basic_control_circuit',
        M: 'mekanism:crusher'
    });

    event.remove({output: 'mekanism:advanced_crushing_factory'});

    event.shaped(Item.of('mekanism:advanced_crushing_factory', 1), [
        'RAR',
        'IMI',
        'RAR'
    ], {
        I: 'industrialforegoing:pink_slime_ingot',
        R: 'mekanism:alloy_infused',
        A: 'mekanism:advanced_control_circuit',
        M: 'mekanism:basic_crushing_factory'
    });

    event.remove({output: 'mekanism:elite_crushing_factory'});

    event.shaped(Item.of('mekanism:elite_crushing_factory', 1), [
        'RAR',
        'IMI',
        'RAR'
    ], {
        I: 'mekanism:ingot_refined_glowstone',
        R: 'mekanism:alloy_reinforced',
        A: 'mekanism:elite_control_circuit',
        M: 'mekanism:advanced_crushing_factory'
    });

    event.remove({output: 'mekanism:ultimate_crushing_factory'});

    event.shaped(Item.of('mekanism:ultimate_crushing_factory', 1), [
        'RAR',
        'IMI',
        'RAR'
    ], {
        I: 'mekanism:ingot_refined_obsidian',
        R: 'mekanism:alloy_atomic',
        A: 'mekanism:ultimate_control_circuit',
        M: 'mekanism:elite_crushing_factory'
    });

    event.remove({output: 'mekanism:energized_smelter'});

    event.shaped(Item.of('mekanism:energized_smelter', 1), [
        'ICI',
        'AMA',
        'ICI'
    ], {
        I: 'morered:red_alloy_ingot',
        A: '#forge:glass/silica',
        C: 'mekanism:basic_control_circuit',
        M: 'mekanism:steel_casing'
    });

    event.remove({output: 'mekanism:basic_smelting_factory'});

    event.shaped(Item.of('mekanism:basic_smelting_factory', 1), [
        'RAR',
        'IMI',
        'RAR'
    ], {
        I: '#forge:ingots/steel',
        R: 'morered:red_alloy_ingot',
        A: 'mekanism:basic_control_circuit',
        M: 'mekanism:energized_smelter'
    });

    event.remove({output: 'mekanism:advanced_smelting_factory'});

    event.shaped(Item.of('mekanism:advanced_smelting_factory', 1), [
        'RAR',
        'IMI',
        'RAR'
    ], {
        I: 'industrialforegoing:pink_slime_ingot',
        R: 'mekanism:alloy_infused',
        A: 'mekanism:advanced_control_circuit',
        M: 'mekanism:basic_smelting_factory'
    });

    event.remove({output: 'mekanism:elite_smelting_factory'});

    event.shaped(Item.of('mekanism:elite_smelting_factory', 1), [
        'RAR',
        'IMI',
        'RAR'
    ], {
        I: 'mekanism:ingot_refined_glowstone',
        R: 'mekanism:alloy_reinforced',
        A: 'mekanism:elite_control_circuit',
        M: 'mekanism:advanced_smelting_factory'
    });

    event.remove({output: 'mekanism:ultimate_smelting_factory'});

    event.shaped(Item.of('mekanism:ultimate_smelting_factory', 1), [
        'RAR',
        'IMI',
        'RAR'
    ], {
        I: 'mekanism:ingot_refined_obsidian',
        R: 'mekanism:alloy_atomic',
        A: 'mekanism:ultimate_control_circuit',
        M: 'mekanism:elite_smelting_factory'
    });

    event.remove({output: 'mekanism:basic_tier_installer'});

    event.shaped(Item.of('mekanism:basic_tier_installer', 1), [
        'RAR',
        'IRI',
        'RAR'
    ], {
        I: '#forge:ingots/steel',
        R: 'morered:red_alloy_ingot',
        A: 'mekanism:basic_control_circuit'
    });

    event.remove({output: 'mekanism:advanced_tier_installer'});

    event.shaped(Item.of('mekanism:advanced_tier_installer', 1), [
        'RAR',
        'IRI',
        'RAR'
    ], {
        I: 'industrialforegoing:pink_slime_ingot',
        R: 'mekanism:alloy_infused',
        A: 'mekanism:advanced_control_circuit'
    });

    event.remove({output: 'mekanism:elite_tier_installer'});

    event.shaped(Item.of('mekanism:elite_tier_installer', 1), [
        'RAR',
        'IRI',
        'RAR'
    ], {
        I: 'mekanism:ingot_refined_glowstone',
        R: 'mekanism:alloy_reinforced',
        A: 'mekanism:elite_control_circuit'
    });

    event.remove({output: 'mekanism:ultimate_tier_installer'});

    event.shaped(Item.of('mekanism:ultimate_tier_installer', 1), [
        'RAR',
        'IRI',
        'RAR'
    ], {
        I: 'mekanism:ingot_refined_obsidian',
        R: 'mekanism:alloy_atomic',
        A: 'mekanism:ultimate_control_circuit'
    });

    event.remove({ id: 'mekanism:control_circuit/basic' });
    event.custom({
        type: 'mekanism:metallurgic_infusing',
        chemicalInput: {
            amount: 160,
            tag: 'mekanism:gold'
        },
        itemInput: {
            ingredient: { item: 'morered:red_alloy_ingot' }
        },
        output: {
            item: 'mekanism:basic_control_circuit'
        }
    })

    event.remove({output: 'mekanism:advanced_control_circuit'});
    event.custom({
        type: 'mekanism:metallurgic_infusing',
        chemicalInput: {
            amount: 160,
            tag: 'mekanism:redstone'
        },
        itemInput: {
            ingredient: { item: 'mekanism:basic_control_circuit' }
        },
        output: {
            item: 'mekanism:advanced_control_circuit'
        }
    })

    event.remove({output: 'mekanism:elite_control_circuit'});
    event.custom({
        type: 'mekanism:metallurgic_infusing',
        chemicalInput: {
            amount: 160,
            tag: 'mekanism:diamond'
        },
        itemInput: {
            ingredient: { item: 'mekanism:advanced_control_circuit' }
        },
        output: {
            item: 'mekanism:elite_control_circuit'
        }
    })
    event.remove({output: 'mekanism:ultimate_control_circuit'});
    event.custom({
        type: 'mekanism:metallurgic_infusing',
        chemicalInput: {
            amount: 160,
            tag: 'mekanism:refined_obsidian'
        },
        itemInput: {
            ingredient: { item: 'mekanism:elite_control_circuit' }
        },
        output: {
            item: 'mekanism:ultimate_control_circuit'
        }
    })

    event.remove({output: 'mekanism:alloy_infused'});
    event.custom({
        type: 'mekanism:metallurgic_infusing',
        chemicalInput: {
            amount: 160,
            tag: 'mekanism:redstone'
        },
        itemInput: {
            ingredient: { tag: 'forge:ingots/steel' }
        },
        output: {
            item: 'mekanism:alloy_infused'
        }
    })

    event.remove({output: 'mekanism:alloy_reinforced'});
    event.custom({
        type: 'mekanism:metallurgic_infusing',
        chemicalInput: {
            amount: 160,
            tag: 'mekanism:diamond'
        },
        itemInput: {
            ingredient: { item: 'mekanism:alloy_infused' }
        },
        output: {
            item: 'mekanism:alloy_reinforced'
        }
    })

    event.remove({output: 'mekanism:alloy_atomic'});
    event.custom({
        type: 'mekanism:metallurgic_infusing',
        chemicalInput: {
            amount: 160,
            tag: 'mekanism:refined_obsidian'
        },
        itemInput: {
            ingredient: { item: 'mekanism:alloy_reinforced' }
        },
        output: {
            item: 'mekanism:alloy_atomic'
        }
    })

    event.remove({output: 'mekanism:basic_compressing_factory'});

    event.shaped(Item.of('mekanism:basic_compressing_factory', 1), [
        'RAR',
        'IMI',
        'RAR'
    ], {
        I: '#forge:ingots/steel',
        R: 'morered:red_alloy_ingot',
        A: 'mekanism:basic_control_circuit',
        M: 'mekanism:osmium_compressor'
    });

    event.remove({output: 'mekanism:advanced_compressing_factory'});

    event.shaped(Item.of('mekanism:advanced_compressing_factory', 1), [
        'RAR',
        'IMI',
        'RAR'
    ], {
        I: 'industrialforegoing:pink_slime_ingot',
        R: 'mekanism:alloy_infused',
        A: 'mekanism:advanced_control_circuit',
        M: 'mekanism:basic_compressing_factory'
    });

    event.remove({output: 'mekanism:elite_compressing_factory'});

    event.shaped(Item.of('mekanism:elite_compressing_factory', 1), [
        'RAR',
        'IMI',
        'RAR'
    ], {
        I: 'mekanism:ingot_refined_glowstone',
        R: 'mekanism:alloy_reinforced',
        A: 'mekanism:elite_control_circuit',
        M: 'mekanism:advanced_compressing_factory'
    });

    event.remove({output: 'mekanism:ultimate_compressing_factory'});

    event.shaped(Item.of('mekanism:ultimate_compressing_factory', 1), [
        'RAR',
        'IMI',
        'RAR'
    ], {
        I: 'mekanism:ingot_refined_obsidian',
        R: 'mekanism:alloy_atomic',
        A: 'mekanism:ultimate_control_circuit',
        M: 'mekanism:elite_compressing_factory'
    });

    event.remove({output: 'mekanism:basic_combining_factory'});

    event.shaped(Item.of('mekanism:basic_combining_factory', 1), [
        'RAR',
        'IMI',
        'RAR'
    ], {
        I: '#forge:ingots/steel',
        R: 'morered:red_alloy_ingot',
        A: 'mekanism:basic_control_circuit',
        M: 'mekanism:combiner'
    });

    event.remove({output: 'mekanism:advanced_combining_factory'});

    event.shaped(Item.of('mekanism:advanced_combining_factory', 1), [
        'RAR',
        'IMI',
        'RAR'
    ], {
        I: 'industrialforegoing:pink_slime_ingot',
        R: 'mekanism:alloy_infused',
        A: 'mekanism:advanced_control_circuit',
        M: 'mekanism:basic_combining_factory'
    });

    event.remove({output: 'mekanism:elite_combining_factory'});

    event.shaped(Item.of('mekanism:elite_combining_factory', 1), [
        'RAR',
        'IMI',
        'RAR'
    ], {
        I: 'mekanism:ingot_refined_glowstone',
        R: 'mekanism:alloy_reinforced',
        A: 'mekanism:elite_control_circuit',
        M: 'mekanism:advanced_combining_factory'
    });

    event.remove({output: 'mekanism:ultimate_combining_factory'});

    event.shaped(Item.of('mekanism:ultimate_combining_factory', 1), [
        'RAR',
        'IMI',
        'RAR'
    ], {
        I: 'mekanism:ingot_refined_obsidian',
        R: 'mekanism:alloy_atomic',
        A: 'mekanism:ultimate_control_circuit',
        M: 'mekanism:elite_combining_factory'
    });

    event.remove({output: 'mekanism:basic_purifying_factory'});

    event.shaped(Item.of('mekanism:basic_purifying_factory', 1), [
        'RAR',
        'IMI',
        'RAR'
    ], {
        I: '#forge:ingots/steel',
        R: 'morered:red_alloy_ingot',
        A: 'mekanism:basic_control_circuit',
        M: 'mekanism:purification_chamber'
    });

    event.remove({output: 'mekanism:advanced_purifying_factory'});

    event.shaped(Item.of('mekanism:advanced_purifying_factory', 1), [
        'RAR',
        'IMI',
        'RAR'
    ], {
        I: 'industrialforegoing:pink_slime_ingot',
        R: 'mekanism:alloy_infused',
        A: 'mekanism:advanced_control_circuit',
        M: 'mekanism:basic_purifying_factory'
    });

    event.remove({output: 'mekanism:elite_purifying_factory'});

    event.shaped(Item.of('mekanism:elite_purifying_factory', 1), [
        'RAR',
        'IMI',
        'RAR'
    ], {
        I: 'mekanism:ingot_refined_glowstone',
        R: 'mekanism:alloy_reinforced',
        A: 'mekanism:elite_control_circuit',
        M: 'mekanism:advanced_purifying_factory'
    });

    event.remove({output: 'mekanism:ultimate_purifying_factory'});

    event.shaped(Item.of('mekanism:ultimate_purifying_factory', 1), [
        'RAR',
        'IMI',
        'RAR'
    ], {
        I: 'mekanism:ingot_refined_obsidian',
        R: 'mekanism:alloy_atomic',
        A: 'mekanism:ultimate_control_circuit',
        M: 'mekanism:elite_purifying_factory'
    });

    event.remove({output: 'mekanism:basic_injecting_factory'});

    event.shaped(Item.of('mekanism:basic_injecting_factory', 1), [
        'RAR',
        'IMI',
        'RAR'
    ], {
        I: '#forge:ingots/steel',
        R: 'morered:red_alloy_ingot',
        A: 'mekanism:basic_control_circuit',
        M: 'mekanism:chemical_injection_chamber'
    });

    event.remove({output: 'mekanism:advanced_injecting_factory'});

    event.shaped(Item.of('mekanism:advanced_injecting_factory', 1), [
        'RAR',
        'IMI',
        'RAR'
    ], {
        I: 'industrialforegoing:pink_slime_ingot',
        R: 'mekanism:alloy_infused',
        A: 'mekanism:advanced_control_circuit',
        M: 'mekanism:basic_injecting_factory'
    });

    event.remove({output: 'mekanism:elite_injecting_factory'});

    event.shaped(Item.of('mekanism:elite_injecting_factory', 1), [
        'RAR',
        'IMI',
        'RAR'
    ], {
        I: 'mekanism:ingot_refined_glowstone',
        R: 'mekanism:alloy_reinforced',
        A: 'mekanism:elite_control_circuit',
        M: 'mekanism:advanced_injecting_factory'
    });

    event.remove({output: 'mekanism:ultimate_injecting_factory'});

    event.shaped(Item.of('mekanism:ultimate_injecting_factory', 1), [
        'RAR',
        'IMI',
        'RAR'
    ], {
        I: 'mekanism:ingot_refined_obsidian',
        R: 'mekanism:alloy_atomic',
        A: 'mekanism:ultimate_control_circuit',
        M: 'mekanism:elite_injecting_factory'
    });

    event.remove({output: 'mekanismgenerators:bio_generator'});

    event.shaped(Item.of('mekanismgenerators:bio_generator', 1), [
        'IAI',
        'MCM',
        'IAI'
    ], {
        I: 'morered:red_alloy_ingot',
        A: 'mekanism:alloy_infused',
        C: 'mekanism:basic_control_circuit',
        M: '#forge:fuels'
    });

    event.remove({output: 'mekanism:nutritional_liquifier'});

    event.shaped(Item.of('mekanism:nutritional_liquifier', 1), [
        'ICI',
        'MAM',
        'ICI'
    ], {
        I: 'morered:red_alloy_ingot',
        A: 'mekanism:steel_casing',
        C: 'mekanism:basic_control_circuit',
        M: 'minecraft:bowl'
    });

    event.remove({output: 'mekanism:pigment_extractor'});

    event.shaped(Item.of('mekanism:pigment_extractor', 1), [
        'ICI',
        'MAM',
        'ICI'
    ], {
        I: 'morered:red_alloy_ingot',
        A: 'mekanism:steel_casing',
        C: 'mekanism:basic_control_circuit',
        M: 'minecraft:flint'
    });

    event.remove({output: 'mekanism:basic_bin'});

    event.shaped(Item.of('mekanism:basic_bin', 1), [
        'CAC',
        'I I',
        'CCC'
    ], {
        I: 'morered:red_alloy_ingot',
        A: 'mekanism:basic_control_circuit',
        C: 'minecraft:cobblestone'
    });

    event.remove({output: 'mekanism_lasers:basic_laser'});

    event.shaped(Item.of('mekanism_lasers:basic_laser', 1), [
        'RAR',
        'IMI',
        'RAR'
    ], {
        I: '#forge:ingots/steel',
        R: 'morered:red_alloy_ingot',
        A: 'mekanism:basic_control_circuit',
        M: 'mekanism:laser'
    });

    event.remove({output: 'mekanism_lasers:advanced_laser'});

    event.shaped(Item.of('mekanism_lasers:advanced_laser', 1), [
        'RAR',
        'IMI',
        'RAR'
    ], {
        I: 'industrialforegoing:pink_slime_ingot',
        R: 'mekanism:alloy_infused',
        A: 'mekanism:advanced_control_circuit',
        M: 'mekanism_lasers:basic_laser'
    });

    event.remove({output: 'mekanism_lasers:elite_laser'});

    event.shaped(Item.of('mekanism_lasers:elite_laser', 1), [
        'RAR',
        'IMI',
        'RAR'
    ], {
        I: 'mekanism:ingot_refined_glowstone',
        R: 'mekanism:alloy_reinforced',
        A: 'mekanism:elite_control_circuit',
        M: 'mekanism_lasers:advanced_laser'
    });

    event.remove({output: 'mekanism_lasers:ultimate_laser'});

    event.shaped(Item.of('mekanism_lasers:ultimate_laser', 1), [
        'RAR',
        'IMI',
        'RAR'
    ], {
        I: 'mekanism:ingot_refined_obsidian',
        R: 'mekanism:alloy_atomic',
        A: 'mekanism:ultimate_control_circuit',
        M: 'mekanism_lasers:elite_laser'
    });

    event.remove({output: 'mekanism:flamethrower'});

    event.shaped(Item.of('mekanism:flamethrower', 1), [
        'SSS',
        'STH',
        'GCG'
    ], {
        T: 'mekanism:advanced_chemical_tank',
        S: '#forge:ingots/steel',
        H: 'immersiveengineering:chemthrower',
        G: 'mekanism:ingot_refined_glowstone',
        C: 'mekanism:advanced_control_circuit',
    });

    event.remove({output: 'mekanism:resistive_heater'});

    event.shaped(Item.of('mekanism:resistive_heater', 1), [
        'IMI',
        'MAM',
        'ICI'
    ], {
        M: 'morered:red_alloy_ingot',
        A: 'mekanism:steel_casing',
        I: 'immersiveengineering:ingot_constantan',
        C: 'mekanism:energy_tablet'
    });

    event.remove({output: 'mekanism:basic_energy_cube'});

    event.shaped(Item.of('mekanism:basic_energy_cube', 1), [
        'ICI',
        'SAS',
        'ICI'
    ], {
        I: 'morered:red_alloy_ingot',
        A: 'mekanism:steel_casing',
        S: 'immersiveengineering:ingot_constantan',
        C: 'mekanism:energy_tablet'
    });

    event.remove({ id: 'solarflux:solar_panel_6' });

    event.shaped(Item.of('solarflux:sp_6', 2), [
        'PPP',
        'SES',
        'SBS'
    ], {
        P: 'solarflux:photovoltaic_cell_4',
        S: 'solarflux:sp_5',
        E: 'solarpanels:improved_energy_tablet',
        B: 'minecraft:diamond_block'
    });

    event.remove({ id: 'solarflux:solar_panel_7' });

    event.shaped(Item.of('solarflux:sp_7', 2), [
        'PPP',
        'SES',
        'SBS'
    ], {
        P: 'solarflux:photovoltaic_cell_5',
        S: 'solarflux:sp_6',
        E: 'solarpanels:quantum_energy_tablet',
        B: 'minecraft:dragon_breath'
    });

    event.remove({ id: 'solarflux:solar_panel_8' });

    event.shaped(Item.of('solarflux:sp_8', 2), [
        'PPP',
        'SES',
        'SBS'
    ], {
        P: 'solarflux:photovoltaic_cell_6',
        S: 'solarflux:sp_7',
        E: 'solarpanels:spectral_energy_tablet',
        B: 'mekanism:pellet_polonium'
    });

    event.remove({output: 'computercraft:computer_normal'});

    event.shaped(Item.of('computercraft:computer_normal', 1), [
        'SSS',
        'SCS',
        'SGS'
    ], {
        C: 'pneumaticcraft:printed_circuit_board',
        S: '#forge:ingots/steel',
        G: '#forge:glass_panes'
    });

    event.remove({ id: 'computercraft:turtle_normal' })

    event.shaped(Item.of('computercraft:turtle_normal', 1), [
        'SSS',
        'SCS',
        'SSS'
    ], {
        C: 'computercraft:computer_normal',
        S: '#forge:ingots/steel'
    });

    event.remove({ id: 'computercraft:pocket_computer_normal' });

    event.shaped(Item.of('computercraft:pocket_computer_normal', 1), [
        'SSS',
        'SGS',
        'SCS'
    ], {
        C: 'computercraft:computer_normal',
        S: '#forge:ingots/steel',
        G: '#forge:glass_panes'
    });

    event.remove({ id: 'computercraft:pocket_computer_advanced' });
    event.remove({ id: 'computercraft:pocket_computer_advanced_upgrade' });

    event.shaped(Item.of('computercraft:pocket_computer_advanced', 1), [
        'SSS',
        'SGS',
        'SCS'
    ], {
        C: 'computercraft:computer_advanced',
        S: '#forge:ingots/steel',
        G: '#forge:glass_panes'
    });

    event.remove({output: 'computercraft:computer_advanced'});

    event.shaped(Item.of('computercraft:computer_advanced', 1), [
        'SSS',
        'SCS',
        'SGS'
    ], {
        C: 'computercraft:computer_normal',
        S: '#forge:ingots/steel',
        G: 'ae2:item_storage_cell_1k'
    });

    event.remove({ id: 'computercraft:turtle_advanced' });
    event.remove({ id: 'computercraft:turtle_advanced_upgrade' });

    event.shaped(Item.of('computercraft:turtle_advanced', 1), [
        'SSS',
        'SCS',
        'SSS'
    ], {
        C: 'computercraft:computer_advanced',
        S: '#forge:ingots/steel'
    });

    event.remove({output: 'computercraft:wireless_modem_normal'});

    event.shaped(Item.of('computercraft:wireless_modem_normal', 1), [
        'SSS',
        'SCS',
        'SSS'
    ], {
        C: '#forge:ender_pearls',
        S: '#forge:ingots/steel'
    });

    event.remove({output: 'computercraft:wireless_modem_advanced'});

    event.shaped(Item.of('computercraft:wireless_modem_advanced', 1), [
        'SSS',
        'SCS',
        'SSS'
    ], {
        C: 'computercraft:wireless_modem_normal',
        S: 'ae2:wireless_receiver'
    });

    event.remove({output: 'computercraft:cable'});

    event.shaped(Item.of('computercraft:cable', 6), [
        'SSS'
    ], {
        S: 'immersiveengineering:wirecoil_copper'
    });

    event.remove({output: 'computercraft:wired_modem'});

    event.shaped(Item.of('computercraft:wired_modem', 1), [
        'SSS',
        'SCS',
        'SSS'
    ], {
        C: 'computercraft:cable',
        S: '#forge:ingots/steel'
    });

    event.remove({output: 'computercraft:redstone_relay'});

    event.shaped(Item.of('computercraft:redstone_relay', 1), [
        'SRS',
        'RCR',
        'SRS'
    ], {
        C: 'computercraft:wired_modem',
        S: '#forge:ingots/steel',
        R: 'morered:red_alloy_ingot'
    });

    event.remove({output: 'computercraft:monitor_normal'});

    event.shaped(Item.of('computercraft:monitor_normal', 1), [
        'SSS',
        'SCS',
        'SSS'
    ], {
        C: '#forge:glass_panes',
        S: '#forge:ingots/steel'
    });

    event.remove({output: 'computercraft:monitor_advanced'});

    event.shaped(Item.of('computercraft:monitor_advanced', 1), [
        'SSS',
        'SCS',
        'SSS'
    ], {
        C: 'computercraft:monitor_normal',
        S: '#forge:ingots/steel'
    });

    event.remove({output: 'computercraft:speaker'});

    event.shaped(Item.of('computercraft:speaker', 1), [
        'SSS',
        'SCS',
        'SRS'
    ], {
        C: 'minecraft:note_block',
        S: '#forge:ingots/steel',
        R: 'morered:red_alloy_ingot'
    });

    event.remove({output: 'computercraft:disk_drive'});

    event.shaped(Item.of('computercraft:disk_drive', 1), [
        'SSS',
        'SDS',
        'SRS'
    ], {
        R: 'morered:red_alloy_ingot',
        S: '#forge:ingots/steel',
        D: 'computercraft:disk'
    });

    event.remove({output: 'computercraft:printer'});

    event.shaped(Item.of('computercraft:printer', 1), [
        'SSS',
        'SRS',
        'SDS'
    ], {
        R: 'morered:red_alloy_ingot',
        S: '#forge:ingots/steel',
        D: '#forge:dyes'
    });

    // Remove the actual functional disk recipe
    event.remove({ id: 'computercraft:disk' })

    // Remove all 16 JEI display recipes
    for (let i = 1; i <= 16; i++) {
        event.remove({ id: `computercraft:disk_${i}` })
    }

    const diskRecipes = [
        { dye: 'minecraft:black_dye',      color: 1118481  },
        { dye: 'minecraft:red_dye',        color: 13388876 },
        { dye: 'minecraft:green_dye',      color: 5744206  },
        { dye: 'minecraft:brown_dye',      color: 8349260  },
        { dye: 'minecraft:blue_dye',       color: 3368652  },
        { dye: 'minecraft:purple_dye',     color: 11691749 },
        { dye: 'minecraft:cyan_dye',       color: 5020082  },
        { dye: 'minecraft:light_gray_dye', color: 10066329 },
        { dye: 'minecraft:gray_dye',       color: 5000268  },
        { dye: 'minecraft:pink_dye',       color: 15905484 },
        { dye: 'minecraft:lime_dye',       color: 8375321  },
        { dye: 'minecraft:yellow_dye',     color: 14605932 },
        { dye: 'minecraft:light_blue_dye', color: 10072818 },
        { dye: 'minecraft:magenta_dye',    color: 15040472 },
        { dye: 'minecraft:orange_dye',     color: 15905331 },
        { dye: 'minecraft:white_dye',      color: 15790320 },
    ]

    diskRecipes.forEach((entry, i) => {
        const dyeName = entry.dye.replace('minecraft:', '')

        event.shapeless(
            Item.of('computercraft:disk', `{Color:${entry.color}}`),
                        ['forge:dusts/redstone', 'pneumaticcraft:printed_circuit_board', entry.dye]
        ).id(`computercraft:disk_${dyeName}`)

        event.custom({
            type: 'computercraft:impostor_shapeless',
            category: 'redstone',
            group: 'computercraft:disk',
            ingredients: [
                { tag: 'forge:dusts/redstone' },
                { item: 'pneumaticcraft:printed_circuit_board' },
                { item: entry.dye }
            ],
            result: {
                item: 'computercraft:disk',
                nbt: `{Color:${entry.color}}`
            }
        })
    })

    const colors = [
        'white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime',
        'pink', 'gray', 'light_gray', 'cyan', 'purple', 'blue',
        'brown', 'green', 'red', 'black'
    ]

    const materials = ['terracotta']
    colors.forEach(color => {
        materials.push(`${color}_terracotta`)
        materials.push(`${color}_glazed_terracotta`)
        materials.push(`${color}_concrete`)
    })

    materials.forEach(material => {
        const pot = `botanypots:${material}_botany_pot`
        const ultraPot = `botanypotstiers:ultra_${material}_botany_pot`
        const elitePot = `botanypotstiers:elite_${material}_botany_pot`
        const creativePot = `botanypotstiers:creative_${material}_botany_pot`
        const hopperPot = `botanypots:${material}_hopper_botany_pot`
        const eliteHopperPot = `botanypotstiers:elite_${material}_hopper_botany_pot`
        const ultraHopperPot = `botanypotstiers:ultra_${material}_hopper_botany_pot`
        const creativeHopperPot = `botanypotstiers:creative_${material}_hopper_botany_pot`
        const block = `minecraft:${material}`

        event.remove({ output: hopperPot })
        event.remove({ output: eliteHopperPot })
        event.remove({ output: ultraHopperPot })
        event.remove({ output: creativeHopperPot })

        event.shaped(hopperPot, [
            'SES',
            'SPS',
            'CSC'
        ], {
            S: block,
            P: 'minecraft:flower_pot',
            E: 'immersiveengineering:cloche',
            C: 'mekanism:basic_control_circuit'
        })

        event.shapeless(hopperPot, [
            pot,
            'immersiveengineering:cloche',
            'mekanism:basic_control_circuit',
            'mekanism:basic_control_circuit'
        ])
        event.shapeless(eliteHopperPot, [
            elitePot,
            'immersiveengineering:cloche',
            'mekanism:advanced_control_circuit',
            'mekanism:advanced_control_circuit'
        ])
        event.shapeless(ultraHopperPot, [
            ultraPot,
            'immersiveengineering:cloche',
            'mekanism:elite_control_circuit',
            'mekanism:elite_control_circuit'
        ])
        event.shapeless(creativeHopperPot, [
            creativeHopperPot,
            'immersiveengineering:cloche',
            'mekanism:ultimate_control_circuit',
            'mekanism:ultimate_control_circuit'
        ])
    })

    const grindRecipes = []

    event.forEachRecipe({ type: 'health_and_disease:grind' }, recipe => {
        grindRecipes.push(JSON.parse(recipe.json.toString()))
    })

    grindRecipes.forEach(grind => {
        const ingredient = grind.ingredients[0]
        const output = grind.output

        event.custom({
            type: 'occultism:crushing',
            crushing_time: 200,
            ignore_crushing_multiplier: false,
            ingredient: ingredient,
            result: output
        })

        event.custom({
            type: 'nuclearcraft:manufactory',
            input: [ingredient],
            output: [output],
            powerModifier: 1.0,
            radiation: 0.0,
            timeModifier: 1.0
        })

        event.custom({
            type: 'immersiveengineering:crusher',
            energy: 2400,
            input: ingredient,
            result: output,
            secondaries: []
        })

        event.custom({
            type: 'mekanism:crushing',
            input: { ingredient: ingredient },
            output: output
        })

        event.custom({
            type: 'mekanism:enriching',
            input: { ingredient: ingredient },
            output: output
        })

        event.custom({
            type: 'immersiveengineering:hammer_crushing',
            input: ingredient,
            result: output
        })

        event.custom({
            type: 'create:crushing',
            ingredients: [ingredient],
            processingTime: 400,
            results: [output]
        })
    })

    event.remove({output: 'health_and_disease:grinder'});
    event.remove({output: 'cyclic:uncrafter'});
    event.remove({output: 'mekanismgenerators:control_rod_assembly'});
    event.remove({output: 'mekanismgenerators:fusion_reactor_controller'});
    event.remove({output: 'mekanismgenerators:fission_fuel_assembly'});
    event.remove({output: 'mekanismgenerators:fission_reactor_casing'});
    event.remove({output: 'mekanismgenerators:fission_reactor_port'});
    event.remove({output: 'mekanismgenerators:fusion_reactor_frame'});
    event.remove({output: 'mekanismgenerators:reactor_glass'});
    event.remove({output: 'mekanismgenerators:laser_focus_matrix'});
    event.remove({output: 'sophisticatedbackpacks:stack_upgrade_omega_tier' });
    event.remove({output: 'sophisticatedstorage:stack_upgrade_omega_tier' });
    event.remove({output: 'draconicevolution:draconium_core'});

//    event.shaped(Item.of('draconicevolution:draconium_core', 1), [
//        'DPD',
//        'PIP',
//        'DPD'
//    ], {
//        P: 'mekanism:pellet_polonium',
//        D: 'draconicevolution:draconium_block',
//        I: 'mekanism:pellet_plutonium'
//    });

    event.remove({output: 'draconicevolution:wyvern_energy_core'});

    event.shaped(Item.of('draconicevolution:wyvern_energy_core', 1), [
        'DPD',
        'PIP',
        'DPD'
    ], {
        P: 'solarpanels:singular_energy_tablet',
        D: 'draconicevolution:draconium_block',
        I: 'draconicevolution:draconium_core'
    });

    event.remove({output: 'draconicevolution:basic_crafting_injector'});

    event.shaped(Item.of('draconicevolution:basic_crafting_injector', 1), [
        'DDD',
        'HIH',
        'HHH'
    ], {
        H: 'mekanism:hdpe_sheet',
        D: 'draconicevolution:draconium_core',
        I: 'draconicevolution:wyvern_energy_core'
    });

    event.remove({output: 'draconicevolution:crafting_core'});

    event.shaped(Item.of('draconicevolution:crafting_core', 1), [
        'HDH',
        'DID',
        'HDH'
    ], {
        H: 'mekanismadditions:blue_plastic',
        D: 'mekanism:pellet_plutonium',
        I: 'draconicevolution:draconium_core'
    });

    event.remove({output: 'draconicevolution:particle_generator'});

    event.shaped(Item.of('draconicevolution:particle_generator', 1), [
        'HDH',
        'DID',
        'HDH'
    ], {
        H: 'mekanismadditions:red_plastic',
        D: 'mekanism:pellet_plutonium',
        I: 'draconicevolution:draconium_core'
    });

    event.remove({ output: 'draconicevolution:wyvern_crafting_injector' });
    event.custom({
        type: 'draconicevolution:fusion_crafting',
        catalyst: {
            item: 'draconicevolution:basic_crafting_injector'
        },
        ingredients: [
            { item: 'draconicevolution:wyvern_core' },
            { item: 'draconicevolution:wyvern_energy_core' },
            { item: 'draconicevolution:draconium_core' },
            { item: 'draconicevolution:wyvern_energy_core' },
            { item: 'draconicevolution:draconium_core' },
            { item: 'draconicevolution:wyvern_energy_core' },
            { tag: 'forge:storage_blocks/draconium' },
            { item: 'draconicevolution:wyvern_energy_core' }
        ],
        result: {
            item: 'draconicevolution:wyvern_crafting_injector'
        },
        tier: 'DRACONIUM',
        total_energy: 32000
    })

    event.remove({output: 'draconicevolution:basic_relay_crystal'});
    event.custom({
        type: 'draconicevolution:fusion_crafting',
        catalyst: {
            item: 'draconicevolution:draconium_core'
        },
        ingredients: [
            { item: 'draconicevolution:wyvern_energy_core' },
            { item: 'ae2:charged_certus_quartz_crystal' },
            { item: 'ae2:charged_certus_quartz_crystal' },
            { item: 'ae2:charged_certus_quartz_crystal' },
            { item: 'ae2:charged_certus_quartz_crystal' },
            { item: 'draconicevolution:wyvern_energy_core' },
            { item: 'ae2:charged_certus_quartz_crystal' },
            { item: 'ae2:charged_certus_quartz_crystal' },
            { item: 'ae2:charged_certus_quartz_crystal' },
            { item: 'ae2:charged_certus_quartz_crystal' }
        ],
        result: {
            item: 'draconicevolution:basic_relay_crystal'
        },
        tier: 'WYVERN',
        total_energy: 2000000
    })

    event.remove({output: 'draconicevolution:basic_wireless_crystal'});
    event.custom({
        type: 'draconicevolution:fusion_crafting',
        catalyst: {
            item: 'draconicevolution:basic_relay_crystal'
        },
        ingredients: [
            { item: 'draconicevolution:particle_generator' },
            { item: 'draconicevolution:basic_io_crystal' },
            { item: 'draconicevolution:basic_io_crystal' },
            { item: 'draconicevolution:basic_io_crystal' },
            { item: 'draconicevolution:basic_io_crystal' },
            { item: 'draconicevolution:particle_generator' },
            { item: 'draconicevolution:basic_io_crystal' },
            { item: 'draconicevolution:basic_io_crystal' },
            { item: 'draconicevolution:basic_io_crystal' },
            { item: 'draconicevolution:basic_io_crystal' },
        ],
        result: {
            item: 'draconicevolution:basic_wireless_crystal',
        },
        tier: 'WYVERN',
        total_energy: 2000000
    })

    event.remove({ output: 'draconicevolution:crystal_binder' });
    event.custom({
        type: 'draconicevolution:fusion_crafting',
        catalyst: {
            item: 'mekanism:configurator'
        },
        ingredients: [
            { item: 'draconicevolution:draconium_core' },
            { tag: 'forge:storage_blocks/draconium' },
            { tag: 'forge:storage_blocks/draconium' },
            { item: 'draconicevolution:wyvern_energy_core' },
            { item: 'draconicevolution:dragon_heart' }
        ],
        result: {
            item: 'draconicevolution:crystal_binder'
        },
        tier: 'WYVERN',
        total_energy: 1000000
    })

    event.remove({ output: 'draconicevolution:wyvern_axe' });
    event.custom({
        type: 'draconicevolution:fusion_crafting',
        catalyst: {
            item: 'advancednetherite:netherite_diamond_axe'
        },
        ingredients: [
            { item: 'draconicevolution:draconium_core' },
            { tag: 'forge:ingots/draconium' },
            { item: 'draconicevolution:wyvern_energy_core' },
            { tag: 'forge:ingots/draconium' },
            { item: 'draconicevolution:basic_relay_crystal' },
            { item: 'draconicevolution:basic_relay_crystal' }
        ],
        result: {
            item: 'draconicevolution:wyvern_axe'
        },
        tier: 'WYVERN',
        total_energy: 8000000
    })

    event.remove({ output: 'draconicevolution:wyvern_pickaxe' });
    event.custom({
        type: 'draconicevolution:fusion_crafting',
        catalyst: {
            item: 'advancednetherite:netherite_diamond_pickaxe'
        },
        ingredients: [
            { item: 'draconicevolution:draconium_core' },
            { tag: 'forge:ingots/draconium' },
            { item: 'draconicevolution:wyvern_energy_core' },
            { tag: 'forge:ingots/draconium' },
            { item: 'draconicevolution:basic_relay_crystal' },
            { item: 'draconicevolution:basic_relay_crystal' }
        ],
        result: {
            item: 'draconicevolution:wyvern_pickaxe'
        },
        tier: 'WYVERN',
        total_energy: 8000000
    })

    event.remove({ output: 'draconicevolution:wyvern_hoe' });
    event.custom({
        type: 'draconicevolution:fusion_crafting',
        catalyst: {
            item: 'advancednetherite:netherite_diamond_hoe'
        },
        ingredients: [
            { item: 'draconicevolution:draconium_core' },
            { tag: 'forge:ingots/draconium' },
            { item: 'draconicevolution:wyvern_energy_core' },
            { tag: 'forge:ingots/draconium' },
            { item: 'draconicevolution:basic_relay_crystal' },
            { item: 'draconicevolution:basic_relay_crystal' }
        ],
        result: {
            item: 'draconicevolution:wyvern_hoe'
        },
        tier: 'WYVERN',
        total_energy: 8000000
    })

    event.remove({ output: 'draconicevolution:wyvern_sword' });
    event.custom({
        type: 'draconicevolution:fusion_crafting',
        catalyst: {
            item: 'mekaweapons:mekatana'
        },
        ingredients: [
            { item: 'draconicevolution:draconium_core' },
            { tag: 'forge:ingots/draconium' },
            { item: 'draconicevolution:wyvern_energy_core' },
            { tag: 'forge:ingots/draconium' },
            { item: 'draconicevolution:basic_relay_crystal' },
            { item: 'draconicevolution:basic_relay_crystal' }
        ],
        result: {
            item: 'draconicevolution:wyvern_sword'
        },
        tier: 'WYVERN',
        total_energy: 8000000
    })

    event.remove({ output: 'draconicevolution:wyvern_shovel' });
    event.custom({
        type: 'draconicevolution:fusion_crafting',
        catalyst: {
            item: 'advancednetherite:netherite_diamond_shovel'
        },
        ingredients: [
            { item: 'draconicevolution:draconium_core' },
            { tag: 'forge:ingots/draconium' },
            { item: 'draconicevolution:wyvern_energy_core' },
            { tag: 'forge:ingots/draconium' },
            { item: 'draconicevolution:basic_relay_crystal' },
            { item: 'draconicevolution:basic_relay_crystal' }
        ],
        result: {
            item: 'draconicevolution:wyvern_shovel'
        },
        tier: 'WYVERN',
        total_energy: 8000000
    })

    event.remove({ output: 'draconicevolution:wyvern_chestpiece' });
    event.custom({
        type: 'draconicevolution:fusion_crafting',
        catalyst: {
            item: 'mekanism:mekasuit_bodyarmor'
        },
        ingredients: [
            { item: 'draconicevolution:draconium_core' },
            { tag: 'forge:ingots/draconium' },
            { item: 'draconicevolution:wyvern_energy_core' },
            { tag: 'forge:ingots/draconium' },
            { item: 'draconicevolution:basic_relay_crystal' },
            { item: 'draconicevolution:basic_relay_crystal' }
        ],
        result: {
            item: 'draconicevolution:wyvern_chestpiece'
        },
        tier: 'WYVERN',
        total_energy: 8000000
    })

    event.remove({ output: 'draconicevolution:wyvern_bow' });
    event.custom({
        type: 'draconicevolution:fusion_crafting',
        catalyst: {
            item: 'mekanism:electric_bow'
        },
        ingredients: [
            { item: 'draconicevolution:draconium_core' },
            { tag: 'forge:ingots/draconium' },
            { item: 'draconicevolution:wyvern_energy_core' },
            { tag: 'forge:ingots/draconium' },
            { item: 'draconicevolution:basic_relay_crystal' },
            { item: 'draconicevolution:basic_relay_crystal' }
        ],
        result: {
            item: 'draconicevolution:wyvern_bow'
        },
        tier: 'WYVERN',
        total_energy: 8000000
    })

    event.remove({output: 'draconicevolution:module_core'});

    event.shaped(Item.of('draconicevolution:module_core', 1), [
        'CCC',
        'CIC',
        'CCC'
    ], {
        C: 'mekanism:hdpe_sheet',
        I: '#forge:ingots/draconium'
    });

    event.remove({output: 'draconicevolution:item_draconium_energy'});

    event.shaped(Item.of('draconicevolution:item_draconium_energy', 1), [
        'CCC',
        'DID',
        'CCC'
    ], {
        C: 'mekanism:ultimate_energy_cube',
        D: 'mekanism:pellet_plutonium',
        I: 'draconicevolution:module_core'
    });

    event.remove({output: 'draconicevolution:item_wyvern_energy'});

    event.shaped(Item.of('draconicevolution:item_wyvern_energy', 1), [
        'CCC',
        'DID',
        'CCC'
    ], {
        C: 'draconicevolution:wyvern_capacitor',
        D: 'draconicevolution:item_draconium_energy',
        I: 'draconicevolution:draconium_core'
    });

    event.remove({output: 'draconicevolution:dislocator'});
    event.remove({output: 'draconicevolution:advanced_dislocator'});
    event.remove({output: 'draconicevolution:disenchanter'});

    event.remove({ output: 'draconicevolution:awakened_crafting_injector' });
    event.custom({
        type: 'draconicevolution:fusion_crafting',
        catalyst: {
            item: 'draconicevolution:wyvern_crafting_injector'
        },
        ingredients: [
            { item: 'draconicevolution:awakened_core' },
            { item: 'draconicevolution:draconic_energy_core' },
            { item: 'draconicevolution:awakened_core' },
            { item: 'draconicevolution:draconic_energy_core' },
            { item: 'draconicevolution:awakened_core' },
            { item: 'draconicevolution:draconic_energy_core' },
            { tag: 'forge:storage_blocks/draconium_awakened' },
            { item: 'draconicevolution:draconic_energy_core' }
        ],
        result: {
            item: 'draconicevolution:awakened_crafting_injector'
        },
        tier: 'WYVERN',
        total_energy: 256000
    })

    event.remove({output: 'draconicevolution:draconic_energy_core'});

    event.shaped(Item.of('draconicevolution:draconic_energy_core', 1), [
        'DPD',
        'PIP',
        'DPD'
    ], {
        P: 'solarpanels:light_absorbing_energy_tablet',
        D: '#forge:storage_blocks/draconium_awakened',
        I: 'draconicevolution:awakened_core'
    });

    event.remove({output: 'draconicevolution:item_draconic_energy'});

    event.shaped(Item.of('draconicevolution:item_draconic_energy', 1), [
        'CCC',
        'DID',
        'CCC'
    ], {
        C: 'draconicevolution:draconic_capacitor',
        D: 'draconicevolution:item_wyvern_energy',
        I: 'draconicevolution:awakened_core'
    });

    event.remove({ output: 'draconicevolution:draconic_hoe' });
    event.custom({
        type: 'draconicevolution:fusion_crafting',
        catalyst: {
            item: 'draconicevolution:wyvern_hoe'
        },
        ingredients: [
            { tag: 'forge:storage_blocks/netherite' },
            { item: 'draconicevolution:awakened_core' },
            { tag: 'forge:storage_blocks/netherite' },
            { tag: 'forge:storage_blocks/draconium_awakened' },
            { tag: 'forge:storage_blocks/draconium_awakened' },
            { tag: 'forge:storage_blocks/netherite' },
            { item: 'draconicevolution:draconic_energy_core' },
            { tag: 'forge:storage_blocks/netherite' }
        ],
        result: {
            item: 'draconicevolution:draconic_hoe'
        },
        tier: 'DRACONIC',
        total_energy: 32000000
    })

    event.remove({ output: 'draconicevolution:draconic_shovel' });
    event.custom({
        type: 'draconicevolution:fusion_crafting',
        catalyst: {
            item: 'draconicevolution:wyvern_shovel'
        },
        ingredients: [
            { tag: 'forge:storage_blocks/netherite' },
            { item: 'draconicevolution:awakened_core' },
            { tag: 'forge:storage_blocks/netherite' },
            { tag: 'forge:storage_blocks/draconium_awakened' },
            { tag: 'forge:storage_blocks/draconium_awakened' },
            { tag: 'forge:storage_blocks/netherite' },
            { item: 'draconicevolution:draconic_energy_core' },
            { tag: 'forge:storage_blocks/netherite' }
        ],
        result: {
            item: 'draconicevolution:draconic_shovel'
        },
        tier: 'DRACONIC',
        total_energy: 32000000
    })

    event.remove({ output: 'draconicevolution:draconic_pickaxe' });
    event.custom({
        type: 'draconicevolution:fusion_crafting',
        catalyst: {
            item: 'draconicevolution:wyvern_pickaxe'
        },
        ingredients: [
            { tag: 'forge:storage_blocks/netherite' },
            { item: 'draconicevolution:awakened_core' },
            { tag: 'forge:storage_blocks/netherite' },
            { tag: 'forge:storage_blocks/draconium_awakened' },
            { tag: 'forge:storage_blocks/draconium_awakened' },
            { tag: 'forge:storage_blocks/netherite' },
            { item: 'draconicevolution:draconic_energy_core' },
            { tag: 'forge:storage_blocks/netherite' }
        ],
        result: {
            item: 'draconicevolution:draconic_pickaxe'
        },
        tier: 'DRACONIC',
        total_energy: 32000000
    })

    event.remove({ output: 'draconicevolution:draconic_bow' });
    event.custom({
        type: 'draconicevolution:fusion_crafting',
        catalyst: {
            item: 'draconicevolution:wyvern_bow'
        },
        ingredients: [
            { tag: 'forge:storage_blocks/netherite' },
            { item: 'draconicevolution:awakened_core' },
            { tag: 'forge:storage_blocks/netherite' },
            { tag: 'forge:storage_blocks/draconium_awakened' },
            { tag: 'forge:storage_blocks/draconium_awakened' },
            { tag: 'forge:storage_blocks/netherite' },
            { item: 'draconicevolution:draconic_energy_core' },
            { tag: 'forge:storage_blocks/netherite' }
        ],
        result: {
            item: 'draconicevolution:draconic_bow'
        },
        tier: 'DRACONIC',
        total_energy: 32000000
    })

    event.remove({ output: 'draconicevolution:draconic_axe' });
    event.custom({
        type: 'draconicevolution:fusion_crafting',
        catalyst: {
            item: 'draconicevolution:wyvern_axe'
        },
        ingredients: [
            { tag: 'forge:storage_blocks/netherite' },
            { item: 'draconicevolution:awakened_core' },
            { tag: 'forge:storage_blocks/netherite' },
            { tag: 'forge:storage_blocks/draconium_awakened' },
            { tag: 'forge:storage_blocks/draconium_awakened' },
            { tag: 'forge:storage_blocks/netherite' },
            { item: 'draconicevolution:draconic_energy_core' },
            { tag: 'forge:storage_blocks/netherite' }
        ],
        result: {
            item: 'draconicevolution:draconic_axe'
        },
        tier: 'DRACONIC',
        total_energy: 32000000
    })

    event.remove({ output: 'draconicevolution:draconic_sword' });
    event.custom({
        type: 'draconicevolution:fusion_crafting',
        catalyst: {
            item: 'draconicevolution:wyvern_sword'
        },
        ingredients: [
            { tag: 'forge:storage_blocks/netherite' },
            { item: 'draconicevolution:awakened_core' },
            { tag: 'forge:storage_blocks/netherite' },
            { tag: 'forge:storage_blocks/draconium_awakened' },
            { tag: 'forge:storage_blocks/draconium_awakened' },
            { tag: 'forge:storage_blocks/netherite' },
            { item: 'draconicevolution:draconic_energy_core' },
            { tag: 'forge:storage_blocks/netherite' }
        ],
        result: {
            item: 'draconicevolution:draconic_sword'
        },
        tier: 'DRACONIC',
        total_energy: 32000000
    })

    event.remove({ output: 'draconicevolution:draconic_chestpiece' });
    event.custom({
        type: 'draconicevolution:fusion_crafting',
        catalyst: {
            item: 'draconicevolution:wyvern_chestpiece'
        },
        ingredients: [
            { tag: 'forge:storage_blocks/netherite' },
            { item: 'draconicevolution:awakened_core' },
            { tag: 'forge:storage_blocks/netherite' },
            { tag: 'forge:storage_blocks/draconium_awakened' },
            { tag: 'forge:storage_blocks/draconium_awakened' },
            { tag: 'forge:storage_blocks/netherite' },
            { item: 'draconicevolution:draconic_energy_core' },
            { tag: 'forge:storage_blocks/netherite' }
        ],
        result: {
            item: 'draconicevolution:draconic_chestpiece'
        },
        tier: 'DRACONIC',
        total_energy: 32000000
    })

    event.remove({ output: 'draconicevolution:draconic_staff' });
    event.custom({
        type: 'draconicevolution:fusion_crafting',
        catalyst: {
            item: 'draconicevolution:awakened_core'
        },
        ingredients: [
            { item: 'draconicevolution:draconic_hoe' },
            { item: 'draconicevolution:draconic_shovel' },
            { item: 'draconicevolution:draconic_pickaxe' },
            { item: 'draconicevolution:draconic_axe' },
            { item: 'draconicevolution:draconic_sword' },
            { item: 'draconicevolution:draconic_energy_core' },
            { item: 'draconicevolution:draconic_energy_core' },
            { item: 'draconicevolution:draconic_energy_core' },
            { item: 'draconicevolution:draconic_energy_core' },
            { item: 'draconicevolution:draconic_energy_core' }
        ],
        result: {
            item: 'draconicevolution:draconic_staff'
        },
        tier: 'DRACONIC',
        total_energy: 256000000
    })

    event.remove({output: 'bloodmagic:altar'});

    event.shaped(Item.of('bloodmagic:altar', 1), [
        'S S',
        'SBS',
        'III'
    ], {
        S: '#forge:stone',
        B: 'vampirism:pure_blood_4',
        I: 'vampirism:blood_infused_enhanced_iron_ingot'
    });

    event.remove({output: 'bloodmagic:soulforge'});

    event.shaped(Item.of('bloodmagic:soulforge', 1), [
        'I I',
        'SRS',
        'SBS'
    ], {
        S: '#forge:stone',
        B: 'vampirism:blood_infused_enhanced_iron_block',
        I: 'vampirism:blood_infused_enhanced_iron_ingot',
        R: 'bloodmagic:blankslate'
    });

    event.remove({output: 'bloodmagic:alchemytable'});

    event.shaped(Item.of('bloodmagic:alchemytable', 1), [
        'SSS',
        'BIB',
        'IRI'
    ], {
        S: '#forge:stone',
        B: 'vampirism:blood_infused_enhanced_iron_block',
        I: 'vampirism:blood_infused_enhanced_iron_ingot',
        R: 'bloodmagic:blankslate'
    });

    event.remove({output: 'bloodmagic:alchemicalreactionchamber'});

    event.shaped(Item.of('bloodmagic:alchemicalreactionchamber', 1), [
        'SSS',
        'IOI',
        'BRB'
    ], {
        S: 'immersiveengineering:blastbrick_reinforced',
        B: 'vampirism:blood_infused_enhanced_iron_block',
        I: 'bloodmagic:infusedslate',
        R: 'immersiveengineering:rs_engineering',
        O: { type: 'bloodmagic:bloodorb', orb_tier: 3 },
    });

    event.remove({ output: 'mysticalagriculture:air_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:air' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:air' }
        ],
        ingredients: [
            { item: 'mysticalagriculture:air_agglomeratio' },
            { item: 'mysticalagriculture:inferium_gemstone_block' },
            { item: 'mysticalagriculture:air_agglomeratio' },
            { item: 'mysticalagriculture:inferium_block' },
            { item: 'mysticalagriculture:air_agglomeratio' },
            { item: 'mysticalagriculture:inferium_gemstone_block' },
            { item: 'mysticalagriculture:air_agglomeratio' },
            { item: 'mysticalagriculture:inferium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:air'
        },
        result: {
            item: 'mysticalagriculture:air_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:earth_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:earth' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:earth' }
        ],
        ingredients: [
            { item: 'mysticalagriculture:earth_agglomeratio' },
            { item: 'mysticalagriculture:inferium_gemstone_block' },
            { item: 'mysticalagriculture:earth_agglomeratio' },
            { item: 'mysticalagriculture:inferium_block' },
            { item: 'mysticalagriculture:earth_agglomeratio' },
            { item: 'mysticalagriculture:inferium_gemstone_block' },
            { item: 'mysticalagriculture:earth_agglomeratio' },
            { item: 'mysticalagriculture:inferium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:earth'
        },
        result: {
            item: 'mysticalagriculture:earth_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:water_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:water' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:water' }
        ],
        ingredients: [
            { item: 'mysticalagriculture:water_agglomeratio' },
            { item: 'mysticalagriculture:inferium_gemstone_block' },
            { item: 'mysticalagriculture:water_agglomeratio' },
            { item: 'mysticalagriculture:inferium_block' },
            { item: 'mysticalagriculture:water_agglomeratio' },
            { item: 'mysticalagriculture:inferium_gemstone_block' },
            { item: 'mysticalagriculture:water_agglomeratio' },
            { item: 'mysticalagriculture:inferium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:water'
        },
        result: {
            item: 'mysticalagriculture:water_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:fire_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:fire' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:fire' }
        ],
        ingredients: [
            { item: 'mysticalagriculture:fire_agglomeratio' },
            { item: 'mysticalagriculture:inferium_gemstone_block' },
            { item: 'mysticalagriculture:fire_agglomeratio' },
            { item: 'mysticalagriculture:inferium_block' },
            { item: 'mysticalagriculture:fire_agglomeratio' },
            { item: 'mysticalagriculture:inferium_gemstone_block' },
            { item: 'mysticalagriculture:fire_agglomeratio' },
            { item: 'mysticalagriculture:inferium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:fire'
        },
        result: {
            item: 'mysticalagriculture:fire_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:stone_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:stone' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:stone' }
        ],
        ingredients: [
            { item: 'minecraft:stone' },
            { item: 'mysticalagriculture:inferium_gemstone_block' },
            { item: 'minecraft:stone' },
            { item: 'mysticalagriculture:inferium_block' },
            { item: 'minecraft:stone' },
            { item: 'mysticalagriculture:inferium_gemstone_block' },
            { item: 'minecraft:stone' },
            { item: 'mysticalagriculture:inferium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:stone'
        },
        result: {
            item: 'mysticalagriculture:stone_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:dirt_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:dirt' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:dirt' }
        ],
        ingredients: [
            { item: 'minecraft:dirt' },
            { item: 'mysticalagriculture:inferium_gemstone_block' },
            { item: 'minecraft:dirt' },
            { item: 'mysticalagriculture:inferium_block' },
            { item: 'minecraft:dirt' },
            { item: 'mysticalagriculture:inferium_gemstone_block' },
            { item: 'minecraft:dirt' },
            { item: 'mysticalagriculture:inferium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:dirt'
        },
        result: {
            item: 'mysticalagriculture:dirt_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:wood_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:wood' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:wood' }
        ],
        ingredients: [
            { tag:  'minecraft:logs' },
            { item: 'mysticalagriculture:inferium_gemstone_block' },
            { tag:  'minecraft:logs' },
            { item: 'mysticalagriculture:inferium_block' },
            { tag:  'minecraft:logs' },
            { item: 'mysticalagriculture:inferium_gemstone_block' },
            { tag:  'minecraft:logs' },
            { item: 'mysticalagriculture:inferium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:wood'
        },
        result: {
            item: 'mysticalagriculture:wood_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:ice_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:ice' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:ice' }
        ],
        ingredients: [
            { item: 'minecraft:ice' },
            { item: 'mysticalagriculture:inferium_gemstone_block' },
            { item: 'minecraft:ice' },
            { item: 'mysticalagriculture:inferium_block' },
            { item: 'minecraft:ice' },
            { item: 'mysticalagriculture:inferium_gemstone_block' },
            { item: 'minecraft:ice' },
            { item: 'mysticalagriculture:inferium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:ice'
        },
        result: {
            item: 'mysticalagriculture:ice_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:deepslate_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:deepslate' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:deepslate' }
        ],
        ingredients: [
            { item: 'minecraft:deepslate' },
            { item: 'mysticalagriculture:inferium_gemstone_block' },
            { item: 'minecraft:deepslate' },
            { item: 'mysticalagriculture:inferium_block' },
            { item: 'minecraft:deepslate' },
            { item: 'mysticalagriculture:inferium_gemstone_block' },
            { item: 'minecraft:deepslate' },
            { item: 'mysticalagriculture:inferium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:deepslate'
        },
        result: {
            item: 'mysticalagriculture:deepslate_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:nature_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:nature' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:nature' }
        ],
        ingredients: [
            { item: 'mysticalagriculture:air_seeds' },
            { item: 'mysticalagriculture:prudentium_gemstone_block' },
            { item: 'mysticalagriculture:earth_seeds' },
            { item: 'mysticalagriculture:prudentium_block' },
            { item: 'mysticalagriculture:water_seeds' },
            { item: 'mysticalagriculture:prudentium_gemstone_block' },
            { item: 'mysticalagriculture:fire_seeds' },
            { item: 'mysticalagriculture:prudentium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:nature'
        },
        result: {
            item: 'mysticalagriculture:nature_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:dye_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:dye' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:dye' }
        ],
        ingredients: [
            { item: 'mysticalagriculture:dye_agglomeratio' },
            { item: 'mysticalagriculture:prudentium_gemstone_block' },
            { item: 'mysticalagriculture:dye_agglomeratio' },
            { item: 'mysticalagriculture:prudentium_block' },
            { item: 'mysticalagriculture:dye_agglomeratio' },
            { item: 'mysticalagriculture:prudentium_gemstone_block' },
            { item: 'mysticalagriculture:dye_agglomeratio' },
            { item: 'mysticalagriculture:prudentium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:dye'
        },
        result: {
            item: 'mysticalagriculture:dye_seeds'
        }
    });


    event.remove({ output: 'mysticalagriculture:nether_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:nether' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:nether' }
        ],
        ingredients: [
            { item: 'mysticalagriculture:nether_agglomeratio' },
            { item: 'mysticalagriculture:prudentium_gemstone_block' },
            { item: 'mysticalagriculture:nether_agglomeratio' },
            { item: 'mysticalagriculture:prudentium_block' },
            { item: 'mysticalagriculture:nether_agglomeratio' },
            { item: 'mysticalagriculture:prudentium_gemstone_block' },
            { item: 'mysticalagriculture:nether_agglomeratio' },
            { item: 'mysticalagriculture:prudentium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:nether'
        },
        result: {
            item: 'mysticalagriculture:nether_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:coal_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:coal' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:coal' }
        ],
        ingredients: [
            { item: 'minecraft:coal_block' },
            { item: 'mysticalagriculture:prudentium_gemstone_block' },
            { item: 'immersiveengineering:coke' },
            { item: 'mysticalagriculture:prudentium_block' },
            { item: 'mysticalagriculture:deepslate_seeds' },
            { item: 'mysticalagriculture:prudentium_gemstone_block' },
            { item: 'mysticalagriculture:stone_seeds' },
            { item: 'mysticalagriculture:prudentium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:coal'
        },
        result: {
            item: 'mysticalagriculture:coal_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:coral_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:coral' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:coral' }
        ],
        ingredients: [
            { item: 'mysticalagriculture:coral_agglomeratio' },
            { item: 'mysticalagriculture:prudentium_gemstone_block' },
            { item: 'mysticalagriculture:earth_seeds' },
            { item: 'mysticalagriculture:prudentium_block' },
            { item: 'mysticalagriculture:coral_agglomeratio' },
            { item: 'mysticalagriculture:prudentium_gemstone_block' },
            { item: 'mysticalagriculture:water_seeds' },
            { item: 'mysticalagriculture:prudentium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:coral'
        },
        result: {
            item: 'mysticalagriculture:coral_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:honey_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:honey' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:honey' }
        ],
        ingredients: [
            { item: 'mysticalagriculture:honey_agglomeratio' },
            { item: 'mysticalagriculture:prudentium_gemstone_block' },
            { item: 'mysticalagriculture:earth_seeds' },
            { item: 'mysticalagriculture:prudentium_block' },
            { item: 'mysticalagriculture:honey_agglomeratio' },
            { item: 'mysticalagriculture:prudentium_gemstone_block' },
            { item: 'mysticalagriculture:air_seeds' },
            { item: 'mysticalagriculture:prudentium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:honey'
        },
        result: {
            item: 'mysticalagriculture:honey_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:amethyst_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:amethyst' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:amethyst' }
        ],
        ingredients: [
            { item: 'minecraft:amethyst_cluster' },
            { item: 'mysticalagriculture:prudentium_gemstone_block' },
            { item: 'minecraft:amethyst_block' },
            { item: 'mysticalagriculture:prudentium_block' },
            { item: 'mysticalagriculture:deepslate_seeds' },
            { item: 'mysticalagriculture:prudentium_gemstone_block' },
            { item: 'mysticalagriculture:stone_seeds' },
            { item: 'mysticalagriculture:prudentium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:amethyst'
        },
        result: {
            item: 'mysticalagriculture:amethyst_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:pig_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:pig' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:pig' }
        ],
        ingredients: [
            { type: 'mysticalagriculture:crop_component', component: 'material', crop: 'mysticalagriculture:pig' },
            { item: 'mysticalagriculture:prudentium_gemstone_block' },
            { item: 'mysticalagriculture:earth_seeds' },
            { item: 'mysticalagriculture:prudentium_block' },
            { type: 'mysticalagriculture:crop_component', component: 'material', crop: 'mysticalagriculture:pig' },
            { item: 'mysticalagriculture:prudentium_gemstone_block' },
            { item: 'mysticalagriculture:dirt_seeds' },
            { item: 'mysticalagriculture:prudentium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:pig'
        },
        result: {
            item: 'mysticalagriculture:pig_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:chicken_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:chicken' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:chicken' }
        ],
        ingredients: [
            { type: 'mysticalagriculture:crop_component', component: 'material', crop: 'mysticalagriculture:chicken' },
            { item: 'mysticalagriculture:prudentium_gemstone_block' },
            { item: 'mysticalagriculture:earth_seeds' },
            { item: 'mysticalagriculture:prudentium_block' },
            { type: 'mysticalagriculture:crop_component', component: 'material', crop: 'mysticalagriculture:chicken' },
            { item: 'mysticalagriculture:prudentium_gemstone_block' },
            { item: 'mysticalagriculture:dirt_seeds' },
            { item: 'mysticalagriculture:prudentium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:chicken'
        },
        result: {
            item: 'mysticalagriculture:chicken_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:cow_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:cow' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:cow' }
        ],
        ingredients: [
            { type: 'mysticalagriculture:crop_component', component: 'material', crop: 'mysticalagriculture:cow' },
            { item: 'mysticalagriculture:prudentium_gemstone_block' },
            { item: 'mysticalagriculture:earth_seeds' },
            { item: 'mysticalagriculture:prudentium_block' },
            { type: 'mysticalagriculture:crop_component', component: 'material', crop: 'mysticalagriculture:cow' },
            { item: 'mysticalagriculture:prudentium_gemstone_block' },
            { item: 'mysticalagriculture:dirt_seeds' },
            { item: 'mysticalagriculture:prudentium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:cow'
        },
        result: {
            item: 'mysticalagriculture:cow_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:sheep_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:sheep' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:sheep' }
        ],
        ingredients: [
            { type: 'mysticalagriculture:crop_component', component: 'material', crop: 'mysticalagriculture:sheep' },
            { item: 'mysticalagriculture:prudentium_gemstone_block' },
            { item: 'mysticalagriculture:earth_seeds' },
            { item: 'mysticalagriculture:prudentium_block' },
            { type: 'mysticalagriculture:crop_component', component: 'material', crop: 'mysticalagriculture:sheep' },
            { item: 'mysticalagriculture:prudentium_gemstone_block' },
            { item: 'mysticalagriculture:dirt_seeds' },
            { item: 'mysticalagriculture:prudentium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:sheep'
        },
        result: {
            item: 'mysticalagriculture:sheep_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:squid_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:squid' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:squid' }
        ],
        ingredients: [
            { type: 'mysticalagriculture:crop_component', component: 'material', crop: 'mysticalagriculture:squid' },
            { item: 'mysticalagriculture:prudentium_gemstone_block' },
            { item: 'mysticalagriculture:earth_seeds' },
            { item: 'mysticalagriculture:prudentium_block' },
            { type: 'mysticalagriculture:crop_component', component: 'material', crop: 'mysticalagriculture:squid' },
            { item: 'mysticalagriculture:prudentium_gemstone_block' },
            { item: 'mysticalagriculture:water_seeds' },
            { item: 'mysticalagriculture:prudentium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:squid'
        },
        result: {
            item: 'mysticalagriculture:squid_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:fish_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:fish' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:fish' }
        ],
        ingredients: [
            { type: 'mysticalagriculture:crop_component', component: 'material', crop: 'mysticalagriculture:fish' },
            { item: 'mysticalagriculture:prudentium_gemstone_block' },
            { item: 'mysticalagriculture:earth_seeds' },
            { item: 'mysticalagriculture:prudentium_block' },
            { type: 'mysticalagriculture:crop_component', component: 'material', crop: 'mysticalagriculture:fish' },
            { item: 'mysticalagriculture:prudentium_gemstone_block' },
            { item: 'mysticalagriculture:water_seeds' },
            { item: 'mysticalagriculture:prudentium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:fish'
        },
        result: {
            item: 'mysticalagriculture:fish_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:slime_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:slime' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:slime' }
        ],
        ingredients: [
            { type: 'mysticalagriculture:crop_component', component: 'material', crop: 'mysticalagriculture:slime' },
            { item: 'mysticalagriculture:prudentium_gemstone_block' },
            { item: 'mysticalagriculture:earth_seeds' },
            { item: 'mysticalagriculture:prudentium_block' },
            { type: 'mysticalagriculture:crop_component', component: 'material', crop: 'mysticalagriculture:slime' },
            { item: 'mysticalagriculture:prudentium_gemstone_block' },
            { item: 'mysticalagriculture:water_seeds' },
            { item: 'mysticalagriculture:prudentium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:slime'
        },
        result: {
            item: 'mysticalagriculture:slime_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:turtle_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:turtle' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:turtle' }
        ],
        ingredients: [
            { type: 'mysticalagriculture:crop_component', component: 'material', crop: 'mysticalagriculture:turtle' },
            { item: 'mysticalagriculture:prudentium_gemstone_block' },
            { item: 'mysticalagriculture:earth_seeds' },
            { item: 'mysticalagriculture:prudentium_block' },
            { type: 'mysticalagriculture:crop_component', component: 'material', crop: 'mysticalagriculture:turtle' },
            { item: 'mysticalagriculture:prudentium_gemstone_block' },
            { item: 'mysticalagriculture:water_seeds' },
            { item: 'mysticalagriculture:prudentium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:turtle'
        },
        result: {
            item: 'mysticalagriculture:turtle_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:silicon_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:silicon' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:silicon' }
        ],
        ingredients: [
            { type: 'mysticalagriculture:crop_component', component: 'material', crop: 'mysticalagriculture:silicon' },
            { item: 'mysticalagriculture:prudentium_gemstone_block' },
            { item: 'mysticalagriculture:deepslate_seeds' },
            { item: 'mysticalagriculture:prudentium_block' },
            { type: 'mysticalagriculture:crop_component', component: 'material', crop: 'mysticalagriculture:silicon' },
            { item: 'mysticalagriculture:prudentium_gemstone_block' },
            { item: 'mysticalagriculture:stone_seeds' },
            { item: 'mysticalagriculture:prudentium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:silicon'
        },
        result: {
            item: 'mysticalagriculture:silicon_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:sulfur_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:sulfur' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:sulfur' }
        ],
        ingredients: [
            { type: 'mysticalagriculture:crop_component', component: 'material', crop: 'mysticalagriculture:sulfur' },
            { item: 'mysticalagriculture:prudentium_gemstone_block' },
            { item: 'mysticalagriculture:deepslate_seeds' },
            { item: 'mysticalagriculture:prudentium_block' },
            { type: 'mysticalagriculture:crop_component', component: 'material', crop: 'mysticalagriculture:sulfur' },
            { item: 'mysticalagriculture:prudentium_gemstone_block' },
            { item: 'mysticalagriculture:stone_seeds' },
            { item: 'mysticalagriculture:prudentium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:sulfur'
        },
        result: {
            item: 'mysticalagriculture:sulfur_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:aluminum_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:aluminum' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:aluminum' }
        ],
        ingredients: [
            { tag:  'forge:storage_blocks/aluminum' },
            { item: 'mysticalagriculture:prudentium_gemstone_block' },
            { tag:  'forge:storage_blocks/aluminum' },
            { item: 'mysticalagriculture:prudentium_block' },
            { item: 'mysticalagriculture:deepslate_seeds' },
            { item: 'mysticalagriculture:prudentium_gemstone_block' },
            { item: 'mysticalagriculture:stone_seeds' },
            { item: 'mysticalagriculture:prudentium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:aluminum'
        },
        result: {
            item: 'mysticalagriculture:aluminum_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:saltpeter_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:saltpeter' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:saltpeter' }
        ],
        ingredients: [
            { tag:  'mysticalagriculture:material/saltpeter' },
            { item: 'mysticalagriculture:prudentium_gemstone_block' },
            { tag:  'mysticalagriculture:material/saltpeter' },
            { item: 'mysticalagriculture:prudentium_block' },
            { item: 'mysticalagriculture:deepslate_seeds' },
            { item: 'mysticalagriculture:prudentium_gemstone_block' },
            { item: 'mysticalagriculture:stone_seeds' },
            { item: 'mysticalagriculture:prudentium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:saltpeter'
        },
        result: {
            item: 'mysticalagriculture:saltpeter_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:apatite_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:apatite' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:apatite' }
        ],
        ingredients: [
            { tag:  'forge:storage_blocks/apatite' },
            { item: 'mysticalagriculture:prudentium_gemstone_block' },
            { tag:  'forge:storage_blocks/apatite' },
            { item: 'mysticalagriculture:prudentium_block' },
            { item: 'mysticalagriculture:deepslate_seeds' },
            { item: 'mysticalagriculture:prudentium_gemstone_block' },
            { item: 'mysticalagriculture:stone_seeds' },
            { item: 'mysticalagriculture:prudentium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:apatite'
        },
        result: {
            item: 'mysticalagriculture:apatite_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:mystical_flower_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:mystical_flower' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:mystical_flower' }
        ],
        ingredients: [
            { type: 'mysticalagriculture:crop_component', component: 'material', crop: 'mysticalagriculture:mystical_flower' },
            { item: 'mysticalagriculture:prudentium_gemstone_block' },
            { item: 'mysticalagriculture:earth_seeds' },
            { item: 'mysticalagriculture:prudentium_block' },
            { type: 'mysticalagriculture:crop_component', component: 'material', crop: 'mysticalagriculture:mystical_flower' },
            { item: 'mysticalagriculture:prudentium_gemstone_block' },
            { item: 'mysticalagriculture:nature_seeds' },
            { item: 'mysticalagriculture:prudentium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:mystical_flower'
        },
        result: {
            item: 'mysticalagriculture:mystical_flower_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:limestone_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:mystical_flower' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:mystical_flower' }
        ],
        ingredients: [
            { type: 'mysticalagriculture:crop_component', component: 'material', crop: 'mysticalagriculture:limestone' },
            { item: 'mysticalagriculture:prudentium_gemstone_block' },
            { item: 'mysticalagriculture:deepslate_seeds' },
            { item: 'mysticalagriculture:prudentium_block' },
            { type: 'mysticalagriculture:crop_component', component: 'material', crop: 'mysticalagriculture:limestone' },
            { item: 'mysticalagriculture:prudentium_gemstone_block' },
            { item: 'mysticalagriculture:stone_seeds' },
            { item: 'mysticalagriculture:prudentium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:limestone'
        },
        result: {
            item: 'mysticalagriculture:limestone_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:iron_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:iron' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:iron' }
        ],
        ingredients: [
            { tag:  'forge:storage_blocks/iron' },
            { item: 'mysticalagriculture:tertium_gemstone_block' },
            { tag:  'forge:storage_blocks/iron' },
            { item: 'mysticalagriculture:tertium_block' },
            { item: 'mysticalagriculture:coal_seeds' },
            { item: 'mysticalagriculture:tertium_gemstone_block' },
            { item: 'mysticalagriculture:silicon_seeds' },
            { item: 'mysticalagriculture:tertium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:iron'
        },
        result: {
            item: 'mysticalagriculture:iron_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:copper_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:copper' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:copper' }
        ],
        ingredients: [
            { tag:  'forge:storage_blocks/copper' },
            { item: 'mysticalagriculture:tertium_gemstone_block' },
            { tag:  'forge:storage_blocks/copper' },
            { item: 'mysticalagriculture:tertium_block' },
            { item: 'mysticalagriculture:coal_seeds' },
            { item: 'mysticalagriculture:tertium_gemstone_block' },
            { item: 'mysticalagriculture:silicon_seeds' },
            { item: 'mysticalagriculture:tertium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:copper'
        },
        result: {
            item: 'mysticalagriculture:copper_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:nether_quartz_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:nether_quartz' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:nether_quartz' }
        ],
        ingredients: [
            { tag:  'forge:storage_blocks/quartz' },
            { item: 'mysticalagriculture:tertium_gemstone_block' },
            { tag:  'forge:storage_blocks/quartz' },
            { item: 'mysticalagriculture:tertium_block' },
            { item: 'mysticalagriculture:nether_seeds' },
            { item: 'mysticalagriculture:tertium_gemstone_block' },
            { item: 'mysticalagriculture:sulfur_seeds' },
            { item: 'mysticalagriculture:tertium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:nether_quartz'
        },
        result: {
            item: 'mysticalagriculture:nether_quartz_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:glowstone_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:glowstone' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:glowstone' }
        ],
        ingredients: [
            { tag:  'forge:storage_blocks/glowstone' },
            { item: 'mysticalagriculture:tertium_gemstone_block' },
            { tag:  'forge:storage_blocks/glowstone' },
            { item: 'mysticalagriculture:tertium_block' },
            { item: 'mysticalagriculture:nether_seeds' },
            { item: 'mysticalagriculture:tertium_gemstone_block' },
            { item: 'mysticalagriculture:sulfur_seeds' },
            { item: 'mysticalagriculture:tertium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:glowstone'
        },
        result: {
            item: 'mysticalagriculture:glowstone_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:redstone_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:redstone' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:redstone' }
        ],
        ingredients: [
            { tag:  'forge:storage_blocks/redstone' },
            { item: 'mysticalagriculture:tertium_gemstone_block' },
            { tag:  'forge:storage_blocks/redstone' },
            { item: 'mysticalagriculture:tertium_block' },
            { item: 'mysticalagriculture:apatite_seeds' },
            { item: 'mysticalagriculture:tertium_gemstone_block' },
            { item: 'mysticalagriculture:silicon_seeds' },
            { item: 'mysticalagriculture:tertium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:redstone'
        },
        result: {
            item: 'mysticalagriculture:redstone_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:obsidian_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:obsidian' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:obsidian' }
        ],
        ingredients: [
            { item: 'minecraft:obsidian' },
            { item: 'mysticalagriculture:tertium_gemstone_block' },
            { item: 'minecraft:obsidian' },
            { item: 'mysticalagriculture:tertium_block' },
            { item: 'mysticalagriculture:nether_seeds' },
            { item: 'mysticalagriculture:tertium_gemstone_block' },
            { item: 'mysticalagriculture:sulfur_seeds' },
            { item: 'mysticalagriculture:tertium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:obsidian'
        },
        result: {
            item: 'mysticalagriculture:obsidian_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:prismarine_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:prismarine' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:prismarine' }
        ],
        ingredients: [
            { item: 'mysticalagriculture:prismarine_agglomeratio' },
            { item: 'mysticalagriculture:tertium_gemstone_block' },
            { item: 'mysticalagriculture:prismarine_agglomeratio' },
            { item: 'mysticalagriculture:tertium_block' },
            { item: 'mysticalagriculture:turtle_seeds' },
            { item: 'mysticalagriculture:tertium_gemstone_block' },
            { item: 'mysticalagriculture:coral_seeds' },
            { item: 'mysticalagriculture:tertium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:prismarine'
        },
        result: {
            item: 'mysticalagriculture:prismarine_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:zombie_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:zombie' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:zombie' }
        ],
        ingredients: [
            { type: 'mysticalagriculture:crop_component', component: 'material', crop: 'mysticalagriculture:zombie' },
            { item: 'mysticalagriculture:tertium_gemstone_block' },
            { item: 'mysticalagriculture:pig_seeds' },
            { item: 'mysticalagriculture:tertium_block' },
            { type: 'mysticalagriculture:crop_component', component: 'material', crop: 'mysticalagriculture:zombie' },
            { item: 'mysticalagriculture:tertium_gemstone_block' },
            { item: 'mysticalagriculture:coal_seeds' },
            { item: 'mysticalagriculture:tertium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:zombie'
        },
        result: {
            item: 'mysticalagriculture:zombie_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:skeleton_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:skeleton' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:skeleton' }
        ],
        ingredients: [
            { type: 'mysticalagriculture:crop_component', component: 'material', crop: 'mysticalagriculture:skeleton' },
            { item: 'mysticalagriculture:tertium_gemstone_block' },
            { item: 'mysticalagriculture:chicken_seeds' },
            { item: 'mysticalagriculture:tertium_block' },
            { type: 'mysticalagriculture:crop_component', component: 'material', crop: 'mysticalagriculture:skeleton' },
            { item: 'mysticalagriculture:tertium_gemstone_block' },
            { item: 'mysticalagriculture:coal_seeds' },
            { item: 'mysticalagriculture:tertium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:skeleton'
        },
        result: {
            item: 'mysticalagriculture:skeleton_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:creeper_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:creeper' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:creeper' }
        ],
        ingredients: [
            { type: 'mysticalagriculture:crop_component', component: 'material', crop: 'mysticalagriculture:creeper' },
            { item: 'mysticalagriculture:tertium_gemstone_block' },
            { item: 'mysticalagriculture:sulfur_seeds' },
            { item: 'mysticalagriculture:tertium_block' },
            { type: 'mysticalagriculture:crop_component', component: 'material', crop: 'mysticalagriculture:creeper' },
            { item: 'mysticalagriculture:tertium_gemstone_block' },
            { item: 'mysticalagriculture:coal_seeds' },
            { item: 'mysticalagriculture:tertium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:creeper'
        },
        result: {
            item: 'mysticalagriculture:creeper_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:spider_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:spider' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:spider' }
        ],
        ingredients: [
            { type: 'mysticalagriculture:crop_component', component: 'material', crop: 'mysticalagriculture:spider' },
            { item: 'mysticalagriculture:tertium_gemstone_block' },
            { item: 'mysticalagriculture:sheep_seeds' },
            { item: 'mysticalagriculture:tertium_block' },
            { type: 'mysticalagriculture:crop_component', component: 'material', crop: 'mysticalagriculture:spider' },
            { item: 'mysticalagriculture:tertium_gemstone_block' },
            { item: 'mysticalagriculture:coal_seeds' },
            { item: 'mysticalagriculture:tertium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:spider'
        },
        result: {
            item: 'mysticalagriculture:spider_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:rabbit_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:rabbit' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:rabbit' }
        ],
        ingredients: [
            { type: 'mysticalagriculture:crop_component', component: 'material', crop: 'mysticalagriculture:rabbit' },
            { item: 'mysticalagriculture:tertium_gemstone_block' },
            { item: 'mysticalagriculture:sheep_seeds' },
            { item: 'mysticalagriculture:tertium_block' },
            { type: 'mysticalagriculture:crop_component', component: 'material', crop: 'mysticalagriculture:rabbit' },
            { item: 'mysticalagriculture:tertium_gemstone_block' },
            { item: 'mysticalagriculture:honey_seeds' },
            { item: 'mysticalagriculture:tertium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:rabbit'
        },
        result: {
            item: 'mysticalagriculture:rabbit_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:tin_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:tin' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:tin' }
        ],
        ingredients: [
            { tag:  'forge:storage_blocks/tin' },
            { item: 'mysticalagriculture:tertium_gemstone_block' },
            { tag:  'forge:storage_blocks/tin' },
            { item: 'mysticalagriculture:tertium_block' },
            { item: 'mysticalagriculture:coal_seeds' },
            { item: 'mysticalagriculture:tertium_gemstone_block' },
            { item: 'mysticalagriculture:apatite_seeds' },
            { item: 'mysticalagriculture:tertium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:tin'
        },
        result: {
            item: 'mysticalagriculture:tin_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:bronze_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:bronze' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:bronze' }
        ],
        ingredients: [
            { tag:  'forge:storage_blocks/bronze' },
            { item: 'mysticalagriculture:tertium_gemstone_block' },
            { tag:  'forge:storage_blocks/bronze' },
            { item: 'mysticalagriculture:tertium_block' },
            { item: 'mysticalagriculture:tin_seeds' },
            { item: 'mysticalagriculture:tertium_gemstone_block' },
            { item: 'mysticalagriculture:copper_seeds' },
            { item: 'mysticalagriculture:tertium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:bronze'
        },
        result: {
            item: 'mysticalagriculture:bronze_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:zinc_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:zinc' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:zinc' }
        ],
        ingredients: [
            { tag:  'forge:storage_blocks/zinc' },
            { item: 'mysticalagriculture:tertium_gemstone_block' },
            { tag:  'forge:storage_blocks/zinc' },
            { item: 'mysticalagriculture:tertium_block' },
            { item: 'mysticalagriculture:coal_seeds' },
            { item: 'mysticalagriculture:tertium_gemstone_block' },
            { item: 'mysticalagriculture:apatite_seeds' },
            { item: 'mysticalagriculture:tertium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:zinc'
        },
        result: {
            item: 'mysticalagriculture:zinc_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:brass_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:brass' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:brass' }
        ],
        ingredients: [
            { tag:  'forge:storage_blocks/brass' },
            { item: 'mysticalagriculture:tertium_gemstone_block' },
            { tag:  'forge:storage_blocks/brass' },
            { item: 'mysticalagriculture:tertium_block' },
            { item: 'mysticalagriculture:zinc_seeds' },
            { item: 'mysticalagriculture:tertium_gemstone_block' },
            { item: 'mysticalagriculture:copper_seeds' },
            { item: 'mysticalagriculture:tertium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:brass'
        },
        result: {
            item: 'mysticalagriculture:brass_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:silver_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:silver' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:silver' }
        ],
        ingredients: [
            { tag:  'forge:storage_blocks/silver' },
            { item: 'mysticalagriculture:tertium_gemstone_block' },
            { tag:  'forge:storage_blocks/silver' },
            { item: 'mysticalagriculture:tertium_block' },
            { item: 'mysticalagriculture:amethyst_seeds' },
            { item: 'mysticalagriculture:tertium_gemstone_block' },
            { item: 'mysticalagriculture:aluminum_seeds' },
            { item: 'mysticalagriculture:tertium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:silver'
        },
        result: {
            item: 'mysticalagriculture:silver_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:lead_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:lead' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:lead' }
        ],
        ingredients: [
            { tag:  'forge:storage_blocks/lead' },
            { item: 'mysticalagriculture:tertium_gemstone_block' },
            { tag:  'forge:storage_blocks/lead' },
            { item: 'mysticalagriculture:tertium_block' },
            { item: 'mysticalagriculture:coal_seeds' },
            { item: 'mysticalagriculture:tertium_gemstone_block' },
            { item: 'mysticalagriculture:amethyst_seeds' },
            { item: 'mysticalagriculture:tertium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:lead'
        },
        result: {
            item: 'mysticalagriculture:lead_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:graphite_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:graphite' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:graphite' }
        ],
        ingredients: [
            { tag:  'forge:storage_blocks/graphite' },
            { item: 'mysticalagriculture:tertium_gemstone_block' },
            { tag:  'forge:storage_blocks/graphite' },
            { item: 'mysticalagriculture:tertium_block' },
            { item: 'mysticalagriculture:coal_seeds' },
            { item: 'mysticalagriculture:tertium_gemstone_block' },
            { item: 'mysticalagriculture:silicon_seeds' },
            { item: 'mysticalagriculture:tertium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:graphite'
        },
        result: {
            item: 'mysticalagriculture:graphite_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:amethyst_bronze_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:amethyst_bronze' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:amethyst_bronze' }
        ],
        ingredients: [
            { tag:  'forge:storage_blocks/amethyst_bronze' },
            { item: 'mysticalagriculture:tertium_gemstone_block' },
            { tag:  'forge:storage_blocks/amethyst_bronze' },
            { item: 'mysticalagriculture:tertium_block' },
            { item: 'mysticalagriculture:amethyst_seeds' },
            { item: 'mysticalagriculture:tertium_gemstone_block' },
            { item: 'mysticalagriculture:bronze_seeds' },
            { item: 'mysticalagriculture:tertium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:amethyst_bronze'
        },
        result: {
            item: 'mysticalagriculture:amethyst_bronze_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:slimesteel_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:slimesteel' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:slimesteel' }
        ],
        ingredients: [
            { tag:  'forge:storage_blocks/slimesteel' },
            { item: 'mysticalagriculture:tertium_gemstone_block' },
            { tag:  'forge:storage_blocks/slimesteel' },
            { item: 'mysticalagriculture:tertium_block' },
            { item: 'mysticalagriculture:slime_seeds' },
            { item: 'mysticalagriculture:tertium_gemstone_block' },
            { item: 'mysticalagriculture:iron_seeds' },
            { item: 'mysticalagriculture:tertium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:slimesteel'
        },
        result: {
            item: 'mysticalagriculture:slimesteel_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:pig_iron_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:pig_iron' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:pig_iron' }
        ],
        ingredients: [
            { tag:  'forge:storage_blocks/pig_iron' },
            { item: 'mysticalagriculture:tertium_gemstone_block' },
            { tag:  'forge:storage_blocks/pig_iron' },
            { item: 'mysticalagriculture:tertium_block' },
            { item: 'mysticalagriculture:pig_seeds' },
            { item: 'mysticalagriculture:tertium_gemstone_block' },
            { item: 'mysticalagriculture:iron_seeds' },
            { item: 'mysticalagriculture:tertium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:pig_iron'
        },
        result: {
            item: 'mysticalagriculture:pig_iron_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:manasteel_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:manasteel' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:manasteel' }
        ],
        ingredients: [
            { tag:  'forge:storage_blocks/manasteel' },
            { item: 'mysticalagriculture:tertium_gemstone_block' },
            { tag:  'forge:storage_blocks/manasteel' },
            { item: 'mysticalagriculture:tertium_block' },
            { item: 'mysticalagriculture:mystical_flower_seeds' },
            { item: 'mysticalagriculture:tertium_gemstone_block' },
            { item: 'mysticalagriculture:iron_seeds' },
            { item: 'mysticalagriculture:tertium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:manasteel'
        },
        result: {
            item: 'mysticalagriculture:manasteel_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:sky_stone_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:sky_stone' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:sky_stone' }
        ],
        ingredients: [
            { item: 'ae2:sky_stone_block' },
            { item: 'mysticalagriculture:tertium_gemstone_block' },
            { item: 'ae2:sky_stone_block' },
            { item: 'mysticalagriculture:tertium_block' },
            { item: 'mysticalagriculture:silicon_seeds' },
            { item: 'mysticalagriculture:tertium_gemstone_block' },
            { item: 'mysticalagriculture:saltpeter_seeds' },
            { item: 'mysticalagriculture:tertium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:sky_stone'
        },
        result: {
            item: 'mysticalagriculture:sky_stone_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:certus_quartz_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:certus_quartz' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:certus_quartz' }
        ],
        ingredients: [
            { item: 'ae2:quartz_cluster' },
            { item: 'mysticalagriculture:tertium_gemstone_block' },
            { item: 'ae2:quartz_cluster' },
            { item: 'mysticalagriculture:tertium_block' },
            { item: 'mysticalagriculture:nether_quartz_seeds' },
            { item: 'mysticalagriculture:tertium_gemstone_block' },
            { item: 'mysticalagriculture:amethyst_seeds' },
            { item: 'mysticalagriculture:tertium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:certus_quartz'
        },
        result: {
            item: 'mysticalagriculture:certus_quartz_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:gold_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:gold' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:gold' }
        ],
        ingredients: [
            { tag:  'forge:storage_blocks/gold' },
            { item: 'mysticalagriculture:imperium_gemstone_block' },
            { tag:  'forge:storage_blocks/gold' },
            { item: 'mysticalagriculture:imperium_block' },
            { item: 'mysticalagriculture:iron_seeds' },
            { item: 'mysticalagriculture:imperium_gemstone_block' },
            { item: 'mysticalagriculture:iron_seeds' },
            { item: 'mysticalagriculture:imperium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:gold'
        },
        result: {
            item: 'mysticalagriculture:gold_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:lapis_lazuli_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:lapis_lazuli' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:lapis_lazuli' }
        ],
        ingredients: [
            { tag:  'forge:storage_blocks/lapis' },
            { item: 'mysticalagriculture:imperium_gemstone_block' },
            { tag:  'forge:storage_blocks/lapis' },
            { item: 'mysticalagriculture:imperium_block' },
            { item: 'mysticalagriculture:tin_seeds' },
            { item: 'mysticalagriculture:imperium_gemstone_block' },
            { item: 'mysticalagriculture:redstone_seeds' },
            { item: 'mysticalagriculture:imperium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:lapis_lazuli'
        },
        result: {
            item: 'mysticalagriculture:lapis_lazuli_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:end_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:end' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:end' }
        ],
        ingredients: [
            { type: 'mysticalagriculture:crop_component', component: 'material', crop: 'mysticalagriculture:end' },
            { item: 'mysticalagriculture:imperium_gemstone_block' },
            { item: 'mysticalagriculture:obsidian_seeds' },
            { item: 'mysticalagriculture:imperium_block' },
            { type: 'mysticalagriculture:crop_component', component: 'material', crop: 'mysticalagriculture:end' },
            { item: 'mysticalagriculture:imperium_gemstone_block' },
            { item: 'mysticalagriculture:air_seeds' },
            { item: 'mysticalagriculture:imperium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:end'
        },
        result: {
            item: 'mysticalagriculture:end_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:experience_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:experience' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:experience' }
        ],
        ingredients: [
            { type: 'mysticalagriculture:crop_component', component: 'material', crop: 'mysticalagriculture:experience' },
            { item: 'mysticalagriculture:imperium_gemstone_block' },
            { item: 'mysticalagriculture:nether_quartz_seeds' },
            { item: 'mysticalagriculture:imperium_block' },
            { type: 'mysticalagriculture:crop_component', component: 'material', crop: 'mysticalagriculture:experience' },
            { item: 'mysticalagriculture:imperium_gemstone_block' },
            { item: 'mysticalagriculture:nether_seeds' },
            { item: 'mysticalagriculture:imperium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:experience'
        },
        result: {
            item: 'mysticalagriculture:experience_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:blaze_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:blaze' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:blaze' }
        ],
        ingredients: [
            { type: 'mysticalagriculture:crop_component', component: 'material', crop: 'mysticalagriculture:blaze' },
            { item: 'mysticalagriculture:imperium_gemstone_block' },
            { item: 'mysticalagriculture:nether_quartz_seeds' },
            { item: 'mysticalagriculture:imperium_block' },
            { type: 'mysticalagriculture:crop_component', component: 'material', crop: 'mysticalagriculture:blaze' },
            { item: 'mysticalagriculture:imperium_gemstone_block' },
            { item: 'mysticalagriculture:nether_seeds' },
            { item: 'mysticalagriculture:imperium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:blaze'
        },
        result: {
            item: 'mysticalagriculture:blaze_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:ghast_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:ghast' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:ghast' }
        ],
        ingredients: [
            { type: 'mysticalagriculture:crop_component', component: 'material', crop: 'mysticalagriculture:ghast' },
            { item: 'mysticalagriculture:imperium_gemstone_block' },
            { item: 'mysticalagriculture:nether_quartz_seeds' },
            { item: 'mysticalagriculture:imperium_block' },
            { type: 'mysticalagriculture:crop_component', component: 'material', crop: 'mysticalagriculture:ghast' },
            { item: 'mysticalagriculture:imperium_gemstone_block' },
            { item: 'mysticalagriculture:nether_seeds' },
            { item: 'mysticalagriculture:imperium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:ghast'
        },
        result: {
            item: 'mysticalagriculture:ghast_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:enderman_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:enderman' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:enderman' }
        ],
        ingredients: [
            { type: 'mysticalagriculture:crop_component', component: 'material', crop: 'mysticalagriculture:enderman' },
            { item: 'mysticalagriculture:imperium_gemstone_block' },
            { item: 'mysticalagriculture:end_seeds' },
            { item: 'mysticalagriculture:imperium_block' },
            { type: 'mysticalagriculture:crop_component', component: 'material', crop: 'mysticalagriculture:enderman' },
            { item: 'mysticalagriculture:imperium_gemstone_block' },
            { item: 'mysticalagriculture:nether_seeds' },
            { item: 'mysticalagriculture:imperium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:enderman'
        },
        result: {
            item: 'mysticalagriculture:enderman_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:steel_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:steel' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:steel' }
        ],
        ingredients: [
            { tag:  'forge:storage_blocks/steel' },
            { item: 'mysticalagriculture:imperium_gemstone_block' },
            { tag:  'forge:storage_blocks/steel' },
            { item: 'mysticalagriculture:imperium_block' },
            { item: 'mysticalagriculture:iron_seeds' },
            { item: 'mysticalagriculture:imperium_gemstone_block' },
            { item: 'mysticalagriculture:coal_seeds' },
            { item: 'mysticalagriculture:imperium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:steel'
        },
        result: {
            item: 'mysticalagriculture:steel_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:nickel_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:nickel' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:nickel' }
        ],
        ingredients: [
            { tag:  'forge:storage_blocks/nickel' },
            { item: 'mysticalagriculture:imperium_gemstone_block' },
            { tag:  'forge:storage_blocks/nickel' },
            { item: 'mysticalagriculture:imperium_block' },
            { item: 'mysticalagriculture:lead_seeds' },
            { item: 'mysticalagriculture:imperium_gemstone_block' },
            { item: 'mysticalagriculture:zinc_seeds' },
            { item: 'mysticalagriculture:imperium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:nickel'
        },
        result: {
            item: 'mysticalagriculture:nickel_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:constantan_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:constantan' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:constantan' }
        ],
        ingredients: [
            { tag:  'forge:storage_blocks/constantan' },
            { item: 'mysticalagriculture:imperium_gemstone_block' },
            { tag:  'forge:storage_blocks/constantan' },
            { item: 'mysticalagriculture:imperium_block' },
            { item: 'mysticalagriculture:copper_seeds' },
            { item: 'mysticalagriculture:imperium_gemstone_block' },
            { item: 'mysticalagriculture:nickel_seeds' },
            { item: 'mysticalagriculture:imperium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:constantan'
        },
        result: {
            item: 'mysticalagriculture:constantan_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:electrum_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:electrum' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:electrum' }
        ],
        ingredients: [
            { tag:  'forge:storage_blocks/electrum' },
            { item: 'mysticalagriculture:imperium_gemstone_block' },
            { tag:  'forge:storage_blocks/electrum' },
            { item: 'mysticalagriculture:imperium_block' },
            { item: 'mysticalagriculture:gold_seeds' },
            { item: 'mysticalagriculture:imperium_gemstone_block' },
            { item: 'mysticalagriculture:silver_seeds' },
            { item: 'mysticalagriculture:imperium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:electrum'
        },
        result: {
            item: 'mysticalagriculture:electrum_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:tungsten_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:tungsten' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:tungsten' }
        ],
        ingredients: [
            { tag:  'forge:storage_blocks/tungsten' },
            { item: 'mysticalagriculture:imperium_gemstone_block' },
            { tag:  'forge:storage_blocks/tungsten' },
            { item: 'mysticalagriculture:imperium_block' },
            { item: 'mysticalagriculture:graphite_seeds' },
            { item: 'mysticalagriculture:imperium_gemstone_block' },
            { item: 'mysticalagriculture:silver_seeds' },
            { item: 'mysticalagriculture:imperium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:tungsten'
        },
        result: {
            item: 'mysticalagriculture:tungsten_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:titanium_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:titanium' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:titanium' }
        ],
        ingredients: [
            { tag:  'forge:storage_blocks/titanium' },
            { item: 'mysticalagriculture:imperium_gemstone_block' },
            { tag:  'forge:storage_blocks/titanium' },
            { item: 'mysticalagriculture:imperium_block' },
            { item: 'mysticalagriculture:graphite_seeds' },
            { item: 'mysticalagriculture:imperium_gemstone_block' },
            { item: 'mysticalagriculture:silver_seeds' },
            { item: 'mysticalagriculture:imperium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:titanium'
        },
        result: {
            item: 'mysticalagriculture:titanium_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:uranium_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:uranium' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:uranium' }
        ],
        ingredients: [
            { tag:  'forge:storage_blocks/uranium' },
            { item: 'mysticalagriculture:imperium_gemstone_block' },
            { tag:  'forge:storage_blocks/uranium' },
            { item: 'mysticalagriculture:imperium_block' },
            { item: 'mysticalagriculture:graphite_seeds' },
            { item: 'mysticalagriculture:imperium_gemstone_block' },
            { item: 'mysticalagriculture:lead_seeds' },
            { item: 'mysticalagriculture:imperium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:uranium'
        },
        result: {
            item: 'mysticalagriculture:uranium_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:ruby_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:ruby' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:ruby' }
        ],
        ingredients: [
            { tag:  'forge:storage_blocks/ruby' },
            { item: 'mysticalagriculture:imperium_gemstone_block' },
            { tag:  'forge:storage_blocks/ruby' },
            { item: 'mysticalagriculture:imperium_block' },
            { item: 'mysticalagriculture:redstone_seeds' },
            { item: 'mysticalagriculture:imperium_gemstone_block' },
            { item: 'mysticalagriculture:nether_quartz_seeds' },
            { item: 'mysticalagriculture:imperium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:ruby'
        },
        result: {
            item: 'mysticalagriculture:ruby_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:sapphire_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:sapphire' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:sapphire' }
        ],
        ingredients: [
            { tag:  'forge:storage_blocks/sapphire' },
            { item: 'mysticalagriculture:imperium_gemstone_block' },
            { tag:  'forge:storage_blocks/sapphire' },
            { item: 'mysticalagriculture:imperium_block' },
            { item: 'mysticalagriculture:redstone_seeds' },
            { item: 'mysticalagriculture:imperium_gemstone_block' },
            { item: 'mysticalagriculture:nether_quartz_seeds' },
            { item: 'mysticalagriculture:imperium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:sapphire'
        },
        result: {
            item: 'mysticalagriculture:sapphire_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:peridot_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:peridot' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:peridot' }
        ],
        ingredients: [
            { tag:  'forge:storage_blocks/peridot' },
            { item: 'mysticalagriculture:imperium_gemstone_block' },
            { tag:  'forge:storage_blocks/peridot' },
            { item: 'mysticalagriculture:imperium_block' },
            { item: 'mysticalagriculture:redstone_seeds' },
            { item: 'mysticalagriculture:imperium_gemstone_block' },
            { item: 'mysticalagriculture:nether_quartz_seeds' },
            { item: 'mysticalagriculture:imperium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:peridot'
        },
        result: {
            item: 'mysticalagriculture:peridot_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:soulium_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:soulium' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:soulium' }
        ],
        ingredients: [
            { type: 'mysticalagriculture:crop_component', component: 'material', crop: 'mysticalagriculture:soulium' },
            { item: 'mysticalagriculture:imperium_gemstone_block' },
            { item: 'mysticalagriculture:glowstone_seeds' },
            { item: 'mysticalagriculture:imperium_block' },
            { type: 'mysticalagriculture:crop_component', component: 'material', crop: 'mysticalagriculture:soulium' },
            { item: 'mysticalagriculture:imperium_gemstone_block' },
            { item: 'mysticalagriculture:nether_seeds' },
            { item: 'mysticalagriculture:imperium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:soulium'
        },
        result: {
            item: 'mysticalagriculture:soulium_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:hop_graphite_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:hop_graphite' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:hop_graphite' }
        ],
        ingredients: [
            { item: 'immersiveengineering:graphite_electrode' },
            { item: 'mysticalagriculture:imperium_gemstone_block' },
            { item: 'immersiveengineering:graphite_electrode' },
            { item: 'mysticalagriculture:imperium_block' },
            { item: 'mysticalagriculture:graphite_seeds' },
            { item: 'mysticalagriculture:imperium_gemstone_block' },
            { item: 'mysticalagriculture:coal_seeds' },
            { item: 'mysticalagriculture:imperium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:hop_graphite'
        },
        result: {
            item: 'mysticalagriculture:hop_graphite_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:cobalt_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:cobalt' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:cobalt' }
        ],
        ingredients: [
            { tag:  'forge:storage_blocks/cobalt' },
            { item: 'mysticalagriculture:imperium_gemstone_block' },
            { tag:  'forge:storage_blocks/cobalt' },
            { item: 'mysticalagriculture:imperium_block' },
            { item: 'mysticalagriculture:graphite_seeds' },
            { item: 'mysticalagriculture:imperium_gemstone_block' },
            { item: 'mysticalagriculture:zinc_seeds' },
            { item: 'mysticalagriculture:imperium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:cobalt'
        },
        result: {
            item: 'mysticalagriculture:cobalt_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:rose_gold_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:rose_gold' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:rose_gold' }
        ],
        ingredients: [
            { tag:  'forge:storage_blocks/rose_gold' },
            { item: 'mysticalagriculture:imperium_gemstone_block' },
            { tag:  'forge:storage_blocks/rose_gold' },
            { item: 'mysticalagriculture:imperium_block' },
            { item: 'mysticalagriculture:copper_seeds' },
            { item: 'mysticalagriculture:imperium_gemstone_block' },
            { item: 'mysticalagriculture:gold_seeds' },
            { item: 'mysticalagriculture:imperium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:rose_gold'
        },
        result: {
            item: 'mysticalagriculture:rose_gold_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:elementium_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:elementium' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:elementium' }
        ],
        ingredients: [
            { tag:  'forge:storage_blocks/elementium' },
            { item: 'mysticalagriculture:imperium_gemstone_block' },
            { tag:  'forge:storage_blocks/elementium' },
            { item: 'mysticalagriculture:imperium_block' },
            { item: 'mysticalagriculture:end_seeds' },
            { item: 'mysticalagriculture:imperium_gemstone_block' },
            { item: 'mysticalagriculture:steel_seeds' },
            { item: 'mysticalagriculture:imperium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:elementium'
        },
        result: {
            item: 'mysticalagriculture:elementium_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:osmium_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:osmium' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:osmium' }
        ],
        ingredients: [
            { tag:  'forge:storage_blocks/osmium' },
            { item: 'mysticalagriculture:imperium_gemstone_block' },
            { tag:  'forge:storage_blocks/osmium' },
            { item: 'mysticalagriculture:imperium_block' },
            { item: 'mysticalagriculture:gold_seeds' },
            { item: 'mysticalagriculture:imperium_gemstone_block' },
            { item: 'mysticalagriculture:redstone_seeds' },
            { item: 'mysticalagriculture:imperium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:osmium'
        },
        result: {
            item: 'mysticalagriculture:osmium_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:fluorite_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:fluorite' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:fluorite' }
        ],
        ingredients: [
            { tag:  'forge:storage_blocks/fluorite' },
            { item: 'mysticalagriculture:imperium_gemstone_block' },
            { tag:  'forge:storage_blocks/fluorite' },
            { item: 'mysticalagriculture:imperium_block' },
            { item: 'mysticalagriculture:osmium_seeds' },
            { item: 'mysticalagriculture:imperium_gemstone_block' },
            { item: 'mysticalagriculture:redstone_seeds' },
            { item: 'mysticalagriculture:imperium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:fluorite'
        },
        result: {
            item: 'mysticalagriculture:fluorite_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:refined_glowstone_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:refined_glowstone' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:refined_glowstone' }
        ],
        ingredients: [
            { tag:  'forge:storage_blocks/refined_glowstone' },
            { item: 'mysticalagriculture:imperium_gemstone_block' },
            { tag:  'forge:storage_blocks/refined_glowstone' },
            { item: 'mysticalagriculture:imperium_block' },
            { item: 'mysticalagriculture:osmium_seeds' },
            { item: 'mysticalagriculture:imperium_gemstone_block' },
            { item: 'mysticalagriculture:glowstone_seeds' },
            { item: 'mysticalagriculture:imperium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:refined_glowstone'
        },
        result: {
            item: 'mysticalagriculture:refined_glowstone_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:refined_obsidian_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:refined_obsidian' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:refined_obsidian' }
        ],
        ingredients: [
            { tag:  'forge:storage_blocks/refined_obsidian' },
            { item: 'mysticalagriculture:imperium_gemstone_block' },
            { tag:  'forge:storage_blocks/refined_obsidian' },
            { item: 'mysticalagriculture:imperium_block' },
            { item: 'mysticalagriculture:osmium_seeds' },
            { item: 'mysticalagriculture:imperium_gemstone_block' },
            { item: 'mysticalagriculture:obsidian_seeds' },
            { item: 'mysticalagriculture:imperium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:refined_obsidian'
        },
        result: {
            item: 'mysticalagriculture:refined_obsidian_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:compressed_iron_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:compressed_iron' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:compressed_iron' }
        ],
        ingredients: [
            { tag:  'forge:storage_blocks/compressed_iron' },
            { item: 'mysticalagriculture:imperium_gemstone_block' },
            { tag:  'forge:storage_blocks/compressed_iron' },
            { item: 'mysticalagriculture:imperium_block' },
            { item: 'mysticalagriculture:iron_seeds' },
            { item: 'mysticalagriculture:imperium_gemstone_block' },
            { item: 'mysticalagriculture:creeper_seeds' },
            { item: 'mysticalagriculture:imperium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:compressed_iron'
        },
        result: {
            item: 'mysticalagriculture:compressed_iron_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:fluix_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:fluix' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:fluix' }
        ],
        ingredients: [
            { item: 'ae2:fluix_crystal' },
            { item: 'mysticalagriculture:imperium_gemstone_block' },
            { item: 'ae2:fluix_crystal' },
            { item: 'mysticalagriculture:imperium_block' },
            { item: 'mysticalagriculture:redstone_seeds' },
            { item: 'mysticalagriculture:imperium_gemstone_block' },
            { item: 'mysticalagriculture:certus_quartz_seeds' },
            { item: 'mysticalagriculture:imperium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:fluix'
        },
        result: {
            item: 'mysticalagriculture:fluix_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:diamond_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:diamond' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:diamond' }
        ],
        ingredients: [
            { tag:  'forge:storage_blocks/diamond' },
            { item: 'mysticalagriculture:supremium_gemstone_block' },
            { tag:  'forge:storage_blocks/diamond' },
            { item: 'mysticalagriculture:supremium_block' },
            { item: 'mysticalagriculture:silicon_seeds' },
            { item: 'mysticalagriculture:supremium_gemstone_block' },
            { item: 'mysticalagriculture:coal_seeds' },
            { item: 'mysticalagriculture:supremium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:diamond'
        },
        result: {
            item: 'mysticalagriculture:diamond_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:emerald_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:emerald' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:emerald' }
        ],
        ingredients: [
            { tag:  'forge:storage_blocks/emerald' },
            { item: 'mysticalagriculture:supremium_gemstone_block' },
            { tag:  'forge:storage_blocks/emerald' },
            { item: 'mysticalagriculture:supremium_block' },
            { item: 'mysticalagriculture:cobalt_seeds' },
            { item: 'mysticalagriculture:supremium_gemstone_block' },
            { item: 'mysticalagriculture:peridot_seeds' },
            { item: 'mysticalagriculture:supremium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:emerald'
        },
        result: {
            item: 'mysticalagriculture:emerald_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:netherite_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:netherite' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:netherite' }
        ],
        ingredients: [
            { tag:  'forge:storage_blocks/netherite' },
            { item: 'mysticalagriculture:supremium_gemstone_block' },
            { tag:  'forge:storage_blocks/netherite' },
            { item: 'mysticalagriculture:supremium_block' },
            { item: 'mysticalagriculture:cobalt_seeds' },
            { item: 'mysticalagriculture:supremium_gemstone_block' },
            { item: 'mysticalagriculture:compressed_iron_seeds' },
            { item: 'mysticalagriculture:supremium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:netherite'
        },
        result: {
            item: 'mysticalagriculture:netherite_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:wither_skeleton_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:wither_skeleton' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:wither_skeleton' }
        ],
        ingredients: [
            { type: 'mysticalagriculture:crop_component', component: 'material', crop: 'mysticalagriculture:wither_skeleton' },
            { item: 'mysticalagriculture:supremium_gemstone_block' },
            { item: 'mysticalagriculture:soulium_seeds' },
            { item: 'mysticalagriculture:supremium_block' },
            { type: 'mysticalagriculture:crop_component', component: 'material', crop: 'mysticalagriculture:wither_skeleton' },
            { item: 'mysticalagriculture:supremium_gemstone_block' },
            { item: 'mysticalagriculture:skeleton_seeds' },
            { item: 'mysticalagriculture:supremium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:wither_skeleton'
        },
        result: {
            item: 'mysticalagriculture:wither_skeleton_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:platinum_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:platinum' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:platinum' }
        ],
        ingredients: [
            { tag:  'forge:storage_blocks/platinum' },
            { item: 'mysticalagriculture:supremium_gemstone_block' },
            { tag:  'forge:storage_blocks/platinum' },
            { item: 'mysticalagriculture:supremium_block' },
            { item: 'mysticalagriculture:cobalt_seeds' },
            { item: 'mysticalagriculture:supremium_gemstone_block' },
            { item: 'mysticalagriculture:diamond_seeds' },
            { item: 'mysticalagriculture:supremium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:platinum'
        },
        result: {
            item: 'mysticalagriculture:platinum_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:iridium_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:iridium' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:iridium' }
        ],
        ingredients: [
            { tag:  'forge:storage_blocks/iridium' },
            { item: 'mysticalagriculture:supremium_gemstone_block' },
            { tag:  'forge:storage_blocks/iridium' },
            { item: 'mysticalagriculture:supremium_block' },
            { item: 'mysticalagriculture:platinum_seeds' },
            { item: 'mysticalagriculture:supremium_gemstone_block' },
            { item: 'mysticalagriculture:end_seeds' },
            { item: 'mysticalagriculture:supremium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:iridium'
        },
        result: {
            item: 'mysticalagriculture:iridium_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:manyullyn_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:manyullyn' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:manyullyn' }
        ],
        ingredients: [
            { tag:  'forge:storage_blocks/manyullyn' },
            { item: 'mysticalagriculture:supremium_gemstone_block' },
            { tag:  'forge:storage_blocks/manyullyn' },
            { item: 'mysticalagriculture:supremium_block' },
            { item: 'mysticalagriculture:cobalt_seeds' },
            { item: 'mysticalagriculture:supremium_gemstone_block' },
            { item: 'mysticalagriculture:netherite_seeds' },
            { item: 'mysticalagriculture:supremium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:manyullyn'
        },
        result: {
            item: 'mysticalagriculture:manyullyn_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:queens_slime_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:queens_slime' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:queens_slime' }
        ],
        ingredients: [
            { tag:  'forge:storage_blocks/queens_slime' },
            { item: 'mysticalagriculture:supremium_gemstone_block' },
            { tag:  'forge:storage_blocks/queens_slime' },
            { item: 'mysticalagriculture:supremium_block' },
            { item: 'mysticalagriculture:cobalt_seeds' },
            { item: 'mysticalagriculture:supremium_gemstone_block' },
            { item: 'mysticalagriculture:gold_seeds' },
            { item: 'mysticalagriculture:supremium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:queens_slime'
        },
        result: {
            item: 'mysticalagriculture:queens_slime_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:hepatizon_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:hepatizon' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:hepatizon' }
        ],
        ingredients: [
            { tag:  'forge:storage_blocks/hepatizon' },
            { item: 'mysticalagriculture:supremium_gemstone_block' },
            { tag:  'forge:storage_blocks/hepatizon' },
            { item: 'mysticalagriculture:supremium_block' },
            { item: 'mysticalagriculture:cobalt_seeds' },
            { item: 'mysticalagriculture:supremium_gemstone_block' },
            { item: 'mysticalagriculture:copper_seeds' },
            { item: 'mysticalagriculture:supremium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:hepatizon'
        },
        result: {
            item: 'mysticalagriculture:hepatizon_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:terrasteel_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:terrasteel' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:terrasteel' }
        ],
        ingredients: [
            { tag:  'forge:storage_blocks/terrasteel' },
            { item: 'mysticalagriculture:supremium_gemstone_block' },
            { tag:  'forge:storage_blocks/terrasteel' },
            { item: 'mysticalagriculture:supremium_block' },
            { item: 'mysticalagriculture:elementium_seeds' },
            { item: 'mysticalagriculture:supremium_gemstone_block' },
            { item: 'mysticalagriculture:manasteel_seeds' },
            { item: 'mysticalagriculture:supremium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:terrasteel'
        },
        result: {
            item: 'mysticalagriculture:terrasteel_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:draconium_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagriculture:draconium' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagriculture:draconium' }
        ],
        ingredients: [
            { tag:  'forge:storage_blocks/draconium' },
            { item: 'mysticalagriculture:supremium_gemstone_block' },
            { tag:  'forge:storage_blocks/draconium' },
            { item: 'mysticalagriculture:supremium_block' },
            { item: 'mysticalagriculture:gold_seeds' },
            { item: 'mysticalagriculture:supremium_gemstone_block' },
            { item: 'mysticalagriculture:end_seeds' },
            { item: 'mysticalagriculture:supremium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagriculture:draconium'
        },
        result: {
            item: 'mysticalagriculture:draconium_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:nether_star_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagradditions:nether_star' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagradditions:nether_star' }
        ],
        ingredients: [
            { item: 'mysticalagriculture:wither_skeleton_seeds' },
            { item: 'mysticalagradditions:insanium_gemstone_block' },
            { item: 'mysticalagriculture:wither_skeleton_seeds' },
            { item: 'mysticalagradditions:insanium_block' },
            { item: 'mysticalagriculture:wither_skeleton_seeds' },
            { item: 'mysticalagradditions:insanium_gemstone_block' },
            { item: 'mysticalagriculture:wither_skeleton_seeds' },
            { item: 'mysticalagradditions:insanium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagradditions:nether_star'
        },
        result: {
            item: 'mysticalagriculture:nether_star_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:dragon_egg_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagradditions:dragon_egg' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagradditions:dragon_egg' }
        ],
        ingredients: [
            { item: 'mysticalagradditions:dragon_scale' },
            { item: 'mysticalagradditions:insanium_gemstone_block' },
            { item: 'mysticalagradditions:dragon_scale' },
            { item: 'mysticalagradditions:insanium_block' },
            { item: 'mysticalagriculture:enderman_seeds' },
            { item: 'mysticalagradditions:insanium_gemstone_block' },
            { item: 'mysticalagriculture:enderman_seeds' },
            { item: 'mysticalagradditions:insanium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagradditions:dragon_egg'
        },
        result: {
            item: 'mysticalagriculture:dragon_egg_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:gaia_spirit_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagradditions:gaia_spirit' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagradditions:gaia_spirit' }
        ],
        ingredients: [
            { item: 'botania:gaia_ingot' },
            { item: 'mysticalagradditions:insanium_gemstone_block' },
            { item: 'botania:gaia_ingot' },
            { item: 'mysticalagradditions:insanium_block' },
            { item: 'mysticalagriculture:terrasteel_seeds' },
            { item: 'mysticalagradditions:insanium_gemstone_block' },
            { item: 'mysticalagriculture:terrasteel_seeds' },
            { item: 'mysticalagradditions:insanium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagradditions:gaia_spirit'
        },
        result: {
            item: 'mysticalagriculture:gaia_spirit_seeds'
        }
    });

    event.remove({ output: 'mysticalagriculture:awakened_draconium_seeds', type: 'mysticalagriculture:infusion' });

    event.custom({
        type: 'mysticalagriculture:infusion',
        conditions: [
            { type: 'mysticalagriculture:crop_enabled', crop: 'mysticalagradditions:awakened_draconium' },
            { type: 'mysticalagriculture:crop_has_material', crop: 'mysticalagradditions:awakened_draconium' }
        ],
        ingredients: [
            { tag:  'forge:storage_blocks/draconium_awakened' },
            { item: 'mysticalagradditions:insanium_gemstone_block' },
            { tag:  'forge:storage_blocks/draconium_awakened' },
            { item: 'mysticalagradditions:insanium_block' },
            { item: 'mysticalagriculture:draconium_seeds' },
            { item: 'mysticalagradditions:insanium_gemstone_block' },
            { item: 'mysticalagriculture:dragon_egg_seeds' },
            { item: 'mysticalagradditions:insanium_block' }
        ],
        input: {
            type: 'mysticalagriculture:crop_component',
            component: 'seed',
            crop: 'mysticalagradditions:awakened_draconium'
        },
        result: {
            item: 'mysticalagriculture:awakened_draconium_seeds'
        }
    });

    event.custom({
        type: "bloodmagic:altar",
        altarSyphon: 5000,
        consumptionRate: 5,
        drainRate: 5,
        input: {
            item: "vampirism:blood_bottle"
        },
        output: {
            item: "vampirism:pure_blood_0"
        },
        "upgradeLevel": 0
    });

    event.custom({
        type: "bloodmagic:altar",
        altarSyphon: 6000,
        consumptionRate: 5,
        drainRate: 5,
        input: {
            item: "vampirism:pure_blood_0"
        },
        output: {
            item: "vampirism:pure_blood_1"
        },
        "upgradeLevel": 1
    });

    event.custom({
        type: "bloodmagic:altar",
        altarSyphon: 7000,
        consumptionRate: 5,
        drainRate: 5,
        input: {
            item: "vampirism:pure_blood_1"
        },
        output: {
            item: "vampirism:pure_blood_2"
        },
        "upgradeLevel": 2
    });

    event.custom({
        type: "bloodmagic:altar",
        altarSyphon: 8000,
        consumptionRate: 5,
        drainRate: 5,
        input: {
            item: "vampirism:pure_blood_2"
        },
        output: {
            item: "vampirism:pure_blood_3"
        },
        "upgradeLevel": 3
    });

    event.custom({
        type: "bloodmagic:altar",
        altarSyphon: 10000,
        consumptionRate: 5,
        drainRate: 5,
        input: {
            item: "vampirism:pure_blood_3"
        },
        output: {
            item: "vampirism:pure_blood_4"
        },
        "upgradeLevel": 4
    });

    event.remove({output: 'fossil:analyzer'});

    event.shaped(Item.of('fossil:analyzer', 1), [
        'SFS',
        'SBS',
        '   '
    ], {
        F: 'fossil:relic_scrap',
        S: '#forge:ingots/steel',
        B: '#fossil:fossils'
    });

    event.remove({output: 'fossil:culture_vat'});

    event.shaped(Item.of('fossil:culture_vat', 1), [
        'GLG',
        'GBG',
        'SSS'
    ], {
        G: 'immersiveengineering:insulating_glass',
        S: '#forge:ingots/steel',
        B: 'minecraft:water_bucket',
        L: '#forge:slimeballs',
    });
});



