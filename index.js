
  const toggleButton = document.getElementById('mode-toggle');
  const body = document.body;

  // Check local storage for mode preference
  if (localStorage.getItem('mode') === 'dark') {
    body.classList.add('dark-mode');
    toggleButton.textContent = '☀️';
  }

  toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
      localStorage.setItem('mode', 'dark');
      toggleButton.textContent = '☀️';
    } else {
      localStorage.setItem('mode', 'light');
      toggleButton.textContent = '🌙';
    }
  });

  document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const formData = new FormData(e.target);
  
    const response = await fetch('https://formspree.io/f/xaneydpr', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });
  
    if (response.ok) {
      showPopup();
      e.target.reset();
    } else {
      alert('Something went wrong. Please try again.');
    }
  });

  function showPopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'block';
  }

  function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
  }
