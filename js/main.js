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

// // MDB Lightbox Init
// $(function () {
// $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
// });