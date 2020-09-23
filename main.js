/*

var pageCounter = 1;

var animalContainer = document.getElementById("animal-info");
var btn = document.getElementById("btn");

btn.addEventListener("click",function(){

    var request = new XMLHttpRequest();
request.open('GET','https://learnwebcode.github.io/json-example/animals-'+ pageCounter +'.json')
request.onload = function(){
 var ourData=JSON.parse(request.responseText);
 renderHTML(ourData);
};
request.send();
pageCounter++;

if (pageCounter>3)
{
    btn.classList.add("hide-me");
}
});

function renderHTML(data){
    var htmlString= "";

    for(i = 0; i < data.length; i++)
    {
        htmlString += "<p>" + data[i].name + ".</p>";
    }


    animalContainer.insertAdjacentHTML('beforeend',htmlString)
}

*/

async function start() {
    const response =await fetch("https://dog.ceo/api/breeds/list/all")
   
    //const response =await fetch("http://plants.usda.gov/api/plants/search/basic");
    //response.addHeader("Access-Control-Allow-Origin", "https://trefle.io");
    const data = await response.json()
   // createBreedList(data.message);

}

start()
/*
function createBreedList(breedlist) {
    document.getElementById("breed").innerHTML =
        `<select>
            <option>Choose a dog breed</option>
            ${Object.keys(breedlist).map(function(breed){
                return `<option>${breed}</option>`
            }).join('')}
        </select>
        `
}
*/