function displayRecipe() {
    let recipe = document.getElementById("input").value;
    console.log(recipe);
    document.getElementById("display").innerHTML = recipe;
    document.getElementById("input").innerHTML = "";
}