const EventEmitter = require('events');

const customEventEmitter = new EventEmitter();

module.exports = customEventEmitter;

// Function to simulate user login
function simulateUserLogin() {
  const user = `USER_${Math.floor(Math.random() * 10) + 1}`;
  const timestamp = new Date().toISOString();
  console.log(`${timestamp}: ${user} logged in`);
  customEventEmitter.emit('userLoggedIn', user);
}

// Function to simulate user logout
function simulateUserLogout(user) {
  const timestamp = new Date().toISOString();
  console.log(`${timestamp}: ${user} logged out`);
  customEventEmitter.emit('userLoggedOut', user);
}

// Set up event listeners for "userLoggedIn" and "userLoggedOut"
customEventEmitter.on('userLoggedIn', (user) => {
  console.log(`Welcome, ${user}!`);
});

customEventEmitter.on('userLoggedOut', (user) => {
  console.log(`Goodbye, ${user}!`);
});

// Simulate user login and logout
setInterval(() => {
  simulateUserLogin();
  setTimeout(() => {
    const users = customEventEmitter.eventNames().includes('userLoggedIn')
      ? customEventEmitter.eventNames('userLoggedIn')
      : [];
    if (users.length > 0) {
      const user = users[Math.floor(Math.random() * users.length)];
      simulateUserLogout(user);
    }
  }, 1000); // Simulate user logout after 1 second
}, Math.random() * 1900 + 100); // Simulate user login every 0.1 to 2 seconds
