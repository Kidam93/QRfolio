const primaryLink = document.querySelector('.links-container .active');

const links = document.querySelector('.links-container');
links.addEventListener('mouseenter', function(e){
    primaryLink.classList.remove("active");
})
links.addEventListener('mouseleave', function(e){
    primaryLink.classList.add("active")
})