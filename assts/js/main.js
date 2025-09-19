
const customModal  =()=> {
    const myModal=document.querySelector(".modal-section ");
    const images=Array.from(document.querySelectorAll(".producte-img"));
    const leftBtn=document.querySelector(".left-arrow ");
    const rightBtn=document.querySelector(".right-arrow ");
    const closeBtn=document.querySelector(".close-arrow ");
    const modalImg=document.querySelector(".modal-img");
    let currentIndex=0;
    let modlaFlag=false;


   const modalShow =()=>{
       myModal.classList.add('show');
       modlaFlag=true;
   }

     const modalHidd=()=>{
       myModal.classList.remove('show');
       let modlaFlag=false;

   }

    

    images.forEach((img)=>{
        img.addEventListener("click",({target})=>{
            currentIndex=images.indexOf(target);
            modalShow();   
            modalImg.setAttribute("src" , target.getAttribute("src") );
        })
    } )

    const nextImage=()=>{
        currentIndex++;
        if (currentIndex >= images.length){
            currentIndex= 0;
        }
        modalImg.setAttribute("src" , images[currentIndex].getAttribute("src")) ;
    }

    
    const privImage=()=>{
        --currentIndex;
         if (currentIndex <0){
            currentIndex= images.length -1;
        }
        modalImg.setAttribute("src" , images[currentIndex].getAttribute("src")) ;

    }



    //  the close & next & prev  events  
    rightBtn.addEventListener("click" ,nextImage);
    leftBtn.addEventListener("click",privImage);
    closeBtn.addEventListener("click" , modalHidd);



    // keyboard  events  
    document.addEventListener("keydown",({code})=>{

     if (code == 'ArrowRight'){
        nextImage();
     } else if (code == 'ArrowLeft') {
         privImage();
        
     } 
     else if (code == 'Escape') {
         modalHidd();
  
     }})

    //  when  click  on the  modal  out will  clode  the  modal  
     document.addEventListener("click" , ({target})=>{
        if(modlaFlag == true){
                if(target.classList.contains("modal-section"))
                {
                        modalHidd();
                }
                }
      })


}
    
customModal();
