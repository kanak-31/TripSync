const homePage = document.querySelector("#home");
const chatPage = document.querySelector("#chat");
const expensePage = document.querySelector("#expense");
const checklistPage = document.querySelector("#checklist");

const homeBtn = document.querySelector("#home-btn");
const chatBtn = document.querySelector("#chat-btn");
const expenseBtn = document.querySelector("#expense-btn");
const checkistBtn = document.querySelector("#checklist-btn");

homeBtn.addEventListener('click', () => {
    expensePage.style.display = "none";
    checklistPage.style.display = "none";
    chatPage.style.display = "none";
    homePage.style.display = "";
    chatBtn.classList.remove("active");
    expenseBtn.classList.remove("active");
    checkistBtn.classList.remove("active")
    homeBtn.classList.add("active");
})

chatBtn.addEventListener('click', () => {
    expensePage.style.display = "none";
    homePage.style.display = "none";
    checklistPage.style.display = "none";
    chatPage.style.display = "";
    homeBtn.classList.remove("active");
    expenseBtn.classList.remove("active");
    checkistBtn.classList.remove("active");
    chatBtn.classList.add("active");
}) 

expenseBtn.addEventListener('click', () => {
    expensePage.style.display = "";
    homePage.style.display = "none";
    checklistPage.style.display = "none";
    chatPage.style.display = "none";
    homeBtn.classList.remove("active");
    expenseBtn.classList.add("active");
    checkistBtn.classList.remove("active");
    chatBtn.classList.remove("active");
}) 

checkistBtn.addEventListener('click', () => {
    expensePage.style.display = "none";
    homePage.style.display = "none";
    checklistPage.style.display = "";
    chatPage.style.display = "none";
    homeBtn.classList.remove("active");
    expenseBtn.classList.remove("active");
    checkistBtn.classList.add("active");
    chatBtn.classList.remove("active");
}) 

homeBtn.click();