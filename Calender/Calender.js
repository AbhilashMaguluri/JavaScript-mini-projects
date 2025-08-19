let now = new Date(); 
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

document.getElementById("m").innerText = months[now.getMonth()];
document.getElementById("day").innerText = days[now.getDay()];
document.getElementById("date").innerText = now.getDate();
document.getElementById("year").innerText = now.getFullYear();
