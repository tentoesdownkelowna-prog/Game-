// ==================== IMAGES ====================
export const IMAGES = {
  splash: 'https://d64gsuwffb70l.cloudfront.net/69d16228bbbcbc271ecdeaa3_1775331664815_1129d1ce.jpg',
  minimap: 'https://d64gsuwffb70l.cloudfront.net/69d16228bbbcbc271ecdeaa3_1775331796574_2608f8d0.jpg',
  safehouse: 'https://d64gsuwffb70l.cloudfront.net/69d16228bbbcbc271ecdeaa3_1775331852709_c3918f2a.png',
  classes: {
    hacker: 'https://d64gsuwffb70l.cloudfront.net/69d16228bbbcbc271ecdeaa3_1775331683384_7b8146e4.jpg',
    racer: 'https://d64gsuwffb70l.cloudfront.net/69d16228bbbcbc271ecdeaa3_1775331683716_f19d9a65.jpg',
    enforcer: 'https://d64gsuwffb70l.cloudfront.net/69d16228bbbcbc271ecdeaa3_1775331685676_ddae6394.jpg',
    grifter: 'https://d64gsuwffb70l.cloudfront.net/69d16228bbbcbc271ecdeaa3_1775331713566_6495337c.png',
    ghost: 'https://d64gsuwffb70l.cloudfront.net/69d16228bbbcbc271ecdeaa3_1775331688350_4e27231e.jpg',
  },
  weapons: [
    'https://d64gsuwffb70l.cloudfront.net/69d16228bbbcbc271ecdeaa3_1775331746464_c9d5d5ac.png',
    'https://d64gsuwffb70l.cloudfront.net/69d16228bbbcbc271ecdeaa3_1775331740112_7e508ca1.jpg',
    'https://d64gsuwffb70l.cloudfront.net/69d16228bbbcbc271ecdeaa3_1775331751065_52cb72c4.png',
    'https://d64gsuwffb70l.cloudfront.net/69d16228bbbcbc271ecdeaa3_1775331752597_b36f54e0.png',
    'https://d64gsuwffb70l.cloudfront.net/69d16228bbbcbc271ecdeaa3_1775331740134_c324dbbf.jpg',
    'https://d64gsuwffb70l.cloudfront.net/69d16228bbbcbc271ecdeaa3_1775331742383_550ef7a6.jpg',
  ],
  vehicles: [
    'https://d64gsuwffb70l.cloudfront.net/69d16228bbbcbc271ecdeaa3_1775331779357_3ceb0c20.png',
    'https://d64gsuwffb70l.cloudfront.net/69d16228bbbcbc271ecdeaa3_1775331774114_8b481c98.jpg',
    'https://d64gsuwffb70l.cloudfront.net/69d16228bbbcbc271ecdeaa3_1775331774437_2f52226c.jpg',
    'https://d64gsuwffb70l.cloudfront.net/69d16228bbbcbc271ecdeaa3_1775331775059_416bcd77.jpg',
  ],
  gear: [
    'https://d64gsuwffb70l.cloudfront.net/69d16228bbbcbc271ecdeaa3_1775331880757_2737d6b3.png',
    'https://d64gsuwffb70l.cloudfront.net/69d16228bbbcbc271ecdeaa3_1775331871634_42ef0e65.jpg',
    'https://d64gsuwffb70l.cloudfront.net/69d16228bbbcbc271ecdeaa3_1775331886254_404b7d65.png',
    'https://d64gsuwffb70l.cloudfront.net/69d16228bbbcbc271ecdeaa3_1775331871937_501b1db1.jpg',
  ],
};

// ==================== COLORS ====================
export const COLORS = {
  bg: '#0A0A0F',
  bgCard: '#12121A',
  bgCardLight: '#1A1A2E',
  bgCardHover: '#222238',
  neonGreen: '#00FF88',
  neonPurple: '#B44AFF',
  neonOrange: '#FF6B35',
  neonBlue: '#00D4FF',
  neonRed: '#FF3366',
  neonYellow: '#FFD700',
  textPrimary: '#FFFFFF',
  textSecondary: '#8888AA',
  textMuted: '#555577',
  border: '#2A2A3E',
  borderLight: '#3A3A5E',
  healthGreen: '#00FF88',
  healthRed: '#FF3366',
  armorBlue: '#00D4FF',
  wantedStar: '#FFD700',
};

// ==================== CHARACTER CLASSES ====================
export interface CharacterClass {
  id: string;
  name: string;
  image: string;
  description: string;
  stats: { attack: number; defense: number; speed: number; stealth: number; tech: number };
  skills: string[];
}

