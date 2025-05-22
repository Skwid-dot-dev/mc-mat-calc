const RECIPES = {
  equipment: {
    "Diamond Pickaxe": { output: 1, ingredients: { Stick: 2, Diamond: 3 } },
    "Enchanting Table": { output: 1, ingredients: { Obsidian: 4, Diamond: 2, Book: 1 } },
    "Iron Sword": { output: 1, ingredients: { Stick: 1, "Iron Ingot": 2 } },
    "Shield": { output: 1, ingredients: { "Iron Ingot": 1, "Wood Plank": 6 } },
    "Golden Axe": { output: 1, ingredients: { Stick: 2, "Gold Ingot": 3 } },
    "Diamond Helmet": { output: 1, ingredients: { Diamond: 5 } },
    "Iron Chestplate": { output: 1, ingredients: { "Iron Ingot": 8 } },
    "Bow": { output: 1, ingredients: { Stick: 3, String: 3 } },
    "Fishing Rod": { output: 1, ingredients: { Stick: 3, String: 2 } },
    "Netherite Sword": { output: 1, ingredients: { "Diamond Sword": 1, "Netherite Ingot": 1 } },
    "Turtle Shell": { output: 1, ingredients: { Scute: 5 } },
    "Shears": { output: 1, ingredients: { "Iron Ingot": 2 } },
    "Crossbow": { output: 1, ingredients: { Stick: 3, String: 2, "Iron Ingot": 1, "Tripwire Hook": 1 } },
    "Trident (Uncraftable)": { output: 1, ingredients: {} }, // for info purposes
    "Iron Helmet": { output: 1, ingredients: { "Iron Ingot": 5 } },
    "Diamond Chestplate": { output: 1, ingredients: { Diamond: 8 } },
    "Golden Helmet": { output: 1, ingredients: { "Gold Ingot": 5 } },
    "Chainmail Boots": { output: 1, ingredients: { "Iron Ingot": 4 } }, // Note: chainmail not craftable normally, but for reference
    "Leather Boots": { output: 1, ingredients: { Leather: 4 } },



  },
  
  food: {
    "Enchanted Golden Apple": { output: 1, ingredients: { Apple: 1, "Gold Block": 8 } },
    "Cake": { output: 1, ingredients: { Milk: 3, Sugar: 2, Egg: 1, Wheat: 3 } },
    "Pumpkin Pie": { output: 1, ingredients: { Pumpkin: 1, Sugar: 1, Egg: 1 } },
    "Bread": { output: 1, ingredients: { Wheat: 3 } },
    "Stew (Mushroom)": { output: 1, ingredients: { "Red Mushroom": 1, "Brown Mushroom": 1, Bowl: 1 } },
    "Rabbit Stew": { output: 1, ingredients: { "Cooked Rabbit": 1, Carrot: 1, "Baked Potato": 1, "Red Mushroom": 1, Bowl: 1 } },
    "Golden Carrot": { output: 1, ingredients: { Carrot: 1, "Gold Nugget": 8 } },
    "Beetroot Soup": { output: 1, ingredients: { Beetroot: 6, Bowl: 1 } },
    "Suspicious Stew": { output: 1, ingredients: { "Red Mushroom": 1, "Brown Mushroom": 1, Flower: 1, Bowl: 1 } },
    "Cooked Porkchop": { output: 1, ingredients: { "Raw Porkchop": 1 } }, // Smelting-based
    "Golden Apple": { output: 1, ingredients: { Apple: 1, "Gold Ingot": 8 } },
    "Cooked Beef (Steak)": { output: 1, ingredients: { "Raw Beef": 1 } }, // Smelting
    "Cooked Chicken": { output: 1, ingredients: { "Raw Chicken": 1 } }, // Smelting
    "Cooked Mutton": { output: 1, ingredients: { "Raw Mutton": 1 } }, // Smelting
    "Cooked Salmon": { output: 1, ingredients: { "Raw Salmon": 1 } }, // Smelting
    "Cooked Cod": { output: 1, ingredients: { "Raw Cod": 1 } }, // Smelting

  },
  
  redstone: {
    "Observer": { output: 1, ingredients: { Cobblestone: 6, Redstone: 2, Quartz: 1 } },
    "Comparator": { output: 1, ingredients: { Redstone: 3, Quartz: 1, Torch: 3 } },
    "Piston": { output: 1, ingredients: { Cobblestone: 4, Iron: 1, Redstone: 1, "Wood Plank": 3 } },
    "Powered Rail": { output: 6, ingredients: { "Gold Ingot": 6, Stick: 1, Redstone: 1 } },
    "Hopper": { output: 1, ingredients: { "Iron Ingot": 5, Chest: 1 } },
    "Redstone Repeater": { output: 1, ingredients: { Redstone: 2, Torch: 2, Stone: 3 } },
    "Dispenser": { output: 1, ingredients: { Cobblestone: 7, Bow: 1, Redstone: 1 } },
    "Dropper": { output: 1, ingredients: { Cobblestone: 7, Redstone: 1 } },
    "Note Block": { output: 1, ingredients: { "Wood Plank": 8, Redstone: 1 } },
    "Tripwire Hook": { output: 2, ingredients: { Stick: 1, "Iron Ingot": 1, "Wood Plank": 1 } },
    "Lever": { output: 1, ingredients: { Stick: 1, Cobblestone: 1 } },
    "Target Block": { output: 1, ingredients: { Hay: 1, Redstone: 4 } },
    "Bell": { output: 1, ingredients: { "Gold Ingot": 3, "Wood Plank": 1 } },
    "Daylight Sensor": { output: 1, ingredients: { Glass: 3, "Nether Quartz": 3, "Wood Slab": 3 } },
    "Sticky Piston": { output: 1, ingredients: { Piston: 1, Slimeball: 1 } },
    "Weighted Pressure Plate (Light)": { output: 1, ingredients: { "Gold Ingot": 2 } },
    "Weighted Pressure Plate (Heavy)": { output: 1, ingredients: { "Iron Ingot": 2 } },



  },

  potions: {
      "Potion of Healing (Instant Health)": { output: 1, ingredients: { "Water Bottle": 1, "Nether Wart": 1, "Glistering Melon": 1 } },
      "Potion of Regeneration": { output: 1, ingredients: { "Water Bottle": 1, "Nether Wart": 1, "Ghast Tear": 1 } },
      "Potion of Strength": { output: 1, ingredients: { "Water Bottle": 1, "Nether Wart": 1, "Blaze Powder": 1 } },
      "Potion of Swiftness": { output: 1, ingredients: { "Water Bottle": 1, "Nether Wart": 1, Sugar: 1 } },
      "Potion of Fire Resistance": { output: 1, ingredients: { "Water Bottle": 1, "Nether Wart": 1, "Magma Cream": 1 } },
      "Potion of Night Vision": { output: 1, ingredients: { "Water Bottle": 1, "Nether Wart": 1, "Golden Carrot": 1 } },
      "Potion of Invisibility": { output: 1, ingredients: { "Potion of Night Vision": 1, "Fermented Spider Eye": 1 } },
      "Potion of Poison": { output: 1, ingredients: { "Water Bottle": 1, "Nether Wart": 1, "Spider Eye": 1 } },
      "Potion of Harming (Instant Damage)": { output: 1, ingredients: { "Potion of Poison": 1, "Fermented Spider Eye": 1 } },
},

  dyes: {
      "Red Dye": { output: 1, ingredients: { "Poppy": 1 } },
    "Blue Dye": { output: 1, ingredients: { "Cornflower": 1 } },
    "Yellow Dye": { output: 1, ingredients: { "Dandelion": 1 } },
    "Green Dye": { output: 1, ingredients: { "Cactus": 1 } },
    "Black Dye": { output: 1, ingredients: { "Ink Sac": 1 } },
    "White Dye": { output: 1, ingredients: { "Bone Meal": 1 } },
    "Purple Dye": { output: 1, ingredients: { "Red Dye": 1, "Blue Dye": 1 } },
    "Orange Dye": { output: 1, ingredients: { "Red Dye": 1, "Yellow Dye": 1 } },
    "Light Blue Dye": { output: 1, ingredients: { "Blue Dye": 1, "White Dye": 1 } },
    "Pink Dye": { output: 1, ingredients: { "Red Dye": 1, "White Dye": 1 } },
    "Lime Dye": { output: 1, ingredients: { "Green Dye": 1, "White Dye": 1 } },
    "Magenta Dye": { output: 1, ingredients: { "Purple Dye": 1, "Pink Dye": 1 } },
    "Light Gray Dye": { output: 1, ingredients: { "White Dye": 1, "Black Dye": 1 } },
    "Gray Dye": { output: 1, ingredients: { "Black Dye": 1, "White Dye": 1 } },
    "Cyan Dye": { output: 1, ingredients: { "Green Dye": 1, "Blue Dye": 1 } },
    "Brown Dye": { output: 1, ingredients: { "Cocoa Beans": 1 } },

  },
  mobs: {
      "Creeper": { output: 1, ingredients: { "Gunpowder": 0.5 } },
      "Skeleton": { output: 1, ingredients: { "Bone": 1, "Arrow": 1 } },
      "Zombie": { output: 1, ingredients: { "Rotten Flesh": 1 } },
      "Spider": { output: 1, ingredients: { "String": 1, "Spider Eye": 0.33 } },
      "Enderman": { output: 1, ingredients: { "Ender Pearl": 0.5 } },
      "Slime (Large)": { output: 1, ingredients: { "Slimeball": 0.5 } },
      "Witch": { output: 1, ingredients: { "Redstone": 0.25, "Glowstone Dust": 0.25, "Sugar": 0.25, "Gunpowder": 0.25, "Glass Bottle": 0.25, "Spider Eye": 0.25, "Stick": 0.25 } },
      "Wither Skeleton": { output: 1, ingredients: { "Coal": 0.33, "Bone": 1, "Stone Sword": 0.1, "Wither Skeleton Skull": 0.025 } },
      "Blaze": { output: 1, ingredients: { "Blaze Rod": 1 } },
      "Ender Dragon": { output: 1, ingredients: { "Dragon Egg": 1, "Dragon Breath": 0 } },
      "Piglin": { output: 1, ingredients: { "Gold Nugget": 1, "Rotten Flesh": 1 } },
      "Iron Golem": { output: 1, ingredients: { "Iron Ingot": 3, "Poppy": 3 } },
      "Guardian": { output: 1, ingredients: { "Prismarine Shard": 2, "Raw Cod": 1 } },
      "Shulker": { output: 1, ingredients: { "Shulker Shell": 1 } },
  },

 
  misc: {
    "Book": { output: 1, ingredients: { Leather: 1, Paper: 3 } },
    "Beacon": { output: 1, ingredients: { Glass: 5, Obsidian: 3, "Nether Star": 1 } },
    "Chest": { output: 1, ingredients: { "Wood Plank": 8 } },
    "Torch": { output: 4, ingredients: { Stick: 1, Coal: 1 } },
    "Item Frame": { output: 1, ingredients: { Stick: 8, Leather: 1 } },
    "Painting": { output: 1, ingredients: { Stick: 8, Wool: 1 } },
    "Paper": { output: 3, ingredients: { Sugarcane: 3 } },
    "Map (Empty)": { output: 1, ingredients: { Paper: 8, Compass: 1 } },
    "Compass": { output: 1, ingredients: { "Iron Ingot": 4, Redstone: 1 } },
    "Sign": { output: 3, ingredients: { "Wood Plank": 6, Stick: 1 } },
    "Ladder": { output: 3, ingredients: { Stick: 7 } },
    "Armor Stand": { output: 1, ingredients: { Stick: 6, "Stone Slab": 1 } },
    "Flower Pot": { output: 1, ingredients: { Brick: 3 } },
    "Barrel": { output: 1, ingredients: { Stick: 2, "Wood Plank": 6 } },
    "Cauldron": { output: 1, ingredients: { "Iron Ingot": 7 } },
    "Clock": { output: 1, ingredients: { "Gold Ingot": 4, Redstone: 1 } },
    "Enchanted Book": { output: 1, ingredients: { Book: 1 } }, // placeholder, can be enchanted in-game
    "Name Tag": { output: 1, ingredients: { Paper: 1, String: 1 } }, // not craftable in vanilla, for reference
    "Firework Rocket": { output: 3, ingredients: { Paper: 1, Gunpowder: 1 } },
  }
  
};

