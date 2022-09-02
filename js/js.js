

(function() {
    let requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
  })();
  
  let start = null;

  const meter = document.querySelector(".meter")
  const number = document.querySelector(".information_description-number")
  const remainigNumber = document.querySelector(".remaining-number")
  
  function step(timestamp) {
    if (!start) start = timestamp;
    let progress = timestamp - start;
    meter.value = 0
    if (progress < 815) {
      window.requestAnimationFrame(step);
    }
    meter.value = progress
    number.textContent = `${Math.trunc(progress)} GB`
    remainigNumber.textContent = 1000 - Math.trunc(progress)
    if(progress > 815) {
        number.textContent = "815 GB"
        meter.value = 815
        remainigNumber.textContent = "185"
    }
  }
  window.requestAnimationFrame(step);