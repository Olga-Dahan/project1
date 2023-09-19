var init = () => {
    buildTasks(0);
}

function addTask(content, date, time) {

    const task = {
      content,
      date,
      time,
    };

    const tasks = getTasks();
    tasks.push(task);

    saveTasks(tasks);

    buildTasks(1);

}


function saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}



function getTasks() {
    const tasks = localStorage.getItem("tasks");
    console.log(typeof (tasks));
    console.log(tasks);
    if (tasks) {
      return JSON.parse(tasks);
    }
    return [];
}



function deleteTask(index) {
  const tasks = getTasks();

  tasks.splice(index, 1);

  saveTasks(tasks);

  buildTasks(0);
}
