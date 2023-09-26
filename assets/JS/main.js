function submitForm(event) {
    event.preventDefault();
    const theContent = document.getElementById("content").value;
    const theDate = document.getElementById("date").value;
    const theTime = document.getElementById("time").value;

    if (validateDate(theContent, theDate, theTime)) {
        addTask(theContent, theDate, theTime);
        document.getElementById("myForm").reset();
        document.getElementById("notice").innerHTML = "";
    }

}


function clearTask(event) {
    event.preventDefault();
    document.getElementById("myForm").reset();
}


// if flag=1 notes appear with "fade-in" 
function buildTasks(flag) {

    const tasks = getTasks();

    var info = "";

    for (var i = 0; i < tasks.length; i++) {
        if (i == tasks.length - 1 && flag == 1) {
            info += `
                <div id="note" class = "fade-in">
                
                    <button id = "myButton" onclick = "deleteTask(${i})"><i class="bi bi-x-square-fill"></i></button>
                    <br>
                    <div id="myContent">${tasks[i].content}</div>
                    <br>
                    <div id="myDate">${tasks[i].date}<br>${tasks[i].time}</div>
                    
                </div>
            `;
        }
        else {
            info += `
                <div id="note" >
                
                    <button id = "myButton" onclick = "deleteTask(${i})"><i class="bi bi-x-square-fill"></i></button>
                    <br>
                    <div id="myContent">${tasks[i].content}</div>
                    <br>
                    <div id="myDate">${tasks[i].date}<br>${tasks[i].time}</div>
                    
                </div>
            `;
        }
    }

    document.getElementById("tasks").innerHTML = info;
}



function validateDate(theContent, theDate, theTime) {

    if (theContent === "") {
        document.getElementById("notice").innerHTML = "Missing task!";
        return 0;
    }

    if (theTime === "") {
        document.getElementById("notice").innerHTML = "Missing time!";
        return 0;
    }

    if (theDate === "") {
        document.getElementById("notice").innerHTML = "Missing date!";
        return 0;
    }

    var selectedDate = new Date(theDate);
    const currentDate = new Date();
   
    if (selectedDate <= currentDate) {
        document.getElementById("notice").innerHTML = "Please select a future date!";
        return 0;
    }

    return 1;
}