fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
.then(res=> res.json())
.then(data => displayMealInfo(data));


const displayMealInfo = mealinfo=>{
    console.log(mealinfo);
}