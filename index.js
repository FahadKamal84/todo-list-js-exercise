
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logTaskState: function () {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markCompleted: function() {
      this.complete = true;
    }
  }
  return task;
}


const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

console.log(tasks);

logTaskState(task1); // Clean Cat Litter has not been completed
completeTask(task1);
logTaskState(task1); // Clean Cat Litter has been completed

