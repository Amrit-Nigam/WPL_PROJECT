document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle")
  const headerNav = document.querySelector(".header-nav")

  if (mobileMenuToggle && headerNav) {
    mobileMenuToggle.addEventListener("click", function () {
      headerNav.classList.toggle("active")

      // Change icon based on menu state
      const icon = this.querySelector("i")
      if (headerNav.classList.contains("active")) {
        icon.classList.remove("fa-bars")
        icon.classList.add("fa-times")
      } else {
        icon.classList.remove("fa-times")
        icon.classList.add("fa-bars")
      }
    })
  }

  // Circular Navigation Animation (only on landing page)
  const navItems = document.querySelectorAll(".nav-item")
  const navCenter = document.querySelector(".nav-center")

  if (navCenter && navItems.length > 0) {
    // Define the angles used in the CSS for each nav item position
    const angles = {
      "0": 270,
      "1": 321.4,
      "2": 12.9,
      "3": 64.3,
      "4": 115.7,
      "5": 167.1,
      "6": 218.6
    };

    navItems.forEach((item) => {
      const index = item.getAttribute('data-index');
      const angle = angles[index];
      
      item.addEventListener("mouseenter", function() {
        // Scale up but remove background and shadow effects
        this.style.transform = `rotate(${angle}deg) translate(170px) rotate(-${angle}deg) scale(1.2)`;
        this.style.zIndex = "10";
        
        const link = this.querySelector("a");
        if (link) {
          link.style.color = "var(--primary-color)";
          link.style.fontWeight = "700";
        }
      });
      
      item.addEventListener("mouseleave", function() {
        // Reset to normal state
        this.style.transform = `rotate(${angle}deg) translate(170px) rotate(-${angle}deg)`;
        this.style.zIndex = "1";
        
        const link = this.querySelector("a");
        if (link) {
          link.style.color = "var(--text-color)";
          link.style.fontWeight = "600";
        }
      });
    });
  }

  // Add background blur effect for better navbar visibility
  const heroContent = document.querySelector(".hero-content");
  const socialLinks = document.querySelector(".social-links");
  
  if (heroContent) {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    hamburgerMenu.addEventListener('click', function() {
      // Toggle blur effect based on the new state (after class toggle)
      setTimeout(() => {
        if (document.body.classList.contains('nav-active')) {
          // Hide text content completely when navbar is active
          heroContent.style.opacity = "0";
          if (socialLinks) socialLinks.style.opacity = "0";
        } else {
          // Show text content when navbar is closed
          heroContent.style.opacity = "1";
          if (socialLinks) socialLinks.style.opacity = "1";
        }
      }, 0);
    });
    
    // Restore text when nav is closed via overlay
    const navOverlay = document.querySelector('.nav-overlay');
    if (navOverlay) {
      navOverlay.addEventListener('click', function() {
        heroContent.style.opacity = "1";
        if (socialLinks) socialLinks.style.opacity = "1";
      });
    }
    
    // Restore text when clicking any nav item
    const navLinks = document.querySelectorAll('.nav-items a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        heroContent.style.opacity = "1";
        if (socialLinks) socialLinks.style.opacity = "1";
      });
    });
    
    // Restore text when pressing Escape key
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape') {
        heroContent.style.opacity = "1";
        if (socialLinks) socialLinks.style.opacity = "1";
      }
    });
  }

  // Parallax effect for landing page
  const landingContainer = document.querySelector(".landing-container")

  if (landingContainer) {
    window.addEventListener("scroll", () => {
      const scrollPosition = window.scrollY
      landingContainer.style.backgroundPositionY = scrollPosition * 0.5 + "px"
    })
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      if (targetId === "#") return

      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        })
      }
    })
  })

  // Animate elements on scroll
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(
      ".section-header, .about-content, .car-content, .sponsors-grid, .about-grid, .mission-vision, .achievements-grid",
    )

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top
      const windowHeight = window.innerHeight

      if (elementPosition < windowHeight - 100) {
        element.classList.add("animate")
      }
    })
  }

  window.addEventListener("scroll", animateOnScroll)
  animateOnScroll() // Run once on page load
})

// Hamburger Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const circularNav = document.querySelector('.circular-nav');
    const navOverlay = document.querySelector('.nav-overlay');
    
    // Make sure circular nav is hidden initially
    circularNav.classList.remove('active');
    navOverlay.classList.remove('active');
    
    hamburgerMenu.addEventListener('click', function() {
        // Toggle active class for hamburger animation
        this.classList.toggle('active');
        
        // Toggle circular nav visibility
        circularNav.classList.toggle('active');
        
        // Toggle overlay visibility
        navOverlay.classList.toggle('active');
        
        // Toggle body class to prevent scrolling when nav is open
        document.body.classList.toggle('nav-active');
    });
    
    // Close menu when clicking on a navigation link
    const navLinks = document.querySelectorAll('.nav-items a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburgerMenu.classList.remove('active');
            circularNav.classList.remove('active');
            navOverlay.classList.remove('active');
            document.body.classList.remove('nav-active');
        });
    });
    
    // Close navigation when clicking on overlay
    navOverlay.addEventListener('click', function() {
        hamburgerMenu.classList.remove('active');
        circularNav.classList.remove('active');
        navOverlay.classList.remove('active');
        document.body.classList.remove('nav-active');
    });
    
    // Close navigation when pressing Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && circularNav.classList.contains('active')) {
            hamburgerMenu.classList.remove('active');
            circularNav.classList.remove('active');
            navOverlay.classList.remove('active');
            document.body.classList.remove('nav-active');
        }
    });
});
