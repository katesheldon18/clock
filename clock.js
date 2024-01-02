setInterval(displayTime, 1000);

function displayTime() {
  let time = new Date();
  let hour = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();

  if (hour < 10) {
    hour = "0" + hour;
  } else {
    hour = hour;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  } else {
    minutes = minutes;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  } else {
    seconds = seconds;
  }

  let currentTime = hour + ":" + minutes + ":" + seconds;

  document.getElementById("clock").innerHTML = currentTime;
}

displayTime();
