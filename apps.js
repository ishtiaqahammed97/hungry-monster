
const listOfFood = document.getElementById('foodItems');
const foodPanda = document.getElementById('foodPanda')


const getInputValue = foodName => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            foodItems(data.meals);
        })
};

const foodItems = foods => {
    console.log(foods);

    const displayDetails = idMeals => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeals}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => {
                yammiFood(data.meals[0]);
            });
    };


    const yammiFood = food => {
        const foodItemsDiv = foodPanda
        foodItemsDiv.innerHTML = `
        <img src="${food.strMealThumb}">
        <h2>${food.strMeal}</h2>
        <h3 >Ingredients</h3>
        <ul class="mb-0">
            <li> </i> ${food.strIngredient1}</li>
            <li> </i> ${food.strIngredient2}</li>
            <li> </i> ${food.strIngredient3}</li>
            <li> </i> ${food.strIngredient4}</li>
            <li> </i> ${food.strIngredient5}</li>
            <li> </i> ${food.strIngredient6}</li>
            <li> </i> ${food.strIngredient7}</li>
            <li> </i> ${food.strIngredient8}</li>
            <li> </i> ${food.strIngredient9}</li>
            <li> </i> ${food.strIngredient10}</li>
        </ul>
       `

    }
};