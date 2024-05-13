
const inputbox = document.getElementById("input-box");
const taskContainer = document.getElementById("task-container");

function addTask(){
    if(inputbox.value ==''){
        alert("Please Enter a Task");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        taskContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value=''
    saveData();
}

taskContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",taskContainer.innerHTML);
}

function showTask(){
    taskContainer.innerHTML = localStorage.getItem("data");
}
showTask();



const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const today = new Date();

const weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];

const months = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
];

date.innerHTML = today.getDate();
day.innerHTML = weekDays[today.getDay()];
month.innerHTML = months[today.getMonth()];
year.innerHTML = today.getFullYear();