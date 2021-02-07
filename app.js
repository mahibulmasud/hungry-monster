document.getElementById("SearchButton").addEventListener("click", function () {
    inputValue = document.getElementById("searchInputArea").value;
    pushValue(inputValue);
})
function pushValue(receiveValue) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${receiveValue}`)
        .then(res => res.json())
        .then(data => displayMealInfo(data));

    const displayMealInfo = mealinfo => {
        const mealsDiv = document.getElementById('allMeals');


        for (let i = 0; i < mealinfo.meals.length; i++) {
            const Allmeals = mealinfo.meals[i];
            const mealDiv = document.createElement('div');
            mealDiv.className = 'mainDiv';

            const mealsInfo = `
        <a href="#" onclick="displayMealDetails('${Allmeals.idMeal}')">
        <div class="imgDiv">
        <img src="${Allmeals.strMealThumb}" ></img>
        </div>    
        <div class="titleDiv">
        <h3>${Allmeals.strMeal}</h3>
        </div>
        </a>
        `
            mealDiv.innerHTML = mealsInfo;

            mealsDiv.appendChild(mealDiv);

        }

    }
}


const displayMealDetails = mealDetails =>{
   const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealDetails}`;
   
   fetch(url)
   .then(res => res.json())
   .then(data=> renderMealInfo(data.meals[0]))

}

const renderMealInfo = mealsInfo=>{
    const MealsDiv = document.getElementById('meal-details');
    MealsDiv.innerHTML = `
    <div class="container mealDetails">
            <img src="${mealsInfo.strMealThumb}" />
            <h1>${mealsInfo.strMeal}</h1>
        <h3>Ingredients</h3>
        <ul class="IngredientUl">
             <li><span>${mealsInfo.strMeasure1} ${mealsInfo.strIngredient1}</span></li>
             <li><span>${mealsInfo.strMeasure2} ${mealsInfo.strIngredient2}</span></li>
             <li><span>${mealsInfo.strMeasure3} ${mealsInfo.strIngredient3}</span></li>
             <li><span>${mealsInfo.strMeasure4} ${mealsInfo.strIngredient4}</span></li>
             <li><span>${mealsInfo.strMeasure5} ${mealsInfo.strIngredient5}</span></li>
             <li><span>${mealsInfo.strMeasure6} ${mealsInfo.strIngredient6}</span></li>
             <li><span>${mealsInfo.strMeasure7} ${mealsInfo.strIngredient7}</span></li>
             <li><span>${mealsInfo.strMeasure8} ${mealsInfo.strIngredient8}</span></li>
             <li><span>${mealsInfo.strMeasure9} ${mealsInfo.strIngredient9}</span></li>
        </ul>
    </div>
    `
    
}