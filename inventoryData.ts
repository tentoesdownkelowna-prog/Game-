import { IMAGES, COLORS } from './gameData';

// ==================== TYPES ====================
export interface InventoryItemFull {
  id: string;
  player_id: string;
  item_id: string;
  name: string;
  description: string;
  category: 'weapon' | 'gear' | 'vehicle' | 'consumable' | 'material' | 'special';
  subcategory: string;
  rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'mythic';
  image_url: string;
  equipped: boolean;
  equipped_slot: string | null;
  quantity: number;
  durability: number;
  max_durability: number;
  enhancement_level: number;
  base_damage: number;
  base_defense: number;
  base_speed: number;
  base_stealth: number;
  base_tech: number;
  bonus_health: number;
  bonus_armor: number;
  special_effect: string | null;
  special_effect_value: number;
  sell_value: number;
  salvage_materials: string[];
  level_requirement: number;
  class_requirement: string | null;
  is_tradeable: boolean;
  is_stackable: boolean;
  acquired_at: string;
  effective_stats: {
    damage: number;
    defense: number;
    speed: number;
    stealth: number;
    tech: number;
    health: number;
    armor: number;
  };
  enhance_cost: number | null;
  enhance_success_rate: number;
  repair_cost: number;
}

// ==================== CONSTANTS ====================
export const RARITY_COLORS: Record<string, string> = {
  common: '#8888AA',
  uncommon: '#00FF88',
  rare: '#00D4FF',
  epic: '#B44AFF',
  legendary: '#FFD700',
  mythic: '#FF3366',
};

export const RARITY_GLOW: Record<string, string> = {
  common: 'transparent',
  uncommon: 'rgba(0,255,136,0.15)',
  rare: 'rgba(0,212,255,0.2)',
  epic: 'rgba(180,74,255,0.25)',
  legendary: 'rgba(255,215,0,0.3)',
  mythic: 'rgba(255,51,102,0.35)',
};

export const RARITY_ORDER: Record<string, number> = {
  common: 0,
  uncommon: 1,
  rare: 2,
  epic: 3,
  legendary: 4,
  mythic: 5,
};

export const CATEGORY_ICONS: Record<string, string> = {
  weapon: 'flash',
  gear: 'shield',
  vehicle: 'car-sport',
  consumable: 'flask',
  material: 'cube',
  special: 'diamond',
};

export const SLOT_NAMES: Record<string, string> = {
  weapon_primary: 'Primary Weapon',
  weapon_secondary: 'Secondary Weapon',
  armor_head: 'Headgear',
  armor_body: 'Body Armor',
  armor_legs: 'Leg Armor',
  vehicle: 'Vehicle',
  gadget_1: 'Gadget 1',
  gadget_2: 'Gadget 2',
  accessory: 'Accessory',
};

export const SPECIAL_EFFECTS: Record<string, { label: string; color: string }> = {
  tracer_rounds: { label: 'Tracer Rounds', color: '#FF6B35' },
  silenced: { label: 'Silenced', color: '#B44AFF' },
  emp_rounds: { label: 'EMP Rounds', color: '#00D4FF' },
  armor_pierce: { label: 'Armor Pierce', color: '#FF3366' },
  headshot_bonus: { label: 'Headshot +50%', color: '#FFD700' },
  damage_reduction: { label: 'Damage Reduction', color: '#00D4FF' },
  auto_repair: { label: 'Auto-Repair', color: '#00FF88' },
  active_camo: { label: 'Active Camo', color: '#B44AFF' },
  enemy_highlight: { label: 'Enemy Highlight', color: '#FF6B35' },
  stealth_mode: { label: 'Stealth Mode', color: '#B44AFF' },
  nitro_boost: { label: 'Nitro Boost', color: '#FF6B35' },
  emp_shield: { label: 'EMP Shield', color: '#00D4FF' },
  instant_heal: { label: 'Instant Heal', color: '#00FF88' },
  instant_armor: { label: 'Instant Armor', color: '#00D4FF' },
  damage_boost: { label: 'Damage +20%', color: '#FF3366' },
  area_emp: { label: 'Area EMP', color: '#00D4FF' },
  data_decrypt: { label: 'Data Decrypt', color: '#B44AFF' },
  vault_access: { label: 'Vault Access', color: '#FFD700' },
};

export const ENHANCE_COSTS = [500, 1000, 2000, 4000, 8000, 15000, 25000, 40000, 60000, 100000];
export const ENHANCE_SUCCESS_RATES = [95, 90, 85, 75, 65, 55, 45, 35, 25, 15];

// ==================== HELPER FUNCTIONS ====================
export function getRarityColor(rarity: string): string {
  return RARITY_COLORS[rarity] || '#8888AA';
}

export function getRarityGlow(rarity: string): string {
  return RARITY_GLOW[rarity] || 'transparent';
}

