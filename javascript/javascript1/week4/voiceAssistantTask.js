// Voice Assistant Application:

let personName = "";
const toDos = [];

//Some of the motivational quotes:
const quotes = [
  "Keep your face always toward the sunshine, and shadows will fall behind you.",
  "Everything you've ever wanted is sitting on the other side of fear.",
  "Attitude is a little thing that makes a big difference.",
  "I am not a product of my circumstances.",
  "If you can dream it, you can do it.",
];

// For nice to meet you, benjamin.
function getReply(command) {
  command = command.toLowerCase();
  if (command.startsWith("hello my name is ")) {
    const name = command.replace("hello my name is ", "");
    if (personName === name) {
      return `You have already introduced yourself as ${personName}.`;
    } else {
      personName = name;
      return `Nice to meet you, ${personName}.`;
    }
  }

  // For your name is benjamin.
  if (command === "what is my name") {
    if (personName) {
      return `Your name is ${personName}.`;
    } else {
      return "I do not know your name yet.";
    }
  }
  // For fishing and singing in the shower added to your todo.
  if (command.startsWith("add ")) {
    const todo = command.replace("add ", "").replace(" to my todo", "");
    toDos.push(todo);
    return `${todo} added to your todo.`;
  }

  // For Removed  fishing from your todo.
  if (command.startsWith("remove")) {
    const todo = command.replace("remove", "").replace(" from my todo", "");
    const index = toDos.indexOf(todo);
    if (index !== -1) {
      todos.splice(index, 1);
      return `${todo} is not in your todo list.`;
    } else {
      return `Removed ${todo} from your todo.`;
    }
  }

  // You have 2 todos: fishing, singing in the shower.
  if (command === "what is on my todo") {
    if (toDos.length > 0) {
      return `You have ${toDos.length} todos: ${toDos.join(", ")}.`;
    } else {
      return "You have no todos in the list.";
    }
  }

  // To show current date:
  if (command === "what day is it today") {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.toLocaleString("default", { month: "long" });
    const year = currentDate.getFullYear();
    return `Today is ${day}. of ${month} ${year}`;
  }

  // For mathemitacl calsulation:
  if (command.startsWith("what is ")) {
    const expression = command.replace("what is ", "");
    try {
      const result = eval(expression);
      return `The result is ${result}.`;
    } catch (error) {
      return "Sorry, I can't calculate that expression.";
    }
  }

  // For setting a timer:
  if (command.startsWith("set a timer for ")) {
    const time = command
      .replace("set a timer for ", "")
      .replace(" minutes", "")
      .trim();
    const minutes = parseInt(time, 10);
    if (isNaN(minutes)) {
      return "Please provide a valid number of minutes.";
    } else {
      setTimeout(() => {
        console.log("Timer done");
      }, minutes * 60 * 1000);
      return `Timer set for ${minutes} minutes.`;
    }
  }

  // For showing a random quote:
  if (command.startsWith("tell me a quote")) {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }
  return "Sorry, I did not understand that command.";
}

//Example of usage:
console.log(getReply("Hello my name is Benjamin")); // "Nice to meet you, Benjamin."
console.log(getReply("What is my name")); // "Your name is Benjamin."
console.log(getReply("Add fishing to my todo")); // "fishing added to your todo."
console.log(getReply("Add singing in the shower to my todo")); // "singing in the shower added to your todo."
console.log(getReply("Remove fishing from my todo")); // "Removed fishing from your todo."
console.log(getReply("What is on my todo")); // "You have 2 todos: fishing, singing in the shower."
console.log(getReply("What day is it today")); // "Should show the current date."
console.log(getReply("What is 4 * 12")); // "The result is 48."
console.log(getReply("Set a timer for 4 minute")); // "Timer set for 4 minutes. After 4 minutes, 'Timer done' is logged in console."
console.log(getReply("Tell me a quote")); // "Should show the random quote."