export const CHARACTER_CLASSES: CharacterClass[] = [
  {
    id: 'hacker',
    name: 'Hacker',
    image: IMAGES.classes.hacker,
    description: 'Master of digital warfare. Hack security systems, disable cameras, and drain enemy accounts.',
    stats: { attack: 3, defense: 2, speed: 3, stealth: 4, tech: 8 },
    skills: ['System Breach', 'Data Siphon', 'EMP Blast', 'Ghost Protocol', 'Neural Override'],
  },
  {
    id: 'racer',
    name: 'Street Racer',
    image: IMAGES.classes.racer,
    description: 'Speed demon of the streets. Outrun anyone, master vehicle combat, and dominate chase missions.',
    stats: { attack: 4, defense: 3, speed: 8, stealth: 2, tech: 3 },
    skills: ['Nitro Boost', 'Drift Master', 'Road Rage', 'Escape Artist', 'Turbo Charge'],
  },
  {
    id: 'enforcer',
    name: 'Enforcer',
    image: IMAGES.classes.enforcer,
    description: 'Heavy hitter and tank. Maximum firepower and armor. Break through any defense.',
    stats: { attack: 8, defense: 7, speed: 2, stealth: 1, tech: 2 },
    skills: ['Heavy Blow', 'Iron Skin', 'Suppressive Fire', 'Berserker', 'Fortify'],
  },
  {
    id: 'grifter',
    name: 'Grifter',
    image: IMAGES.classes.grifter,
    description: 'Master manipulator and con artist. Talk your way in, charm your way out. Best prices at shops.',
    stats: { attack: 3, defense: 3, speed: 4, stealth: 5, tech: 5 },
    skills: ['Silver Tongue', 'Disguise', 'Counterfeit', 'Blackmail', 'Double Deal'],
  },
  {
    id: 'ghost',
    name: 'Ghost',
    image: IMAGES.classes.ghost,
    description: 'Silent assassin. Invisible to radar, deadly up close. Perfect for stealth missions.',
    stats: { attack: 6, defense: 2, speed: 5, stealth: 8, tech: 3 },
    skills: ['Shadow Step', 'Silent Kill', 'Vanish', 'Smoke Bomb', 'Backstab'],
  },
];

// ==================== WEAPONS ====================
export interface ShopItem {
  id: string;
  name: string;
  image: string;
  category: 'weapon' | 'vehicle' | 'gear' | 'upgrade';
  description: string;
  priceStacks: number;
  priceChips?: number;
  damage?: number;
  defense?: number;
  speed?: number;
  rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
  level: number;
}

export const SHOP_ITEMS: ShopItem[] = [
  // Weapons
  { id: 'w1', name: 'Neon Striker', image: IMAGES.weapons[0], category: 'weapon', description: 'Compact sidearm with neon tracer rounds', priceStacks: 2500, damage: 15, rarity: 'common', level: 1 },
  { id: 'w2', name: 'Phantom SMG', image: IMAGES.weapons[1], category: 'weapon', description: 'Silenced submachine gun for close quarters', priceStacks: 5000, damage: 25, rarity: 'uncommon', level: 3 },
  { id: 'w3', name: 'Volt Rifle', image: IMAGES.weapons[2], category: 'weapon', description: 'Electromagnetic assault rifle with EMP rounds', priceStacks: 12000, damage: 40, rarity: 'rare', level: 5 },
  { id: 'w4', name: 'Havoc Shotgun', image: IMAGES.weapons[3], category: 'weapon', description: 'Devastating close-range plasma shotgun', priceStacks: 18000, damage: 55, rarity: 'rare', level: 8 },
  { id: 'w5', name: 'Spectre Sniper', image: IMAGES.weapons[4], category: 'weapon', description: 'Long-range precision rifle with thermal scope', priceStacks: 30000, damage: 75, rarity: 'epic', level: 12 },
  { id: 'w6', name: 'Oblivion Launcher', image: IMAGES.weapons[5], category: 'weapon', description: 'Legendary rocket launcher. Obliterates everything.', priceStacks: 75000, priceChips: 500, damage: 100, rarity: 'legendary', level: 20 },
  // Vehicles
  { id: 'v1', name: 'Shadow Runner', image: IMAGES.vehicles[0], category: 'vehicle', description: 'Stealth sports car with cloaking tech', priceStacks: 15000, speed: 7, rarity: 'uncommon', level: 2 },
  { id: 'v2', name: 'Venom GT', image: IMAGES.vehicles[1], category: 'vehicle', description: 'Supercar with nitro injection system', priceStacks: 35000, speed: 9, rarity: 'rare', level: 6 },
  { id: 'v3', name: 'Wraith Bike', image: IMAGES.vehicles[2], category: 'vehicle', description: 'Cyberpunk motorcycle with EMP shielding', priceStacks: 20000, speed: 8, rarity: 'uncommon', level: 4 },
  { id: 'v4', name: 'Titan APC', image: IMAGES.vehicles[3], category: 'vehicle', description: 'Armored personnel carrier. Unstoppable.', priceStacks: 100000, priceChips: 800, speed: 5, defense: 50, rarity: 'legendary', level: 15 },
  // Gear
  { id: 'g1', name: 'Kevlar Vest', image: IMAGES.gear[0], category: 'gear', description: 'Standard ballistic protection', priceStacks: 3000, defense: 20, rarity: 'common', level: 1 },
  { id: 'g2', name: 'Nano Armor', image: IMAGES.gear[1], category: 'gear', description: 'Self-repairing nanotech body armor', priceStacks: 15000, defense: 40, rarity: 'rare', level: 7 },
  { id: 'g3', name: 'Stealth Suit', image: IMAGES.gear[2], category: 'gear', description: 'Active camouflage suit for covert ops', priceStacks: 25000, defense: 30, rarity: 'epic', level: 10 },
  { id: 'g4', name: 'Exo Frame', image: IMAGES.gear[3], category: 'gear', description: 'Powered exoskeleton. Maximum protection.', priceStacks: 60000, priceChips: 400, defense: 60, rarity: 'legendary', level: 18 },
];

