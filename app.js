document.getElementById("SearchButton").addEventListener("click", function () {
    inputValue = document.getElementById("searchInputArea").value;
    kickValue(inputValue);
})
function kickValue(receiveValue){
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
        <div class="imgDiv">
            <img src="${Allmeals.strMealThumb}" ></img>
        </div>    
        <div class="titleDiv">
            <h3>${Allmeals.strMeal}</h3>
        </div>
            
        `
        mealDiv.innerHTML = mealsInfo;

        mealsDiv.appendChild(mealDiv);

    }
}
}







