const RECIPES = {
  equipment: {
    "Diamond Pickaxe": { output: 1, ingredients: { Stick: 2, Diamond: 3 } },
    "Enchanting Table": { output: 1, ingredients: { Obsidian: 4, Diamond: 2, Book: 1 } },
    "Iron Sword": { output: 1, ingredients: { Stick: 1, "Iron Ingot": 2 } },
    "Shield": { output: 1, ingredients: { "Iron Ingot": 1, "Wood Plank": 6 } },
  },
  food: {
    "Enchanted Golden Apple": { output: 1, ingredients: { Apple: 1, "Gold Block": 8 } },
    "Cake": { output: 1, ingredients: { Milk: 3, Sugar: 2, Egg: 1, Wheat: 3 } },
    "Pumpkin Pie": { output: 1, ingredients: { Pumpkin: 1, Sugar: 1, Egg: 1 } },
  },
  redstone: {
    "Observer": { output: 1, ingredients: { Cobblestone: 6, Redstone: 2, Quartz: 1 } },
    "Comparator": { output: 1, ingredients: { Redstone: 3, Quartz: 1, Torch: 3 } },
    "Piston": { output: 1, ingredients: { Cobblestone: 4, Iron: 1, Redstone: 1, "Wood Plank": 3 } },
    "Powered Rail": { output: 6, ingredients: { "Gold Ingot": 6, Stick: 1, Redstone: 1 } },
    "Hopper": { output: 1, ingredients: { "Iron Ingot": 5, Chest: 1 } },
    "Redstone Repeater": { output: 1, ingredients: { Redstone: 2, Torch: 2, Stone: 3 } },
  },
  misc: {
    "Book": { output: 1, ingredients: { Leather: 1, Paper: 3 } },
    "Beacon": { output: 1, ingredients: { Glass: 5, Obsidian: 3, "Nether Star": 1 } },
    "Chest": { output: 1, ingredients: { "Wood Plank": 8 } },
    "Torch": { output: 4, ingredients: { Stick: 1, Coal: 1 } },
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