// ==================== MISSIONS ====================
export interface Mission {
  id: string;
  name: string;
  type: 'story' | 'side' | 'timed' | 'territory' | 'heist';
  description: string;
  difficulty: 1 | 2 | 3 | 4 | 5;
  rewardStacks: number;
  rewardXP: number;
  rewardItem?: string;
  timeLimit?: number; // minutes
  minLevel: number;
  status: 'available' | 'active' | 'completed' | 'failed';
}

export const MISSIONS: Mission[] = [
  { id: 'm1', name: 'First Blood', type: 'story', description: 'Your first job. Meet the contact at the downtown parking garage and prove yourself.', difficulty: 1, rewardStacks: 1000, rewardXP: 200, minLevel: 1, status: 'available' },
  { id: 'm2', name: 'Data Heist', type: 'heist', description: 'Infiltrate the corporate server farm and extract the encrypted files before security arrives.', difficulty: 2, rewardStacks: 3000, rewardXP: 500, rewardItem: 'Encrypted Drive', minLevel: 2, status: 'available' },
  { id: 'm3', name: 'Street Race: Neon Mile', type: 'side', description: 'Win the underground street race through the neon district. 3 laps, no rules.', difficulty: 2, rewardStacks: 2500, rewardXP: 350, minLevel: 2, status: 'available' },
  { id: 'm4', name: 'Package Run', type: 'timed', description: 'Deliver the package across town in under 10 minutes. No questions asked.', difficulty: 1, rewardStacks: 1500, rewardXP: 250, timeLimit: 10, minLevel: 1, status: 'available' },
  { id: 'm5', name: 'Turf War: Downtown', type: 'territory', description: 'Claim downtown territory for your crew. Eliminate rival gang members and hold the zone.', difficulty: 3, rewardStacks: 5000, rewardXP: 800, minLevel: 5, status: 'available' },
  { id: 'm6', name: 'The Vault Job', type: 'heist', description: 'The biggest score in the city. Crack the vault at First National. You\'ll need a full crew.', difficulty: 5, rewardStacks: 50000, rewardXP: 5000, rewardItem: 'Golden Key', minLevel: 15, status: 'available' },
  { id: 'm7', name: 'Ghost Protocol', type: 'story', description: 'A mysterious client needs you to erase someone from every database in the city. No traces.', difficulty: 3, rewardStacks: 8000, rewardXP: 1200, minLevel: 8, status: 'available' },
  { id: 'm8', name: 'Escort: VIP Transport', type: 'side', description: 'Protect the VIP as they travel across hostile territory. Keep them alive at all costs.', difficulty: 3, rewardStacks: 4000, rewardXP: 600, minLevel: 5, status: 'available' },
  { id: 'm9', name: 'Speed Demon', type: 'timed', description: 'Reach 5 checkpoints across the city in 15 minutes. The clock is ticking.', difficulty: 2, rewardStacks: 2000, rewardXP: 400, timeLimit: 15, minLevel: 3, status: 'available' },
  { id: 'm10', name: 'Blackout', type: 'story', description: 'Hack the city power grid to create a blackout. Use the chaos to hit three targets simultaneously.', difficulty: 4, rewardStacks: 15000, rewardXP: 2000, rewardItem: 'EMP Device', minLevel: 10, status: 'available' },
  { id: 'm11', name: 'Bounty: Razor', type: 'side', description: 'Track down the notorious hacker known as Razor. Last seen in the industrial district.', difficulty: 4, rewardStacks: 10000, rewardXP: 1500, minLevel: 8, status: 'available' },
  { id: 'm12', name: 'Turf War: Docks', type: 'territory', description: 'The docks are contested territory. Seize control of the shipping lanes for your crew.', difficulty: 4, rewardStacks: 8000, rewardXP: 1200, minLevel: 10, status: 'available' },
];

