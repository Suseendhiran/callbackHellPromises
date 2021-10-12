let countdownTag = document.getElementById("countdown");
let countdown = parseInt(countdownTag.innerText);
let countdownPromise = new Promise((resolve) => resolve(countdown));
let inc = 1;
countdownPromise
  .then(() => {
    setTimeout(() => {
      countdownTag.innerText = countdown -= 1;
    }, 1000);
    inc++;
  })
  .then(() => {
    setTimeout(() => {
      countdownTag.innerText = countdown -= 1;
    }, 1000 * inc);
    inc++;
  })
  .then(() => {
    setTimeout(() => {
      countdownTag.innerText = countdown -= 1;
    }, 1000 * inc);
    inc++;
  })
  .then(() => {
    setTimeout(() => {
      countdownTag.innerText = countdown -= 1;
    }, 1000 * inc);
    inc++;
  })
  .then(() => {
    setTimeout(() => {
      countdownTag.innerText = countdown -= 1;
    }, 1000 * inc);
    inc++;
  })
  .then(() => {
    setTimeout(() => {
      countdownTag.innerText = countdown -= 1;
    }, 1000 * inc);
    inc++;
  })
  .then(() => {
    setTimeout(() => {
      countdownTag.innerText = countdown -= 1;
    }, 1000 * inc);
    inc++;
  })
  .then(() => {
    setTimeout(() => {
      countdownTag.innerText = countdown -= 1;
    }, 1000 * inc);
    inc++;
  })
  .then(() => {
    setTimeout(() => {
      countdownTag.innerText = countdown -= 1;
    }, 1000 * inc);
    inc++;
  })
  .then(() => {
    setTimeout(() => {
      countdownTag.innerText = "Promise!!";
    }, 1000 * inc);
    inc++;
  });
