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
    navCenter.addEventListener("mouseenter", () => {
      navItems.forEach((item) => {
        item.style.transform = item.style.transform + " scale(1.1)"
      })
    })

    navCenter.addEventListener("mouseleave", () => {
      navItems.forEach((item) => {
        const index = item.getAttribute("data-index")

        // Reset to original positions
        switch (index) {
          case "0":
            item.style.transform = "translateX(-50%) translateY(-40px)"
            break
          case "1":
            item.style.transform = "rotate(45deg)"
            break
          case "2":
            item.style.transform = "translateX(40px)"
            break
          case "3":
            item.style.transform = "rotate(-45deg)"
            break
          case "4":
            item.style.transform = "translateX(-50%) translateY(40px)"
            break
          case "5":
            item.style.transform = "rotate(45deg)"
            break
          case "6":
            item.style.transform = "translateX(-40px)"
            break
          case "7":
            item.style.transform = "rotate(-45deg)"
            break
        }
      })
    })
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