export function getEffectiveStats(item: InventoryItemFull) {
  const mult = 1 + (item.enhancement_level * 0.12);
  const durMult = Math.max(0.5, item.durability / item.max_durability);
  return {
    damage: Math.floor(item.base_damage * mult * durMult),
    defense: Math.floor(item.base_defense * mult * durMult),
    speed: Math.floor(item.base_speed * mult * durMult),
    stealth: Math.floor(item.base_stealth * mult * durMult),
    tech: Math.floor(item.base_tech * mult * durMult),
    health: item.bonus_health,
    armor: item.bonus_armor,
  };
}

export function getDurabilityColor(durability: number, max: number): string {
  const pct = durability / max;
  if (pct > 0.7) return '#00FF88';
  if (pct > 0.4) return '#FFD700';
  if (pct > 0.15) return '#FF6B35';
  return '#FF3366';
}

export function formatSellValue(value: number): string {
  if (value >= 1000000) return (value / 1000000).toFixed(1) + 'M';
  if (value >= 1000) return (value / 1000).toFixed(1) + 'K';
  return value.toString();
}

// ==================== FALLBACK DATA ====================
function makeItem(overrides: Partial<InventoryItemFull>): InventoryItemFull {
  const base: InventoryItemFull = {
    id: '',
    player_id: '00000000-0000-0000-0000-000000000001',
    item_id: '',
    name: '',
    description: '',
    category: 'weapon',
    subcategory: '',
    rarity: 'common',
    image_url: '',
    equipped: false,
    equipped_slot: null,
    quantity: 1,
    durability: 100,
    max_durability: 100,
    enhancement_level: 0,
    base_damage: 0,
    base_defense: 0,
    base_speed: 0,
    base_stealth: 0,
    base_tech: 0,
    bonus_health: 0,
    bonus_armor: 0,
    special_effect: null,
    special_effect_value: 0,
    sell_value: 0,
    salvage_materials: [],
    level_requirement: 1,
    class_requirement: null,
    is_tradeable: true,
    is_stackable: false,
    acquired_at: new Date().toISOString(),
    effective_stats: { damage: 0, defense: 0, speed: 0, stealth: 0, tech: 0, health: 0, armor: 0 },
    enhance_cost: 500,
    enhance_success_rate: 95,
    repair_cost: 0,
  };
  const item = { ...base, ...overrides };
  item.effective_stats = getEffectiveStats(item);
  item.enhance_cost = item.enhancement_level < 10 ? ENHANCE_COSTS[item.enhancement_level] : null;
  item.enhance_success_rate = item.enhancement_level < 10 ? ENHANCE_SUCCESS_RATES[item.enhancement_level] : 0;
  const repairCosts: Record<string, number> = { common: 10, uncommon: 20, rare: 40, epic: 80, legendary: 150, mythic: 300 };
  item.repair_cost = Math.ceil((item.max_durability - item.durability) * (repairCosts[item.rarity] || 10));
  return item;
}

