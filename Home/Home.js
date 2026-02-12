let recipes = [];

function fetchRecipes() {
    fetch("https://dummyjson.com/recipes")
        .then((res) => res.json())
        .then((data) => {
            recipes = data.recipes;
            localStorage.setItem("allRecipes", JSON.stringify(recipes));
            displayRecipes(recipes);
        });
}

fetchRecipes();

function displayRecipes(recipeList) {
    let output = "";
    recipeList.map((val) => {
        // Calculate dynamic price
        let price = Math.round(val.rating * 100); 
        
        output += `
        <main class="recipe-card">
            <div class="image-wrapper">
                <img src="${val.image}" alt="${val.name}"/>
            </div>
            <div id="content">
                <h3>${val.name}</h3>
                <div class="row-top">
                    <span class="rating">⭐ ${val.rating}</span>
                    <span class="price" style="color: #ff4757; font-weight: bold;">₹${price}</span>
                </div>
                <div class="row-bottom">
                    <span class="cuisine">${val.cuisine}</span>
                    <button class="view-btn" onclick="viewRecipe(${val.id})">View Recipe</button>
                </div>
            </div>
        </main>`;
    });
    document.getElementById("recipeContainer").innerHTML = output;
}

document.getElementById("searchbar").addEventListener("input", (e) => {
    let term = e.target.value.toLowerCase();
    let filtered = recipes.filter(r => 
        r.name.toLowerCase().includes(term) || 
        r.cuisine.toLowerCase().includes(term)
    );
    displayRecipes(filtered);
});

function viewRecipe(id) {
    localStorage.setItem("selectedRecipeId", id);
    window.location.href = "../Details/viewDetails.html";
}