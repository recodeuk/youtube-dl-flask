var countdownNumberEl = document.getElementById('countdown-number');
var countdown = 5;

countdownNumberEl.textContent = countdown;

setInterval(function() {
  countdown = --countdown <= 0 ? 5 : countdown;

  countdownNumberEl.textContent = countdown;
}, 1000);