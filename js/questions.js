(function(){

    const titlequestions = [...document.querySelectorAll(".questions_title")];
    // console.log(titlequestions);
    // console.time('forEach()')
    titlequestions.forEach(question =>{
        question.addEventListener('click',()=>{
            // alert("ya le distes click. PERFECTO")
            let height =0;
            let answer = question.nextElementSibling; /*hermano de h3 es p*/
            let itsparent = question.parentElement.parentElement;
            
            itsparent.classList.toggle('questions_padding--add')
            question.children[0].classList.toggle('questions_arrow--rotate')

        if (answer.clientHeight==0) {
            // si tiene height 0 , entonces la variale height 
            // tenga el alto minimo para q se muestre
            height = answer.scrollHeight;
        }
        console.log(height)
           answer.style.height = `${height}px`
           
        })
    })
    // console.timeEnd('forEach()')























    
})();