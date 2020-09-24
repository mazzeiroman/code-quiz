var display = document.getElementById('lead')
var usersHs = document.getElementById("usersHs");
var place;
var listHs;
var usersInfo = JSON.parse(localStorage.getItem('usersInfo'));
console.log (usersInfo);

   
// for (var i = 0; i < usersInfo.length; i++) { 
listHs = document.createElement("li");
listHs.innerHTML = usersInfo.name + " correct answers: "+ usersInfo.correctA + " time: "+ usersInfo.time +".";
usersHs.append(listHs);
// }

    localStorage.setItem("High Scores", JSON.stringify(usersInfo));

