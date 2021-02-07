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
        <img src="${mealsInfo.strMealThumb}" width="200px">
        <h1>${mealsInfo.strMeal}</h1>
    `
}