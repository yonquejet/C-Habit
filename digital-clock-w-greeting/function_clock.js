// Get current Manila time
function getManilaTime() {
  return new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Manila" }));
}

// Initial setup
const now = getManilaTime();
const greet_hour = now.getHours();

// Greeting logic
let greeting;
if (greet_hour >= 5 && greet_hour < 12) {
  greeting = "Good Morning!";
} else if (greet_hour >= 12 && greet_hour < 18) {
  greeting = "Good Afternoon!";
} else {
  greeting = "Good Evening!";
}

// Date setup
let year = now.getFullYear();
let month = now.getMonth() + 1;
let day = now.getDate();

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
month = monthNames[month - 1];

// Display greeting and date
document.getElementById("title").innerHTML = greeting;
document.getElementById("greeting").innerHTML = greeting;
document.getElementById("show_d").innerHTML = `Today is ${month} ${day}, ${year}.`;

// Update time every second
setInterval(() => {
  const current = getManilaTime();
  let hours = current.getHours();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  const minutes = String(current.getMinutes()).padStart(2, '0');
  const seconds = String(current.getSeconds()).padStart(2, '0');

  document.getElementById("show_t").innerHTML = `${hours}:${minutes}:${seconds} ${ampm}`;
}, 1000);
