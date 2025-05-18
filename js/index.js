
  AOS.init({
    duration: 900,
    mirror: true,
    once: false
  });

  // Scrollspy
  var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#mainNav',
    offset: 80
  });

  // Collapse navbar on link click (mobile)
  document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', function(){
      var nav = document.querySelector('.navbar-collapse');
      if(nav.classList.contains('show')){
        var bsCollapse = new bootstrap.Collapse(nav, {toggle: false});
        bsCollapse.hide();
      }
    });
  });

  // Contact form fake submit
  document.querySelector('.contact-form').addEventListener('submit', function(e){
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    this.reset();
  });
