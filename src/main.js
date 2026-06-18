/**
 * CNNIBLD // HARD TECHNO WEBPAGE INTERACTION // MAIN JS ENTRY
 * Handles custom cursor, theme selection, simulation and forms.
 */

document.addEventListener('DOMContentLoaded', () => {
  console.log('[CNNIBLD SYSTEM ACTIVE] v3.14.FLASH - INITIALIZING...');

  // --- 1. Custom Cursor ---
  const cursor = document.querySelector('.custom-cursor');
  const cursorDot = document.querySelector('.custom-cursor-dot');

  if (cursor && cursorDot) {
    document.addEventListener('mousemove', (e) => {
      // Position cursor with offset
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      
      cursorDot.style.left = `${e.clientX}px`;
      cursorDot.style.top = `${e.clientY}px`;
    });

    // Cursor hover animations
    const hoverElements = document.querySelectorAll('a, button, .selector-btn, .form-input, .form-textarea, .nav-link');
    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.classList.add('hover');
      });
      el.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
      });
    });
  }

  // --- 2. Interactive Background Selector ---
  const heroBg = document.getElementById('hero-bg');
  const selectorButtons = document.querySelectorAll('.selector-btn');

  selectorButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const selectedBg = e.currentTarget.getAttribute('data-bg');
      console.log(`[SYS] CHANGING ACOUSTIC LANDSCAPE TO: ${selectedBg.toUpperCase()}`);

      // Update button active state
      selectorButtons.forEach(b => b.classList.remove('active'));
      e.currentTarget.classList.add('active');

      // Update Hero Background class
      if (heroBg) {
        heroBg.className = 'hero-bg'; // reset
        heroBg.classList.add(`bg-${selectedBg}`);
      }
    });
  });

  // --- 3. Simulated SoundCloud Audio Visualizer ---
  const visBars = document.querySelectorAll('.vis-bar');
  let isPlaying = false;
  let visualizerInterval = null;

  const playBtn = document.querySelector('.sc-play-btn');
  if (playBtn) {
    playBtn.addEventListener('click', () => {
      isPlaying = !isPlaying;
      if (isPlaying) {
        playBtn.innerHTML = '<span class="play-icon">■</span> PAUSE STREAM';
        playBtn.style.backgroundColor = 'var(--color-primary)';
        playBtn.style.color = '#fff';
        console.log('[SYS] AUDIO TRANSMISSION SECURED - VISUALIZER ACTIVE');
        startVisualizer();
      } else {
        playBtn.innerHTML = '<span class="play-icon">▶</span> ACTIVATE STREAM';
        playBtn.style.backgroundColor = '#fff';
        playBtn.style.color = '#000';
        console.log('[SYS] AUDIO TRANSMISSION INHIBITED - VISUALIZER STANDBY');
        stopVisualizer();
      }
    });
  }

  function startVisualizer() {
    visualizerInterval = setInterval(() => {
      visBars.forEach(bar => {
        // Random height between 15% and 100%
        const randHeight = Math.floor(Math.random() * 85) + 15;
        bar.style.height = `${randHeight}%`;
      });
    }, 120);
  }

  function stopVisualizer() {
    clearInterval(visualizerInterval);
    // Softly return to flat baseline
    visBars.forEach(bar => {
      bar.style.height = '15%';
    });
  }

  // --- 4. Brutalist Booking Form Submission Simulation ---
  const bookingForm = document.getElementById('booking-form');
  const formFeedback = document.getElementById('form-feedback');

  if (bookingForm && formFeedback) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = bookingForm.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.innerText = 'TRANSMITTING...';
        submitBtn.disabled = true;
      }

      // Simulate network request delay
      setTimeout(() => {
        console.log('[SYS] BOOKING DISPATCH SUCCESSFUL:');
        const formData = new FormData(bookingForm);
        for (let [key, value] of formData.entries()) {
          console.log(`  ${key.toUpperCase()}: ${value}`);
        }

        // Show success state
        formFeedback.classList.remove('hidden');
        bookingForm.reset();
        
        if (submitBtn) {
          submitBtn.innerText = 'TRANSMIT INQUIRY';
          submitBtn.disabled = false;
        }

        // Hide notification after 6 seconds
        setTimeout(() => {
          formFeedback.classList.add('hidden');
        }, 6000);
      }, 1500);
    });
  }

  // --- 5. Smooth Scroll for Nav Menu ---
  const navLinks = document.querySelectorAll('.nav-link, .scroll-indicator');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = e.currentTarget.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        e.preventDefault();
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
});
