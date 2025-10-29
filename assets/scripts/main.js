//button menu
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu-links");
btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
btn.classList.toggle("opacity-0")
}
);



//Carrousel manual

const cards = document.querySelectorAll('.carousel-card');
const dots = document.querySelectorAll('.carousel-dot');


dots.forEach(dot => {
    dot.addEventListener('click', () => {
        const idx = parseInt(dot.getAttribute('data-index'));
        cards.forEach((card, i) => {
            if (i === idx) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
        dots.forEach((d, i) => {
            d.classList.toggle('bg-[#CB935D]', i === idx);
            d.classList.toggle('bg-gray-400', i !== idx);
            d.style.opacity = i === idx ? '0.8' : '0.5';
        });
    });
});


//Visor de cards
document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('#blog-cards .blog-card');
    const btn = document.getElementById('ver-mas');
    let visible = 3;

    function showCards() {
        cards.forEach((card, i) => {
            card.classList.toggle('hidden', i >= visible);
        });
        // Oculta el botón si ya se mostraron todas
        if (visible >= cards.length) btn.style.display = 'none';
    }

    btn.addEventListener('click', function () {
        visible += 3;
        showCards();
    });

    showCards();
});


//Validacion de formularios

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#contact form");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita el envío automático

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    // Limpia mensajes previos
    clearErrors(form);

    let valid = true;

    // Validación de nombre
    if (name.length < 2) {
      showError(form.name, "El nombre debe tener al menos 2 caracteres.");
      valid = false;
    }

    // Validación de email
    if (!validateEmail(email)) {
      showError(form.email, "Por favor ingresa un email válido.");
      valid = false;
    }

    // Validación de mensaje
    if (message.length < 10) {
      showError(form.message, "El mensaje debe tener al menos 10 caracteres.");
      valid = false;
    }

    if (valid) {
      showSuccess(form, "✅ Mensaje enviado con éxito.");
      form.reset();
    }
  });

  // Función para validar formato de email
  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  // Muestra errores debajo del campo
  function showError(input, message) {
    input.classList.add("ring-2", "ring-red-500");
    const error = document.createElement("small");
    error.classList.add("text-red-400", "mt-1", "block");
    error.innerText = message;
    input.insertAdjacentElement("afterend", error);
  }

  // Limpia errores previos
  function clearErrors(form) {
    form.querySelectorAll("small").forEach((el) => el.remove());
    form.querySelectorAll("input, textarea").forEach((el) => {
      el.classList.remove("ring-2", "ring-red-500");
    });
  }

  // Muestra un mensaje de éxito
  function showSuccess(form, message) {
    const success = document.createElement("p");
    success.classList.add("text-green-400", "mt-4", "text-center");
    success.innerText = message;
    form.appendChild(success);
    setTimeout(() => success.remove(), 3000);
  }
});
//observer Fade-in
document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll(".fade-in-up, .fade-in-down, .fade-in-left, .fade-in-right");

  const appearOptions = {
    threshold: 0.2,  // se activa cuando el 20% del elemento es visible
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("show");
      observer.unobserve(entry.target); // para que solo se anime una vez
    });
  }, appearOptions);

  faders.forEach(fader => appearOnScroll.observe(fader));
});