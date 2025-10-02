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


//validation Form
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // Obtener valores
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Campos de error
  const errorName = document.getElementById("error-name");
  const errorEmail = document.getElementById("error-email");
  const errorMessage = document.getElementById("error-message");

  let isValid = true;

  // Reset de mensajes
  [errorName, errorEmail, errorMessage].forEach(el => {
    el.textContent = "";
    el.classList.add("hidden");
  });

  // Validar nombre
  if (name.length < 3) {
    errorName.textContent = "El nombre debe tener al menos 3 caracteres.";
    errorName.classList.remove("hidden");
    isValid = false;
  }

  // Validar email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errorEmail.textContent = "Ingresa un email válido.";
    errorEmail.classList.remove("hidden");
    isValid = false;
  }

  // Validar mensaje
  if (message.length < 10) {
    errorMessage.textContent = "El mensaje debe tener al menos 10 caracteres.";
    errorMessage.classList.remove("hidden");
    isValid = false;
  }

  if (isValid) {
    // Acá podrías mandar el form con fetch/AJAX
    alert("Formulario enviado correctamente ✅");
    document.getElementById("contactForm").reset();
  }
});