const getAllRecipes = () => {
  return Object.entries(RECIPES).flatMap(([category, items]) =>
    Object.entries(items).map(([name, data]) => ({ name, category, ...data }))
  );
};

const categorySelect = document.getElementById('categoryFilter');
const itemSelect = document.getElementById('itemSelect');
const quantityInput = document.getElementById('quantityInput');
const resultsList = document.getElementById('resultsList');

let allRecipes = getAllRecipes();

function populateCategorySelect() {
  categorySelect.innerHTML = `<option value="all">All</option>`;
  Object.keys(RECIPES).forEach(cat => {
    categorySelect.innerHTML += `<option value="${cat}">${capitalize(cat)}</option>`;
  });
}

function populateItemSelect() {
  const selectedCategory = categorySelect.value;
  let recipesToShow = selectedCategory === 'all'
    ? allRecipes
    : allRecipes.filter(r => r.category === selectedCategory);

  itemSelect.innerHTML = '';
  recipesToShow.forEach(recipe => {
    itemSelect.innerHTML += `<option value="${recipe.name}">${recipe.name}</option>`;
  });
  updateResults();
}

function updateResults() {
  const recipe = allRecipes.find(r => r.name === itemSelect.value);
  const quantity = parseInt(quantityInput.value) || 1;
  const result = [];

  for (const [ingredient, amount] of Object.entries(recipe.ingredients)) {
    const total = Math.ceil((amount / recipe.output) * quantity);
    result.push(`${ingredient}: ${total}`);
  }

  resultsList.innerHTML = result.map(r => `<li>${r}</li>`).join('');
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

categorySelect.addEventListener('change', populateItemSelect);
itemSelect.addEventListener('change', updateResults);
quantityInput.addEventListener('input', updateResults);

// Initialize
populateCategorySelect();
populateItemSelect();
