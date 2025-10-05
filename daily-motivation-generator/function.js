const quoteList = ["No matter how many mistakes you make or how slow you progress, you are still way ahead of everyone who isn't trying. - Tony Robbins", 
    "Failure is not fatal. Failure should be our teacher, not our undertaker. It should challenge us to new heights of accomplishments, not pull us to new depths of despair. From honest failure can come valuable experience. - William Arthur Ward", 
    "From this day forward, I no longer shall tinker with the machinery of death. ... I fell morally and intellectually obligated simply to concede that the death penalty experiment has failed. - Harry A. Blackmu"];


function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quoteList.length);

  document.getElementById("motivation_placeholder").textContent = quoteList[randomIndex];
}