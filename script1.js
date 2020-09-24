var display = document.getElementById('lead')
var usersHs = document.getElementById("usersHs");
var place;
var listHs;
var usersArray = JSON.parse(localStorage.getItem('usersInfo'));
console.log (usersArray);

   
for (var i = 0; i < usersArray.length; i++) { 
listHs = document.createElement("li");
listHs.innerHTML = usersArray[i].name + " correct answers: "+ usersArray[i].correctA + " time: "+ usersArray[i].time +".";
usersHs.append(listHs);
}

//     localStorage.setItem("High Scores", JSON.stringify(usersArray));

