//Notes Taking Application:

const notes = [];

//Save a note
function saveNote(content, id) {
  const note = { content: content, id: id };
  notes.push(note);
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
saveNote("Cook the Food", 3);
saveNote("Clean the house", 4);

console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2},
//{content: 'Cook the Food', id: 3}, {content: 'Clean the house', id: 4}]

//Get a note
function getNote(id) {
  if (typeof id === "" || typeof id !== "number") {
    console.error("ID must be a number!");
    return;
  }
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === id) {
      return notes[i];
    }
  }
  console.error("Notes not found! Please provide the valid note ID from 1-4.");
}

const firstNote = getNote(1);
console.log(firstNote); // Log out: {content: 'Pick up groceries', id: 1}

//Log out notes:
function logOutNotesFormatted() {
  notes.forEach((note) => {
    console.log(
      `The note with id: ${note.id}, has the following note text: ${note.content}`
    );
  });
}

logOutNotesFormatted(); // should log out the text below:

// The note with id: 1, has the following note text: Pick up groceries
// The note with id: 2, has the following note text: Do laundry
// The note with id: 3, has the following note text: Cook the Food
// The note with id: 4, has the following note text: Clean the house