// ==================== CHIP PACKAGES ====================
export interface ChipPackage {
  id: string;
  name: string;
  chips: number;
  priceUSD: number;
  priceCents: number;
  bonus?: string;
  popular?: boolean;
  stripePriceId: string;
}

export const CHIP_PACKAGES: ChipPackage[] = [
  { id: 'cp1', name: 'Starter Pack', chips: 500, priceUSD: 4.99, priceCents: 499, stripePriceId: 'price_1TIa8ABUjtQEGVpXnbEnKxBl' },
  { id: 'cp2', name: 'Street Pack', chips: 1200, priceUSD: 9.99, priceCents: 999, bonus: '+200 bonus', popular: true, stripePriceId: 'price_1TIa8ABUjtQEGVpX1Fyg11aM' },
  { id: 'cp3', name: 'Kingpin Bundle', chips: 5000, priceUSD: 34.99, priceCents: 3499, bonus: '+1000 bonus', stripePriceId: 'price_1TIa8ABUjtQEGVpXUTXtgtr7' },
];

// ==================== NEARBY PLAYERS (SIMULATED) ====================
export interface NearbyPlayer {
  id: string;
  username: string;
  level: number;
  characterClass: string;
  crewName?: string;
  wantedLevel: number;
  distance: number; // meters
  direction: number; // degrees
  passiveMode: boolean;
}

export const NEARBY_PLAYERS: NearbyPlayer[] = [
  { id: 'np1', username: 'ShadowByte', level: 12, characterClass: 'Hacker', crewName: 'Digital Ghosts', wantedLevel: 0, distance: 45, direction: 30, passiveMode: false },
  { id: 'np2', username: 'NitroKing', level: 8, characterClass: 'Street Racer', wantedLevel: 2, distance: 120, direction: 150, passiveMode: false },
  { id: 'np3', username: 'IronFist', level: 15, characterClass: 'Enforcer', crewName: 'Steel Legion', wantedLevel: 0, distance: 200, direction: 270, passiveMode: true },
  { id: 'np4', username: 'Mirage', level: 6, characterClass: 'Grifter', wantedLevel: 1, distance: 80, direction: 90, passiveMode: false },
  { id: 'np5', username: 'Phantom', level: 20, characterClass: 'Ghost', crewName: 'Night Stalkers', wantedLevel: 3, distance: 300, direction: 210, passiveMode: false },
];

// ==================== CREW DATA ====================
export interface CrewMember {
  id: string;
  username: string;
  level: number;
  characterClass: string;
  role: 'leader' | 'officer' | 'member';
  online: boolean;
  lastActive: string;
}

export const CREW_MEMBERS: CrewMember[] = [
  { id: 'cm1', username: 'You', level: 10, characterClass: 'Hacker', role: 'leader', online: true, lastActive: 'Now' },
  { id: 'cm2', username: 'BladeRunner', level: 12, characterClass: 'Ghost', role: 'officer', online: true, lastActive: 'Now' },
  { id: 'cm3', username: 'CyberPunk77', level: 8, characterClass: 'Enforcer', role: 'member', online: false, lastActive: '2h ago' },
  { id: 'cm4', username: 'NeonViper', level: 11, characterClass: 'Street Racer', role: 'member', online: true, lastActive: 'Now' },
  { id: 'cm5', username: 'GlitchQueen', level: 9, characterClass: 'Grifter', role: 'member', online: false, lastActive: '5h ago' },
];

// ==================== RARITY COLORS ====================
export const RARITY_COLORS: Record<string, string> = {
  common: '#8888AA',
  uncommon: '#00FF88',
  rare: '#00D4FF',
  epic: '#B44AFF',
  legendary: '#FFD700',
};

// ==================== HELPER FUNCTIONS ====================
export function getRarityColor(rarity: string): string {
  return RARITY_COLORS[rarity] || COLORS.textSecondary;
}

export function formatNumber(num: number): string {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
  if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
  return num.toString();
}

export function getDifficultyStars(difficulty: number): string {
  return Array(difficulty).fill('\u2605').join('');
}

export function getXPForLevel(level: number): number {
  return Math.floor(100 * Math.pow(1.5, level - 1));
}
