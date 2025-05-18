const image = document.getElementById('ephemeralImage');
const timer = document.getElementById('timer');
let countdown = 10;

// Mostra immagine all'avvio
image.style.display = 'block';

// Countdown
const interval = setInterval(() => {
  countdown--;
  timer.textContent = countdown;

  if (countdown === 0) {
    clearInterval(interval);
    image.remove();
    timer.textContent = "L’attimo è scomparso.";
  }
}, 1000);
