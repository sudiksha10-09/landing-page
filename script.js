document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    // form stuff...
  });

  const line1Text = "Building strong foundations through sports & fitness!";
  const line2Text = "Empowering young minds, one goal at a time!";
  const speed = 50;
  let i = 0, j = 0;

  function typeLine1() {
    if (i < line1Text.length) {
      document.getElementById("line1").textContent += line1Text.charAt(i);
      i++;
      setTimeout(typeLine1, speed);
    } else {
      setTimeout(typeLine2, 700);
    }
  }

  function typeLine2() {
    if (j < line2Text.length) {
      document.getElementById("line2").textContent += line2Text.charAt(j);
      j++;
      setTimeout(typeLine2, speed);
    }
  }

  typeLine1();
});
