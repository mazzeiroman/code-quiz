var display = document.getElementById('lead')
var usersHs = document.getElementById("usersHs");
var clear = document.getElementById("clear");
var listHs;
var usersArray = JSON.parse(localStorage.getItem('usersInfo'));
console.log (usersArray);

   
for (var i = 0; i < usersArray.length; i++) { 
listHs = document.createElement("li");
listHs.innerHTML = usersArray[i].name + " correct answers: "+ usersArray[i].correctA + " time: "+ usersArray[i].time +".";
usersHs.append(listHs);

}


clear.addEventListener('click',function()
{
    usersHs.remove(listHs);
    localStorage.removeItem("usersInfo");
})