export const FALLBACK_INVENTORY: InventoryItemFull[] = [
  // EQUIPPED
  makeItem({ id: 'fi1', item_id: 'w_neon_striker', name: 'Neon Striker', description: 'Compact sidearm with neon tracer rounds.', category: 'weapon', subcategory: 'pistol', rarity: 'common', image_url: IMAGES.weapons[0], equipped: true, equipped_slot: 'weapon_primary', durability: 78, enhancement_level: 2, base_damage: 18, special_effect: 'tracer_rounds', special_effect_value: 5, sell_value: 1250, salvage_materials: ['scrap_metal', 'circuit_board'] }),
  makeItem({ id: 'fi2', item_id: 'g_kevlar_vest', name: 'Kevlar Vest', description: 'Standard ballistic protection.', category: 'gear', subcategory: 'body_armor', rarity: 'common', image_url: IMAGES.gear[0], equipped: true, equipped_slot: 'armor_body', durability: 65, enhancement_level: 1, base_defense: 22, bonus_armor: 25, special_effect: 'damage_reduction', special_effect_value: 8, sell_value: 1500, salvage_materials: ['kevlar_fiber', 'ballistic_plate'] }),
  makeItem({ id: 'fi3', item_id: 'v_shadow_runner', name: 'Shadow Runner', description: 'Stealth sports car with cloaking tech.', category: 'vehicle', subcategory: 'car', rarity: 'uncommon', image_url: IMAGES.vehicles[0], equipped: true, equipped_slot: 'vehicle', durability: 90, base_defense: 5, base_speed: 7, base_stealth: 3, special_effect: 'stealth_mode', special_effect_value: 15, sell_value: 7500, salvage_materials: ['titanium_alloy', 'stealth_coating', 'circuit_board'] }),
  // UNEQUIPPED WEAPONS
  makeItem({ id: 'fi4', item_id: 'w_phantom_smg', name: 'Phantom SMG', description: 'Silenced submachine gun for close quarters.', category: 'weapon', subcategory: 'smg', rarity: 'uncommon', image_url: IMAGES.weapons[1], durability: 92, base_damage: 25, base_speed: 2, base_stealth: 3, special_effect: 'silenced', special_effect_value: 20, sell_value: 2500, level_requirement: 3, salvage_materials: ['scrap_metal', 'polymer_grip', 'circuit_board'] }),
  makeItem({ id: 'fi5', item_id: 'w_volt_rifle', name: 'Volt Rifle', description: 'Electromagnetic assault rifle with EMP rounds.', category: 'weapon', subcategory: 'rifle', rarity: 'rare', image_url: IMAGES.weapons[2], base_damage: 40, base_tech: 5, special_effect: 'emp_rounds', special_effect_value: 25, sell_value: 6000, level_requirement: 5, salvage_materials: ['plasma_core', 'titanium_alloy', 'circuit_board', 'emp_cell'] }),
  makeItem({ id: 'fi6', item_id: 'w_havoc_shotgun', name: 'Havoc Shotgun', description: 'Devastating close-range plasma shotgun.', category: 'weapon', subcategory: 'shotgun', rarity: 'rare', image_url: IMAGES.weapons[3], durability: 85, enhancement_level: 1, base_damage: 55, base_speed: -2, special_effect: 'armor_pierce', special_effect_value: 30, sell_value: 9000, level_requirement: 8, salvage_materials: ['plasma_core', 'titanium_alloy', 'scrap_metal'] }),
  makeItem({ id: 'fi7', item_id: 'w_spectre_sniper', name: 'Spectre Sniper', description: 'Long-range precision rifle with thermal scope.', category: 'weapon', subcategory: 'sniper', rarity: 'epic', image_url: IMAGES.weapons[4], base_damage: 75, base_stealth: 5, base_tech: 3, special_effect: 'headshot_bonus', special_effect_value: 50, sell_value: 15000, level_requirement: 12, salvage_materials: ['plasma_core', 'quantum_lens', 'titanium_alloy', 'stealth_coating'] }),
  // GEAR
  makeItem({ id: 'fi8', item_id: 'g_nano_armor', name: 'Nano Armor', description: 'Self-repairing nanotech body armor.', category: 'gear', subcategory: 'body_armor', rarity: 'rare', image_url: IMAGES.gear[1], base_defense: 40, base_tech: 3, bonus_health: 10, bonus_armor: 40, special_effect: 'auto_repair', special_effect_value: 2, sell_value: 7500, level_requirement: 7, salvage_materials: ['nano_fiber', 'quantum_processor', 'titanium_alloy'] }),
  makeItem({ id: 'fi9', item_id: 'g_stealth_suit', name: 'Stealth Suit', description: 'Active camouflage suit for covert ops.', category: 'gear', subcategory: 'body_armor', rarity: 'epic', image_url: IMAGES.gear[2], durability: 95, base_defense: 30, base_speed: 3, base_stealth: 8, base_tech: 2, bonus_armor: 30, special_effect: 'active_camo', special_effect_value: 40, sell_value: 12500, level_requirement: 10, salvage_materials: ['nano_fiber', 'stealth_coating', 'quantum_processor', 'holographic_emitter'] }),
  makeItem({ id: 'fi10', item_id: 'g_holo_visor', name: 'Holo Visor', description: 'Augmented reality combat visor.', category: 'gear', subcategory: 'headgear', rarity: 'uncommon', image_url: IMAGES.gear[3], durability: 88, base_damage: 5, base_defense: 5, base_tech: 4, special_effect: 'enemy_highlight', special_effect_value: 15, sell_value: 3000, level_requirement: 3, salvage_materials: ['circuit_board', 'holographic_emitter'] }),
  // VEHICLES
  makeItem({ id: 'fi11', item_id: 'v_venom_gt', name: 'Venom GT', description: 'Supercar with nitro injection system.', category: 'vehicle', subcategory: 'car', rarity: 'rare', image_url: IMAGES.vehicles[1], base_defense: 3, base_speed: 9, special_effect: 'nitro_boost', special_effect_value: 35, sell_value: 17500, level_requirement: 6, salvage_materials: ['titanium_alloy', 'turbo_engine', 'carbon_fiber'] }),
  makeItem({ id: 'fi12', item_id: 'v_wraith_bike', name: 'Wraith Bike', description: 'Cyberpunk motorcycle with EMP shielding.', category: 'vehicle', subcategory: 'bike', rarity: 'uncommon', image_url: IMAGES.vehicles[2], durability: 72, base_defense: 2, base_speed: 8, base_stealth: 2, special_effect: 'emp_shield', special_effect_value: 20, sell_value: 10000, level_requirement: 4, salvage_materials: ['scrap_metal', 'circuit_board', 'emp_cell'] }),
  // CONSUMABLES
  makeItem({ id: 'fi13', item_id: 'c_medkit', name: 'Combat Medkit', description: 'Military-grade medical supplies. Restores 50 HP.', category: 'consumable', subcategory: 'healing', rarity: 'common', quantity: 5, bonus_health: 50, special_effect: 'instant_heal', special_effect_value: 50, sell_value: 200, is_stackable: true, is_tradeable: false }),
  makeItem({ id: 'fi14', item_id: 'c_armor_patch', name: 'Armor Repair Kit', description: 'Quick-apply armor patches. Restores 30 armor.', category: 'consumable', subcategory: 'repair', rarity: 'common', quantity: 3, bonus_armor: 30, special_effect: 'instant_armor', special_effect_value: 30, sell_value: 300, is_stackable: true, is_tradeable: false }),
  makeItem({ id: 'fi15', item_id: 'c_stim_pack', name: 'Adrenaline Stim', description: 'Combat stimulant. +20% damage for 60 seconds.', category: 'consumable', subcategory: 'buff', rarity: 'uncommon', quantity: 2, special_effect: 'damage_boost', special_effect_value: 20, sell_value: 500, is_stackable: true, is_tradeable: false, level_requirement: 3 }),
  makeItem({ id: 'fi16', item_id: 'c_emp_grenade', name: 'EMP Grenade', description: 'Disables electronics in a 10m radius.', category: 'consumable', subcategory: 'tactical', rarity: 'rare', quantity: 1, base_damage: 30, base_tech: 8, special_effect: 'area_emp', special_effect_value: 10, sell_value: 1500, is_stackable: true, is_tradeable: false, level_requirement: 5 }),
  // MATERIALS
  makeItem({ id: 'fi17', item_id: 'm_scrap_metal', name: 'Scrap Metal', description: 'Salvaged metal components.', category: 'material', subcategory: 'basic', rarity: 'common', quantity: 24, sell_value: 50, is_stackable: true }),
  makeItem({ id: 'fi18', item_id: 'm_circuit_board', name: 'Circuit Board', description: 'Electronic components for tech upgrades.', category: 'material', subcategory: 'basic', rarity: 'common', quantity: 15, sell_value: 75, is_stackable: true }),
  makeItem({ id: 'fi19', item_id: 'm_plasma_core', name: 'Plasma Core', description: 'High-energy power source for advanced weapons.', category: 'material', subcategory: 'advanced', rarity: 'rare', quantity: 4, sell_value: 500, is_stackable: true }),
  makeItem({ id: 'fi20', item_id: 'm_nano_fiber', name: 'Nano Fiber', description: 'Self-assembling fibers for advanced armor.', category: 'material', subcategory: 'advanced', rarity: 'rare', quantity: 3, sell_value: 600, is_stackable: true }),
  makeItem({ id: 'fi21', item_id: 'm_quantum_processor', name: 'Quantum Processor', description: 'Cutting-edge computing chip.', category: 'material', subcategory: 'legendary', rarity: 'epic', quantity: 1, sell_value: 2000, is_stackable: true }),
  // SPECIAL
  makeItem({ id: 'fi22', item_id: 's_encrypted_drive', name: 'Encrypted Drive', description: 'Contains stolen corporate data.', category: 'special', subcategory: 'quest_item', rarity: 'epic', base_tech: 10, special_effect: 'data_decrypt', special_effect_value: 100, sell_value: 25000, is_tradeable: false, is_stackable: false }),
  makeItem({ id: 'fi23', item_id: 's_golden_key', name: 'Golden Key', description: 'Opens the legendary vault. One-time use.', category: 'special', subcategory: 'key', rarity: 'legendary', special_effect: 'vault_access', special_effect_value: 1, sell_value: 50000, is_tradeable: false, is_stackable: false, level_requirement: 15 }),
];

export const EQUIPMENT_SLOTS = [
  { key: 'weapon_primary', label: 'PRIMARY', icon: 'flash', category: 'weapon' },
  { key: 'weapon_secondary', label: 'SECONDARY', icon: 'flash-outline', category: 'weapon' },
  { key: 'armor_head', label: 'HEAD', icon: 'glasses', category: 'gear' },
  { key: 'armor_body', label: 'BODY', icon: 'shield', category: 'gear' },
  { key: 'armor_legs', label: 'LEGS', icon: 'walk', category: 'gear' },
  { key: 'vehicle', label: 'VEHICLE', icon: 'car-sport', category: 'vehicle' },
  { key: 'gadget_1', label: 'GADGET 1', icon: 'hardware-chip', category: 'consumable' },
  { key: 'gadget_2', label: 'GADGET 2', icon: 'hardware-chip-outline', category: 'consumable' },
];
