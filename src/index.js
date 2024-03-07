function openIframe(){
    document.getElementById("IframeContainer").style.display = 'block';
    document.getElementById("overlay").style.display = "block";
    document.body.style.overflow ="hidden"
   
}
function closeIframe(){
    document.getElementById("IframeContainer").style.display = 'none';
    document.getElementById("overlay").style.display = "none";
    document.body.style.overflow ="auto"
}
document.ElementById("open").addEventListener("click", openIframe);

let days = 15;
    let hours = 90;
    let minutes = 20;
    let seconds = 12;
    let timerInterval;

    function startTimer() {
      timerInterval = setInterval(updateTimer, 1000);
    }

  
    function updateTimer() {
      seconds--;
      if (seconds < 0) {
        seconds = 59;
        minutes--;
        if (minutes < 0) {
          minutes = 59;
          hours--;
          if (hours < 0) {
            hours = 23;
            days--;
            if (days < 0) {
              // Timer has reached 0, stop the timer
              clearInterval(timerInterval);
              alert('Timer has ended!');
              return;
            }
          }
        }
      }
      // Update the timer display
      document.getElementById('timerDisplay').innerText = days + " days : " + hours + " hours : " + minutes + " minutes : " + seconds + " seconds";
    }