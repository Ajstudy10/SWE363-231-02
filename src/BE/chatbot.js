process.stdout.write("Ask me: How is the weather, How are you, quit ");

process.stdin.on('data', (data) => {
  const userInput = data.toString().trim();
  if (userInput === "How is the weather") {
    process.stdout.write("Good\n");
  } else if (userInput === "How are you") {
    process.stdout.write("Good\n");
  } else if (userInput === "quit") {
    process.stdout.write("Goodbye!\n");
    process.exit();
  } else {
    process.stdout.write("I don't understand. Please ask one of the predefined questions.\n");
  }

  process.stdout.write("Ask me: How is the weather, How are you, quit ");
  console.log(`You typed ${userInput}`);
});