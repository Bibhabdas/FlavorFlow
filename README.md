# FlavorFlow - Restaurant Recipe Application 🍽️

FlavorFlow is a dynamic, responsive web application that allows users to browse a wide variety of recipes, view detailed cooking instructions, and manage a personalized "Saved Recipes" list. This project was transitioned from an e-commerce structure to a food-centric menu experience.

## 🚀 Features

* **User Authentication**: Secure Registration and Login system with real-time password validation.
* **Recipe Discovery**: Fetches real-time culinary data from the [DummyJSON Recipes API](https://dummyjson.com/recipes).
* **Smart Search**: Filter recipes by name or cuisine type.
* **Dynamic Pricing**: Prices are calculated dynamically based on the recipe's rating ($Rating \times 100$).
* **Detailed View**: Side-by-side layout for ingredients and cooking instructions with customer review ratings.
* **Saved Recipes (Cart)**: A specialized list to track chosen dishes with a Grand Total calculation.

## 🛠️ Built With

* **HTML5**: Semantic structure.
* **CSS3**: Custom modern UI with responsive grid layouts and interactive hover effects.
* **JavaScript (ES6+)**: Fetch API, DOM manipulation, and LocalStorage for data persistence.
* **FontAwesome**: For high-quality iconography.

## 📂 Folder Structure

```text
├── Home/
│   ├── Home.html
│   ├── Home.css
│   └── Home.js
├── registration/
│   ├── Registration.html
│   ├── Registration.js
│   ├── Login.html
│   └── login.js
│   └── Registration.css (Shared)
├── Details/
│   ├── viewDetails.html
│   ├── viewDetails.js
│   └── viewDetails.css
├── Cart/
│   ├── Cart.html
│   ├── Cart.js
│   └── Cart.css
└── README.md