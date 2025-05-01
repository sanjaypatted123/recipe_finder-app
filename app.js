const apikey='f1624b52d6f04943872da438a4964587';    
//just accessing all html elements for dom actions
const button=document.getElementById('search-btn');  
const input=document.getElementById('ing-input');
const result=document.getElementById('results');
//adding a event liostener for click button
button.addEventListener('click',function () {
    const ingredient=input.value;

    if (ingredient===''){
        alert('please enter an ingredient');
        return;
    }
    const url='https://api.spoonacular.com/recipes/findByIngredients?ingredients=' + ingredient + '&number=1&apiKey=' + apikey;
    fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        if(data.length===0){
            alert('ingredient is not valid or no recipe');
            result.innerHTML='No recipe found';
            return;
        }
        const recipe =data[0];
        result.innerHTML = `
        <h3>${recipe.title}</h3>
        <img src="${recipe.image}" alt="${recipe.title}" width="250">
    `;
    })
    .catch(function () {
        result.innerHTML='Something went wrong.please try again';
    });
    
});

