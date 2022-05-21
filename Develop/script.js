var todaysDate = moment().format("MMMM Do YYYY")
var currentDay = $("#currentDay");
var timeBlocks = $("#time-blocks");
var currentTime = moment().hour()
var startTime = moment().set("hour", 9).format("h A");
var saveBtn = document.querySelector(".saveBtn")

console.log(todaysDate);
// to display current day
function setCurrentDay() {
    currentDay.html(todaysDate);
}

setCurrentDay();
// to set color by event time past present future
function setTimeblocks(){
    for (var i = 0; i < 9; i++) {
        var setTime = moment(startTime, "h A").add(i, "h").format("h A");
       var timeBlock = $(`<div class="time-block row d-flex justify-content-center">
        <div id="time${i}" class="hour col-sm-1 text-right p-2">${setTime}</div>
        <textarea id="hour${i}" class="input col-sm-8"></textarea>
        <button id="${i}" class="saveBtn col-sm-1"><i class="fas fa-save"></i></button>
        </div>`);

       timeBlocks.append(timeBlock);
    }
}
function timePriority(){
for (i = 0; i < 9; i++) {
    var textArea = document.getElementById("hour" + i)
    var slot = i + 9
    if (currentTime > slot) {
        textArea.classList.add("past")
    }
    if (currentTime === slot) {
            textArea.classList.add("present")
    }
    if (currentTime < slot) {
            textArea.classList.add("future")
    }
}
}
// to get individual entries saved to localstorage
timeBlocks.on("click", "button", function(){
var inputVal = [
    {id:0,task:document.getElementById("hour0").value},
    {id:1,task:document.getElementById("hour1").value},
    {id:2,task:document.getElementById("hour2").value},
    {id:3,task:document.getElementById("hour3").value},
    {id:4,task:document.getElementById("hour4").value},
    {id:5,task:document.getElementById("hour5").value},
    {id:6,task:document.getElementById("hour6").value},
    {id:7,task:document.getElementById("hour7").value},
    {id:8,task:document.getElementById("hour8").value},
]
localStorage.setItem("tasks", JSON.stringify(inputVal))
console.log(inputVal)
})
// to make storage saves persist
function renderTasks(){
  var tasks = JSON.parse(localStorage.getItem("tasks"))
  if (tasks){
      for (var i = 0; i < tasks.length; i ++){
          var hour = document.getElementById("hour" + i)
          hour.innerHTML= tasks[i].task
      }
  }
}
setTimeblocks();
timePriority();
renderTasks();