var backdrop = document.querySelector( '.backdrop')
var selectPlanButtons = document.querySelectorAll('.plan button');
var modal = document.querySelector('.modal');
var cancelButton = document.querySelector('.modal__action--negative');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');
var ctaButton = document.querySelector('.main-nav_item-cta')

for (let i= 0; i < selectPlanButtons.length; i++) {
     
    selectPlanButtons[i].addEventListener('click', function () {
        // modal.style.display = 'block';
        // backdrop.style.display ='block';  
        modal.classList.add('open');
        backdrop.style.display ="block";
        setTimeout(() => {
            backdrop.classList.add('open');
        }, 10);
        
        
    })
    
}

if (cancelButton) {
    cancelButton.addEventListener('click', CloseModal)
}

backdrop.addEventListener('click', CloseModal)

backdrop.addEventListener('click', function () {
    // backdrop.style.display ='none';
    // mobileNav.style.display = 'none';
    if(mobileNav){
        mobileNav.classList.remove('open');
    }
   
    CloseModal();   
})

function CloseModal(){
    // modal.style.display = 'none';
    // backdrop.style.display ='none';
    if (modal) {
        modal.classList.remove('open');
    }  
    setTimeout(() => {
        backdrop.style.display= 'none';
    }, 200);
    backdrop.classList.remove('open');
}

toggleButton.addEventListener('click', function () {
    // mobileNav.style.display = 'block';
    // backdrop.style.display= 'block';

    mobileNav.classList.add('open');
    backdrop.style.display= 'block'
    setTimeout(() => {
        backdrop.classList.add('open');
    }, 10);
   

})

ctaButton.addEventListener('animationstart', function (event) {
    console.log("animation started", event)
})
ctaButton.addEventListener('animationend', function (event) {
    console.log("animation end", event)
})
ctaButton.addEventListener('animationiteration', function (event) {
    console.log("animation iteration", event)
})