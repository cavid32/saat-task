const saatEqrebi = document.getElementById("saatEqrebi");
const deqiqeEqrebi = document.getElementById("deqiqeEqrebi");
const saniyeEqrebi = document.getElementById("saniyeEqrebi");

setInterval(function () {
  const oclock = new Date();

  let saniye = oclock.getSeconds();
  let deqiqe = oclock.getMinutes();
  let saat = oclock.getHours();


  
  saniyeEqrebi.style.transform = `translate(-50%, -50%) rotate(${
    saniye * 6
  }deg)`;
  deqiqeEqrebi.style.transform = `translate(-50%, -50%) rotate(${
    deqiqe * 6
  }deg)`;
  saatEqrebi.style.transform = `translate(-50%, -50%) rotate(${
    30 * saat + deqiqe / 2
  }deg)`;
}, 1000);
