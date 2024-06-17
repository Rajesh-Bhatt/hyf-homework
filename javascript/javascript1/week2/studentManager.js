//Student Manager
const class07Students = [];

function addStudentToClass(studentName) {
  if (studentName === "") {
    console.log("Cannot add an empty string as a name.");
    return;
  }
  if (class07Students.length >= 6 && studentName !== "Queen") {
    console.log("Can not add more students to the class07");
    return;
  }
  if (class07Students.includes(studentName)) {
    console.log(`Student ${studentName} is already in the class`);
    return;
  }
  class07Students.push(studentName);
  console.log(class07Students);
}

function getNumberOfStudents() {
  return class07Students.length;
}

addStudentToClass("Surya"); // Add Surya to the class
addStudentToClass("Rohan"); // Add Rohan to the class
addStudentToClass("Rohan"); // Logs: Student Rohan is already in the class
addStudentToClass("Jonas"); // Add Jonas to the class
addStudentToClass("Krish"); // Add Krish to the class
addStudentToClass("Marta"); // Ads Marta to the class
addStudentToClass("Queen"); // Always adds Queen even if the class is full
addStudentToClass("Natalia"); // Logs: Cannot add more students to class07
addStudentToClass(""); // Logs: Can not add an empty string as a name.

console.log("Number of Students: " + getNumberOfStudents()); // To get the number of students in class07
