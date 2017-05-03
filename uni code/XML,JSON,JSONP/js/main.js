//this is the page counter 
//var pageCounter = 1;
//this is the container info will display
var musicContainer = document.getElementById("json");
var btn = document.getElementById("music");
//a button event listener  onclick function 
btn.addEventListener("click", function(){
var ourRequest = new XMLHttpRequest();

ourRequest.open("GET", "https://raw.githubusercontent.com/klferguson2/JSON-Assignment/master/JSON_music/json_music_1.json");

ourRequest.onload = function() 

{
  var ourData = JSON.parse(ourRequest.responseText);
  renderHTML(ourData);
};

ourRequest.send();

pageCounter++;

if(pageCounter >1){
	btn.classList.add("hide-me");
}

});


function renderHTML(data){

var htmlString = "";

for ( i = 0; i <data.length; i++) {

        
        htmlString += "<p class='p-example'>" + data[i].song + " by " + data[i].artist + ".</p>";
}
musicContainer.insertAdjacentHTML('beforeend', htmlString);
}

