let qBlock=document.querySelectorAll(".question-container");
for(let i = 0 ; i<=qBlock.length-1 ; i++){
  
    qBlock[i].onclick=function(){
        for(let i = 0 ; i<=qBlock.length-1; i++){
            qBlock[i].classList.remove("active-q")
        }
        qBlock[i].classList.add("active-q")
    }
}