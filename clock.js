setInterval (displayTime, 1000);

function displayTime() {
  let time = new Date();
  let hour = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();

  hour = hour < 10 ? "0" + hour : hour;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  let currentTime = hour + ":" + minutes + ":" + seconds;

  document.getElementById("clock").innerHTML = currentTime;
}

displayTime();
