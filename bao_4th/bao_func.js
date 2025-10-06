function getManilaTime() {
  return new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Manila" }));
}

function submitDate() {
  const month = document.getElementById("anniv_month").value;
  const day = document.getElementById("anniv_day").value;
  const year = document.getElementById("anniv_year").value;

  if (!month || !day || !year) {
    showAlert("Nope", ">:( kulang bao.", "What");
    return;
  }

  // your set date (June 7, 2025)
  if (month === "June" && day === "7" && year === "2025") {
    document.getElementById("select-date-container").style.display = "none";
    document.getElementById("dashboard").style.display = "block";
    calculateSince(month, day, year);
  } else {
    showAlert("Nope", ">:( kulang bao.", "What");
  }
}

function calculateSince(monthName, day, year) {
  const monthIndex = new Date(`${monthName} 1, ${year}`).getMonth();
  const startDate = new Date(year, monthIndex, day);
  const now = getManilaTime();

  if (startDate > now) {
    document.getElementById("greet").innerHTML = "Soon bao?";
    document.getElementById("countdown").innerHTML = "";
    return;
  }
  showAlert("WARNING", "Eme, I love you Bao!", "Mwa");
  // 🩵 Days difference
  const diffTime = now - startDate;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  // 🩵 Accurate years and months difference
  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();
  let days = now.getDate() - startDate.getDate();

  if (days < 0) {
    months--;
  }
  if (months < 0) {
    years--;
    months += 12;
  }

  const totalMonths = years * 12 + months;

  // Greeting logic
  let greeting = "";
  if (years === 0 && months === 0) {
    greeting = "Happy Day 1, Bao!";
  } else if (years === 0) {
    greeting = `Happy ${totalMonths}${getOrdinal(totalMonths)} Monthsary, Bao!`;
  } else {
    greeting = `Happy ${years}${getOrdinal(years)} Anniversary, Bao!`;
  }

  document.getElementById("greet").innerHTML = greeting;
  document.getElementById("countdown").innerHTML = `It's been <b>${diffDays}</b> days ever since, My Baobei. `;
}

// Helper for “st/nd/rd/th”
function getOrdinal(num) {
  if (num % 10 === 1 && num % 100 !== 11) return "st";
  if (num % 10 === 2 && num % 100 !== 12) return "nd";
  if (num % 10 === 3 && num % 100 !== 13) return "rd";
  return "th";
}

function showAlert(title, message, type = 'error') {
  const alert = document.createElement('div');
  alert.className = `custom-alert ${type}`;
  alert.innerHTML = `
    <div class="custom-alert-icon">${type === 'error' ? '⚠️' : '⚠️'}</div>
    <div class="custom-alert-content">
      <div class="custom-alert-title">${title}</div>
      <div class="custom-alert-message">${message}</div>
    </div>
    <button class="custom-alert-close" onclick="this.parentElement.remove()">×</button>
  `;
  document.body.appendChild(alert);
  
  setTimeout(() => {
    alert.classList.add('hiding');
    setTimeout(() => alert.remove(), 300);
  }, 4000);
}