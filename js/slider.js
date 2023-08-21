(function(){

    const sliders = [...document.querySelectorAll(".testimony_body")] 
    const ButtonNext = document.getElementById("next")
    const ButtonBefore = document.getElementById("before")
    let value;

    ButtonNext.addEventListener('click',()=>{
        changePosition(1);
    })

    ButtonBefore.addEventListener('click',()=>{
        changePosition(-1);
    })

    const changePosition = (add)=>{
        const currentTestimony = document.querySelector('.testimony_body--show').dataset.id
        value = parseInt(currentTestimony) 
        value+=add;  
        
        sliders[parseInt(currentTestimony)-1].classList.remove('testimony_body--show')
        // si 4 = 4 (data.id -> 3) || 0 = 0 (data.id->1)
        if(value==sliders.length+1 || value==0){
            // si esto pasa quiero q value cambie
            // si value = 0 entonces no quiero q tenga 0
            // sino el ultimo elemento de sliders q es 3
            // :1 en caso contrario si rebazamos el # de sliders
            // mandame al primero
            value= value==0 ? sliders.length :1;
        }
       
        sliders[value-1].classList.add('testimony_body--show')
    }

})();