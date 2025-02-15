# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



`
Data in Json format: 

[
    {
        "id": 1,
        "name": "Spaghetti Carbonara",
        "description": "A classic Italian pasta dish made with eggs, cheese, pancetta, and black pepper.",
        "image": "spaghetti_carbonara.jpg",
        "ingredients": [
            "400g spaghetti",
            "150g pancetta, diced",
            "3 large eggs",
            "50g grated Pecorino Romano cheese",
            "50g grated Parmesan cheese",
            "2 cloves garlic, minced",
            "Freshly ground black pepper",
            "Salt to taste"
        ],
        "preparing_time": "20 minutes",
        "calories": 480,
        "servings": 4,
        "rating": 4.7,
        "tags": [
            "Italian",
            "Pasta",
            "Quick and Easy"
        ],
        "source": "Jamie Oliver",
        "estimated_cost": "$12"
    },
    {
        "id": 2,
        "name": "Thai Green Curry",
        "description": "A fragrant and spicy Thai curry made with green curry paste, coconut milk, chicken, and vegetables.",
        "image": "thai_green_curry.jpg",
        "ingredients": [
            "400ml coconut milk",
            "2 tablespoons green curry paste",
            "400g boneless chicken breast, sliced",
            "1 red bell pepper, sliced",
            "1 green bell pepper, sliced",
            "1 small eggplant, diced",
            "Handful of Thai basil leaves",
            "2 tablespoons fish sauce",
            "1 tablespoon brown sugar",
            "1 tablespoon vegetable oil"
        ],
        "preparing_time": "30 minutes",
        "calories": 520,
        "servings": 4,
        "rating": 4.5,
        "tags": [
            "Thai",
            "Curry",
            "Spicy"
        ],
        "source": "BBC Good Food",
        "estimated_cost": "$15"
    },
    {
        "id": 3,
        "name": "Chicken Alfredo Pasta",
        "description": "Creamy pasta with tender chicken and a rich Alfredo sauce.",
        "image": "chicken_alfredo_pasta.jpg",
        "ingredients": [
            "400g fettuccine pasta",
            "2 boneless, skinless chicken breasts, sliced",
            "3 cloves garlic, minced",
            "1 cup heavy cream",
            "1/2 cup grated Parmesan cheese",
            "2 tablespoons butter",
            "Salt and pepper to taste",
            "Fresh parsley for garnish"
        ],
        "preparing_time": "25 minutes",
        "calories": 620,
        "servings": 4,
        "rating": 4.6,
        "tags": [
            "Italian",
            "Pasta",
            "Creamy"
        ],
        "source": "Food Network",
        "estimated_cost": "$14"
    },
    {
        "id": 4,
        "name": "Vegetable Paella",
        "description": "A colorful and flavorful Spanish rice dish with assorted vegetables and saffron.",
        "image": "vegetable_paella.jpg",
        "ingredients": [
            "1 cup paella rice (such as Bomba or Arborio)",
            "2 cups vegetable broth",
            "1 onion, chopped",
            "2 cloves garlic, minced",
            "1 red bell pepper, diced",
            "1 yellow bell pepper, diced",
            "1 cup diced tomatoes",
            "1 cup frozen peas",
            "1/2 teaspoon saffron threads",
            "2 tablespoons olive oil",
            "Salt and pepper to taste",
            "Fresh parsley for garnish"
        ],
        "preparing_time": "40 minutes",
        "calories": 380,
        "servings": 4,
        "rating": 4.4,
        "tags": [
            "Spanish",
            "Rice",
            "Vegetarian"
        ],
        "source": "The Spruce Eats",
        "estimated_cost": "$10"
    },
    {
        "id": 5,
        "name": "Beef Stroganoff",
        "description": "Tender strips of beef cooked in a creamy mushroom sauce, served over egg noodles.",
        "image": "beef_stroganoff.jpg",
        "ingredients": [
            "500g beef sirloin, thinly sliced",
            "1 onion, chopped",
            "2 cloves garlic, minced",
            "200g mushrooms, sliced",
            "1 cup beef broth",
            "1 cup sour cream",
            "2 tablespoons all-purpose flour",
            "2 tablespoons vegetable oil",
            "Salt and pepper to taste",
            "Fresh parsley for garnish",
            "300g egg noodles, cooked according to package instructions"
        ],
        "preparing_time": "35 minutes",
        "calories": 540,
        "servings": 4,
        "rating": 4.8,
        "tags": [
            "Russian",
            "Beef",
            "Comfort Food"
        ],
        "source": "Taste of Home",
        "estimated_cost": "$18"
    },
    {
        "id": 6,
        "name": "Mushroom Risotto",
        "description": "Creamy and indulgent risotto made with Arborio rice, mushrooms, and Parmesan cheese.",
        "image": "mushroom_risotto.jpg",
        "ingredients": [
            "1 cup Arborio rice",
            "200g mushrooms, sliced",
            "1 onion, finely chopped",
            "2 cloves garlic, minced",
            "4 cups vegetable broth",
            "1/2 cup dry white wine",
            "1/2 cup grated Parmesan cheese",
            "2 tablespoons butter",
            "2 tablespoons olive oil",
            "Salt and pepper to taste",
            "Fresh parsley for garnish"
        ],
        "preparing_time": "40 minutes",
        "calories": 450,
        "servings": 4,
        "rating": 4.6,
        "tags": [
            "Italian",
            "Risotto",
            "Creamy"
        ],
        "source": "Simply Recipes",
        "estimated_cost": "$12"
    },
    {
        "id": 7,
        "name": "Chicken Tikka Masala",
        "description": "Tender pieces of chicken marinated in spices and served in a rich, creamy tomato sauce.",
        "image": "chicken_tikka_masala.jpg",
        "ingredients": [
            "500g boneless, skinless chicken thighs, cut into bite-sized pieces",
            "1 onion, finely chopped",
            "2 cloves garlic, minced",
            "1 tablespoon grated ginger",
            "1 cup tomato puree",
            "1/2 cup plain yogurt",
            "2 tablespoons garam masala",
            "1 tablespoon ground cumin",
            "1 tablespoon ground coriander",
            "1 teaspoon paprika",
            "1/2 teaspoon turmeric",
            "1/2 cup heavy cream",
            "2 tablespoons vegetable oil",
            "Salt and pepper to taste",
            "Fresh cilantro for garnish",
            "Cooked basmati rice for serving"
        ],
        "preparing_time": "45 minutes",
        "calories": 560,
        "servings": 4,
        "rating": 4.9,
        "tags": [
            "Indian",
            "Curry",
            "Spicy"
        ],
        "source": "BBC Food",
        "estimated_cost": "$20"
    },
    {
        "id": 8,
        "name": "Caprese Salad",
        "description": "A simple and refreshing salad made with fresh tomatoes, mozzarella cheese, basil, and balsamic glaze.",
        "image": "caprese_salad.jpg",
        "ingredients": [
            "2 large tomatoes, sliced",
            "200g fresh mozzarella cheese, sliced",
            "1/2 cup fresh basil leaves",
            "2 tablespoons balsamic glaze",
            "2 tablespoons extra virgin olive oil",
            "Salt and pepper to taste"
        ],
        "preparing_time": "10 minutes",
        "calories": 250,
        "servings": 2,
        "rating": 4.5,
        "tags": [
            "Italian",
            "Salad",
            "Fresh"
        ],
        "source": "AllRecipes",
        "estimated_cost": "$8"
    },
    {
        "id": 9,
        "name": "Beef Tacos",
        "description": "Classic Mexican tacos filled with seasoned ground beef, lettuce, cheese, and salsa.",
        "image": "beef_tacos.jpg",
        "ingredients": [
            "500g ground beef",
            "1 onion, chopped",
            "2 cloves garlic, minced",
            "1 tablespoon chili powder",
            "1 teaspoon ground cumin",
            "1/2 teaspoon paprika",
            "1/4 teaspoon cayenne pepper",
            "Salt and pepper to taste",
            "12 small corn or flour tortillas",
            "1 cup shredded lettuce",
            "1 cup shredded cheddar cheese",
            "1 cup salsa",
            "Sour cream and chopped cilantro for garnish"
        ],
        "preparing_time": "25 minutes",
        "calories": 350,
        "servings": 6,
        "rating": 4.7,
        "tags": [
            "Mexican",
            "Tacos",
            "Family-Friendly"
        ],
        "source": "Tasty",
        "estimated_cost": "$15"
    },
    {
        "id": 10,
        "name": "Homemade Pizza",
        "description": "Delicious pizza made from scratch with homemade dough and your favorite toppings.",
        "image": "meat_pizza.jpg",
        "ingredients": [
            "1 batch homemade pizza dough",
            "1/2 cup pizza sauce",
            "1 1/2 cups shredded mozzarella cheese",
            "Assorted toppings such as pepperoni, mushrooms, bell peppers, onions, olives, etc."
        ],
        "preparing_time": "30 minutes",
        "calories": 300,
        "servings": 4,
        "rating": 4.8,
        "tags": [
            "Italian",
            "Pizza",
            "Homemade"
        ],
        "source": "Sally's Baking Addiction",
        "estimated_cost": "$10"
    },
    {
        "id": 11,
        "name": "Lemon Garlic Shrimp Pasta",
        "description": "Tender shrimp cooked in a lemon garlic sauce, served over pasta.",
        "image": "lemon_garlic_shrimp_pasta.jpg",
        "ingredients": [
            "300g linguine pasta",
            "300g large shrimp, peeled and deveined",
            "3 cloves garlic, minced",
            "1/4 cup fresh lemon juice",
            "1/4 cup chicken broth",
            "2 tablespoons unsalted butter",
            "2 tablespoons olive oil",
            "1/4 cup chopped fresh parsley",
            "Salt and pepper to taste",
            "Grated Parmesan cheese for serving"
        ],
        "preparing_time": "20 minutes",
        "calories": 380,
        "servings": 4,
        "rating": 4.6,
        "tags": [
            "Seafood",
            "Pasta",
            "Quick and Easy"
        ],
        "source": "Damn Delicious",
        "estimated_cost": "$18"
    },
    {
        "id": 12,
        "name": "Vegetable Stir-Fry",
        "description": "A delicious and healthy stir-fry packed with fresh vegetables.",
        "image": "vegetable_stir_fry.jpg",
        "ingredients": [
          "2 cups broccoli florets",
          "1 red bell pepper, sliced",
          "1 yellow bell pepper, sliced",
          "1 cup sliced mushrooms",
          "1 cup snap peas",
          "3 cloves garlic, minced",
          "1 tablespoon grated ginger",
          "1/4 cup soy sauce",
          "2 tablespoons sesame oil",
          "2 tablespoons cornstarch mixed with 2 tablespoons water"
        ],
        "preparing_time": "30 minutes",
        "calories": 250,
        "servings": 4,
        "difficulty": "Intermediate",
        "rating": 4.5,
        "tags": ["Vegetarian", "Quick and Easy", "Healthy"],
        "allergens": ["Soy", "Sesame"],
        "preparation_method": "Stovetop",
        "source": "Cooking Light Magazine",
        "estimated_cost": "$10"
      },
    
    {
        "id": 13,
        "name": "Chashushuli",
        "description": "A traditional Georgian veal dish, Chashushuli features stewed meat with onions and peppers, seasoned with aromatic spices, and served on a wooden table.",
        "image": "chashushuli.jpg",
        "ingredients": [
            "500g veal, cut into cubes",
            "2 onions, sliced",
            "2 bell peppers, sliced",
            "3 tomatoes, diced",
            "3 cloves garlic, minced",
            "2 tablespoons tomato paste",
            "1 tablespoon olive oil",
            "1 teaspoon paprika",
            "1/2 teaspoon ground coriander",
            "1/2 teaspoon cayenne pepper",
            "Salt and pepper to taste",
            "Fresh cilantro for garnish",
            "Cooked rice or bread for serving"
        ],
        "preparing_time": "1 hour",
        "calories": 380,
        "servings": 4,
        "rating": 4.7,
        "tags": [
            "Georgian",
            "Veal",
            "Stew"
        ],
        "source": "Georgian Cuisine",
        "estimated_cost": "$18"
    },
    {
        "id": 14,
        "name": "Chicken Caesar Salad",
        "description": "Classic Caesar salad with grilled chicken strips.",
        "image": "chicken_caesar_salad.jpg",
        "ingredients": [
            "2 boneless, skinless chicken breasts",
            "1 head romaine lettuce, chopped",
            "1/2 cup croutons",
            "1/4 cup grated Parmesan cheese",
            "1/4 cup Caesar dressing",
            "1 tablespoon olive oil",
            "Salt and pepper to taste"
        ],
        "preparing_time": "25 minutes",
        "calories": 350,
        "servings": 2,
        "instructions": "1. Season chicken breasts with salt and pepper.\n2. Heat olive oil in a skillet over medium-high heat.\n3. Cook chicken breasts until no longer pink in the center, about 6-8 minutes per side.\n4. Let chicken rest for 5 minutes, then slice into strips.\n5. In a large bowl, combine romaine lettuce, croutons, and Parmesan cheese.\n6. Toss salad with Caesar dressing.\n7. Top salad with grilled chicken strips.\n8. Serve immediately."
    }
]

`
