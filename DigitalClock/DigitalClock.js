function updateClock() {
  const now = new Date();

  let hrs = now.getHours().toString().padStart(2, '0');
  let min = now.getMinutes().toString().padStart(2, '0');
  let sec = now.getSeconds().toString().padStart(2, '0');

  let dt = now.getDate().toString().padStart(2, '0');
  let mon = (now.getMonth() + 1).toString().padStart(2, '0');
  let year = now.getFullYear();

  document.getElementById('hrs').textContent = hrs;
  document.getElementById('min').textContent = min;
  document.getElementById('sec').textContent = sec;

  document.getElementById('dt').textContent = dt;
  document.getElementById('mon').textContent = mon;
  document.getElementById('year').textContent = year;
}

setInterval(updateClock, 1000);
updateClock();
