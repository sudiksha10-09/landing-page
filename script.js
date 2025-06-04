document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const form = e.target;
    const phone = form.phone.value.trim();

    if (!/^\d{10}$/.test(phone)) {
      document.getElementById("responseMsg").textContent = "Please enter a valid 10-digit phone number.";
      return;
    }

    const data = {
      name: form.name.value,
      email: form.email.value,
      phone: phone,
      message: form.message.value,
    };

    fetch("https://script.google.com/macros/s/AKfycbzFNwiSN83eVVaBsrZB3rzrOshGd42Zcha0AyTvlpYNMe-GbsKWnTgRRT9H9ErHt1Kk5Q/exec", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams(data),
    });

    document.getElementById("responseMsg").textContent = "Thank you! Your message has been submitted.";
    form.reset();
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

const track = document.querySelector('.carousel-track');
const images = document.querySelectorAll('.carousel-track img');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;

function updateCarousel(index) {
  track.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    currentIndex = parseInt(dot.getAttribute('data-index'));
    updateCarousel(currentIndex);
  });
});

// Initialize
updateCarousel(currentIndex);
window.onload = function() {
  google.accounts.id.initialize({
    client_id: "214605160519-bi6coj0u73q4b0tq37b9nsh2l8kh8ph5.apps.googleusercontent.com",
    callback: handleCredentialResponse
  });

  google.accounts.id.renderButton(
    document.querySelector(".g_id_signin"),
    { theme: "outline", size: "large" } // customization
  );

  google.accounts.id.prompt(); // optional auto prompt
};

function handleCredentialResponse(response) {
  // This is the JWT token from Google sign-in
  console.log("Encoded JWT ID token: " + response.credential);

  // You can decode and use this token or send it to your backend for verification.
  // For now, let's just show a simple alert for demo
  alert("You have successfully signed in!");
}
