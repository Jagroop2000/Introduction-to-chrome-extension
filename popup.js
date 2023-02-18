const timeElement = document.getElementById("time");
const userName = document.getElementById("name");
const timerElement = document.getElementById("timer");

function updateTimeElement() {
  const currentTime = new Date().toLocaleTimeString();
  timeElement.textContent = `The Time is : ${currentTime}`;

  chrome.storage.local.get(["timer"], (res) => {
    const timer = res.timer ?? 0;
    timerElement.textContent = ` Your timer is at : ${timer} seconds`;
  });
}

chrome.storage.sync.get(["name"], (res) => {
  const name = res.name ?? "there !!";
  userName.textContent = `Hi ${name}`;
});

updateTimeElement();
setInterval(updateTimeElement, 1000);
