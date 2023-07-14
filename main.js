// Set initial z-index values
var elements = document.querySelectorAll('.animation-sec');
elements.forEach(function(element, index) {
    element.style.zIndex = index + 1;
});

// Toggle z-index values
var currentIndex = 1;
setInterval(function() {
    // Move current element to back
    elements[currentIndex - 1].style.zIndex = 1;

    // Move next element to front
    currentIndex = (currentIndex % elements.length) + 1;
    elements[currentIndex - 1].style.zIndex = elements.length;
}, 3000);

const menuBtn = document.querySelector('#menu-icon')
menuBtn.addEventListener('click',function(){
    console.log("WaterFall watch me as i come")
    const accordion = document.querySelector('.side-accordion-container')
    accordion.classList.toggle('active')
    


})
