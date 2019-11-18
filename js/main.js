const anchors = document.querySelectorAll('header .nav-item > a')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

$('section .gallery_block .wrmain .item a').fancybox({
  thumbs: {
    autoStart: true, // Display thumbnails on opening
    hideOnClose: true, // Hide thumbnail grid when closing animation starts
    parentEl: ".fancybox-container", // Container is injected into this element
    axis: "y" // Vertical (y) or horizontal (x) scrolling
  }

});


