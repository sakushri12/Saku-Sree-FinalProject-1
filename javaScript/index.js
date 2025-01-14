
const taskManager = new TaskManager(0);
 let  resetForm = document.querySelector("#reset-form");
  let validateName = document.getElementById('title');
  let validateDescription = document.querySelector("#description");
  let validateAssignedTo = document.querySelector("#assignedto");
  let validateStatus = document.querySelector("#status");
  let validateDueDate = document.querySelector("#dueDate");

let btnSub2 = document.querySelector("#submit");

let errMsg1 = document.querySelector("#errMsg1");
let errMsg2 = document.querySelector("#errMsg2");
let errMsg3 = document.querySelector("#errMsg3");
let errMsg4 = document.querySelector("#errMsg4");
let errMsg5 = document.querySelector("#errMsg5");
btnSub2.addEventListener("click", validateBox);
//function for reset the form

 function resetFormInput(){
   resetForm.reset();
 }
// function for validating all the form fields
function validateBox() {
   
 let valFail = 0;
  // validation for NameInput
  if (validateName.value === "" || validateName.value.trim().length < 5) {
    console.log(validateName.value.length);
    errMsg1.innerHTML = "Please enter valid name";
    errMsg1.style.color = "#ff0000";
    valFail += 1;
    console.log("valFail");
    validateName.focus();
  } else {
    errMsg1.innerHTML = "";
    validateName.focus();

  }
  // validation for description
  
  if (validateDescription.value === "" || validateDescription.value.trim().length < 5) {
    console.log(validateDescription.value.length);
    errMsg2.innerHTML = "Please enter valid description";
    errMsg2.style.color = "#ff0000";
    valFail += 1;
    validateDescription.focus();
    } else {
    errMsg2.innerHTML = "";
    validateDescription.focus();
  }
// validate assignedto
if (validateAssignedTo.value === "" || validateAssignedTo.value.trim().length < 4) {
  console.log(validateAssignedTo.value.length);
  errMsg3.innerHTML = "Please enter assignee name";
  errMsg3.style.color = "#ff0000";
  valFail += 1;
  validateAssignedTo.focus();
  } else {
  errMsg3.innerHTML = "";
  validateAssignedTo.focus();
}

// Validate Status
if(validateStatus.value === "Select"){
console.log(validateStatus.value);
  errMsg4.innerHTML ="Choose the status";
  errMsg4.style.color = "#ff0000";
  valFail += 1;
  validateStatus.focus();
  } else {
  errMsg4.innerHTML = "";
  validateStatus.focus();
}

  // validate date
  if(!validateDueDate.value){
    console.log(validateDueDate.value);
      errMsg5.innerHTML ="Choose the date";
      errMsg5.style.color = "#ff0000";
      valFail += 1;
      validateDueDate.focus();
      } else {
      errMsg5.innerHTML = "";
      validateDueDate.focus();
    }
    if (valFail >0) {
      valFail=0;
      return;
    } else {
    taskManager.addTask(validateName.value,validateDescription.value,validateAssignedTo.value,validateStatus.value,validateDueDate.value);
    console.log(taskManager.tasks)
    taskManager.render();
  }
  return;
};



// Create a taskHtml variable with the result of calling the createTaskHtml function, making sure to pass a value for each parameter.
// console.log() the taskHTML variable

// let taskHtml = createTaskHtml("cleaning","cleaning and moping","srees","todo","29/09/2021");
// console.log(taskHtml);
  // Adding Tasklist Step 8

  const taskList = document.querySelector("#task-list");
  // Add an 'onclick' event listener to the Tasks List
taskList.addEventListener("click", (event) => {
// Check if a "Mark As Done" button was clicked
if (event.target.classList.contains("done-button")){
  // Get the correct parent Task, yours might be slightly different
  console.log(event.target.parentElement) ;
  const parentTask =
    event.target.parentElement.parentElement.parentElement.parentElement.parentElement;
    console.log("parent task" + parentTask);
  // Get the taskId of the parent Task and turn it into a number.
  const taskId = Number(parentTask.dataset.taskId);
  console.log("taskId" + taskId);
  // Get the task from the TaskManager using the taskId
  const task = taskManager.getTaskById(taskId);

  // // Update the task status to 'DONE'
  task.status = "Done";
// console.log(parentTask);
  // Render the tasks
  taskManager.render();
}

});

