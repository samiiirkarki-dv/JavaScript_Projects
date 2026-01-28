// DOM ELEMENTS

const studentForm = document.getElementById("studentForm");
const studentContainer = document.querySelector(".students");
const nameInput = studentForm["name"];
const ageInput = studentForm["age"];
const rollInput = studentForm["roll"];

/* 
{
name: string,
age: number,
roll: number,
}

*/

const students = JSON.parse(localStorage.getItem("students")) ||[];


const addStudent = (name, age, roll) => {
  students.push({
    name, 
    age,
    roll,
  });

  localStorage.setItem("stuents", JSON.stringify(students));
 return {name, age, roll};

};

const createStudentElement = ({ name, age, roll }) => {
  // Create Element
  const studentDiv = document.createElement("div");
  const studentName = document.createElement("h1");
  const studentAge = document.createElement("P");
  const studenttRoll = document.createElement("p");

  // Fill the content

  studentName.innerText = `Student name: ${name}`;
  studentAge.innerText = `Age: ${age}`;
  studenttRoll.innerText = `Roll no: ${roll}`;

  // Add to the DOM

  studentDiv.append(studentName, studentAge, studenttRoll);
  studentContainer.appendChild(studentDiv);
};

students.forEach(createStudentElement);

studentForm.onsubmit = (event) => {
  event.preventDefault();

  const newStudent = addStudent(
    nameInput.value,
    ageInput.value,
    rollInput.value,
  );

  createStudentElement(newStudent);
  nameInput.value = "";
  ageInput.value = "";
  rollInput.value = "";
};



