var todaysDate = moment().format("MMMM Do YYYY")
var currentDay = $("#currentDay");
var timeBlocks = $("#time-blocks");

console.log(todaysDate);

function setCurrentDay() {
    currentDay.html(todaysDate);
    
    // textContent = 
    //innerHTML =
}

setCurrentDay();

function setTimeblocks(){
        var startTime = moment().set("hour", 9).format("h A");
    for (var i = 0; i < 9; i++) {
        var setTime = moment(startTime, "h A").add(i, "h").format("h A");
        
        
       var timeBlock = $(`div class ="time-block row d-flex justify-content-center">
        <div class="hour col sm 1 text-right p-2">${setTime}</div>
        <textarea id ="hour${i}" class="input col-sm-8"></textarea>
        <button id="${i}" class="saveBtn col-sm-1"><i class="fas fa-save"></i></button>
        </div>`);

       timeBlocks.append() 
    }
}


