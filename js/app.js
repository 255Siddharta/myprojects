(function(){
    let rocketpieces = document.querySelectorAll('.rocket-body span')

    let rocket = document.querySelector('.rocket')

    let triggerStart = window.innerHeight /5;

    let rocketOffsetTop = rocket.rocketOffsetTop;

    document.addEventListener('scroll', (e) =>{
        if(window.scrollY > (rocketOffsetTop - triggerStart)){
            rocketpieces[0].classList.add('active');
            rocketpieces[1].classList.add('active');
        }else{
            rocketpieces[0].classList.remove('active');
            rocketpieces[1].classList.remove('active');

        }
    })

}())
