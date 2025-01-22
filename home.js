function openMailApplication() {
    window.location.href = 'mailto:zaigham135@gmail.com';
  }
  
  const button = document.getElementById('btn');
  
  button.addEventListener('click', () => {
    openMailApplication();
  });
  let $root = $('html, body');
  $('a[href^="#"]').click(function() {
      let href = $.attr(this, 'href');
      $root.animate({
        scrollTop: $(href).offset().top
      }, 500, function() {
        window.location.hash = href;
      });
      return false;
    });

document.addEventListener('DOMContentLoaded', function() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons and panes
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));

            // Add active class to clicked button and corresponding pane
            btn.classList.add('active');
            const tabId = btn.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');

            // Animate progress bars in the active tab
            const progressBars = document.querySelectorAll(`#${tabId} .progress`);
            progressBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 50);
            });
        });
    });

    // Initial animation for the active tab
    const activeTabProgressBars = document.querySelectorAll('.tab-pane.active .progress');
    activeTabProgressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 50);
    });
});



// Wait for page load
document.addEventListener('DOMContentLoaded', function() {
    // Remove loading overlay after content is ready
    setTimeout(() => {
        document.querySelector('.loading-overlay').style.display = 'none';
    }, 2000);

    // Lazy load images
    const lazyImages = document.querySelectorAll('.lazy-load');
    lazyImages.forEach(img => {
        img.src = img.dataset.src;
        img.onload = () => img.classList.add('loaded');
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});