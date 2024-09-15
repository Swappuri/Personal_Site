document.querySelectorAll('a.nav-link').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const heroTitle = document.getElementById('hero-title');
  const heroText = heroTitle.textContent;

  heroTitle.innerHTML = heroText.split('').map((char, index) => {
    if (char === ' ') return '&nbsp;';
    // Random delay between 0.2s and 1s
    const delay = Math.random() * 0.8 + 0.2;
    return `<span style="animation-delay: ${delay}s">${char}</span>`;
  }).join('');

  const heroParagraph = document.querySelector('#home p');
  const paragraphText = heroParagraph.textContent;

  heroParagraph.innerHTML = paragraphText.split('').map((char, index) => {
    if (char === ' ') return '&nbsp;';
    // Random delay between 0.2s and 1s
    const delay = Math.random() * 0.8 + 0.2;
    return `<span style="animation-delay: ${delay}s">${char}</span>`;
  }).join('');
});

// Function to check if an element is in view
function isInView(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

document.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const parallaxSection = document.querySelector('.hero-section');
  const heroContent = document.querySelector('.hero-content');
  const homeSection = document.querySelector('#home');

  // Adjust the speed factor as needed (0.5 for example makes it slower)
  parallaxSection.style.backgroundPositionY = `${scrolled * 0.5}px`;
  heroContent.style.transform = `translateY(${scrolled * 0.3}px)`; // Adjust as needed

  // Fade in effect when scrolling back to the home section
  if (isInView(homeSection)) {
    document.querySelectorAll('#home h1 span, #home p span').forEach(span => {
      span.style.opacity = 0;
      // Reapply animation to fade in again
      span.style.animation = 'fadeIn 0.6s forwards';
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const textarea = document.getElementById('messageInput');

  const adjustTextareaHeight = (event) => {
    textarea.style.height = 'auto'; // Reset height
    textarea.style.height = `${textarea.scrollHeight}px`; // Set height based on scrollHeight
  };

  // Adjust textarea height on input
  textarea.addEventListener('input', adjustTextareaHeight);

  // Adjust textarea height on page load in case it has initial content
  adjustTextareaHeight();
});

emailjs.init("t249N5JZnhg3pxsIR"); // Replace with your EmailJS user ID

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  emailjs.sendForm('service_difvlnk', 'template_iz06psy', this)
    .then(function(response) {
      console.log('Sent successfully', response);
      alert('Thank You For the Message!');
    }, function(error) {
      console.log('Failed to send', error);
      alert('Failed to send email.');
    });
});

document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('a.nav-link');
  const sections = document.querySelectorAll('section');

  const setActiveLink = (hash) => {
    navLinks.forEach(link => {
      if (link.getAttribute('href') === hash) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  };

  // Set initial active link
  setActiveLink(window.location.hash || '#home');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = e.target.getAttribute('href');
      document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
      window.location.hash = targetId; // Update URL hash
    });
  });

  document.addEventListener('scroll', () => {
    let currentSection = '';
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 150 && rect.bottom >= 150) {
        currentSection = '#' + section.id;
      }
    });
    setActiveLink(currentSection);
  });
});
