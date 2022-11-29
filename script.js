// TODO: add code here



//add window load event handler

window.addEventListener("load", function(){

    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
   response.json().then(function(data) {
let dataFetch = data;
console.log(dataFetch);

const div = document.getElementById("container");

// count.innerHTML = `There are ${dataFetch.length} astronauts!`;

dataFetch.sort(function(a, b) {
    return a.hoursInSpace < b.hoursInSpace ? 1 : -1;
});

    for(i = 0; i < dataFetch.length; i++) {
        let activeClass = 'class="green"';
console.log(dataFetch[i].firstName);

    div.innerHTML = div.innerHTML + `
    <div class = "astronaut">
    <div class = "bio">
       <h3>${dataFetch[i].firstName} ${dataFetch[i].lastName}</h3>
       <ul>
       <li>Hours in space: ${dataFetch[i].hoursInSpace}</li>
       <li class="${dataFetch[i].active ? "green" : ""}">Active: ${dataFetch[i].active}</li>
       <li>Skills: ${dataFetch[i].skills.join(", ")}</li>
       </ul>
    </div>
       <img class = "avatar" src="${dataFetch[i].picture}">
    </div>
    `;
    };


});
} );

} );
