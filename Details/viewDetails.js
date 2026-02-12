document.addEventListener("DOMContentLoaded", () => {
    let recipeDetails = document.getElementById("recipeDetails");
    let allRecipes = JSON.parse(localStorage.getItem("allRecipes"));
    let recipeId = localStorage.getItem("selectedRecipeId");

    if (allRecipes && recipeId) {
        let selectedRecipe = allRecipes.find((v) => v.id == recipeId);

        if (selectedRecipe) {
            // Mapping ingredients to list items
            let ingredientsHtml = selectedRecipe.ingredients.map(ing => `<li>${ing}</li>`).join('');

            // Mapping instructions to list items
            let instructionsHtml = selectedRecipe.instructions.map(step => `<li>${step}</li>`).join('');

            // Mapping reviews (if the API provides them, otherwise shows star rating)
            let reviewsHtml = selectedRecipe.reviewCount ? `
                <div class="review-item">
                    <div class="stars">🧡 ${selectedRecipe.rating} / 5</div>
                    <p>Based on ${selectedRecipe.reviewCount} customer reviews.</p>
                </div>
            ` : `<p>No reviews yet for this recipe.</p>`;

            let calculatedPrice = Math.round(selectedRecipe.rating * 100);

            recipeDetails.innerHTML = `
    <div class="details-container">
        <div class="product-image">
            <img src="${selectedRecipe.image}" alt="${selectedRecipe.name}" />
        </div>
        
        <div class="product-info">
            <h1>${selectedRecipe.name}</h1>
            <p><b>Cuisine:</b> ${selectedRecipe.cuisine}</p>
            <div class="ingredients-section">
                <h3>Ingredients:</h3>
                <ul>${ingredientsHtml}</ul>
            </div>
            
            <h2 class="price-text" style="font-size: 2rem; color: #ff4757;">Price: ₹${calculatedPrice}</h2>
            
            <div class="action-buttons">
                <button class="btn-blue" id="addToOrders">Add to My List</button>
                <button class="btn-red" onclick="window.location.href='../Home/Home.html'">Back to Menu</button>
            </div>
        </div>
    </div>
    `;

            document.getElementById("addToOrders").addEventListener("click", () => {
                addToOrders(selectedRecipe);
            });
        } else {
            recipeDetails.innerHTML = `<p>Recipe Not Available</p>`;
        }
    } else {
        recipeDetails.innerHTML = `<p>Recipe Not Found</p>`;
    }
});

function addToOrders(recipe) {
    let orders = JSON.parse(localStorage.getItem("recipeOrders")) || [];
    orders.push(recipe);
    localStorage.setItem("recipeOrders", JSON.stringify(orders));
    alert("Recipe added to your list successfully!");
}