
function customModal(){
    var myModal=document.querySelector(".modal-section ");
    var images=Array.from(document.querySelectorAll(".producte-img"));
    var leftBtn=document.querySelector(".left-arrow ");
    var rightBtn=document.querySelector(".right-arrow ");
    var colseBtn=document.querySelector(".close-arrow ");
    var modalImg=document.querySelector(".modal-img");
    var currentIndex=0;
    var modlaFlag=false;


   function modalShow(){
       myModal.classList.add('show');
       modlaFlag=true;
   }


     function modalHidd(){
       myModal.classList.remove('show');
       var modlaFlag=false;

   }

    for( var i=0; i<images.length ; i++)
    {
        images[i].onclick =function(e){
            currentIndex=images.indexOf(e.target);
            modalShow();   
            modalImg.setAttribute("src" , e.target.getAttribute("src") );
        }
    }


    colseBtn.onclick=function(){
        modalHidd();
    }



    function nextImage(){
        currentIndex++;
        if (currentIndex >= images.length){
            currentIndex= 0;
        }
        modalImg.setAttribute("src" , images[currentIndex].getAttribute("src")) ;
    }

    
    function privImage(){
        --currentIndex;
         if (currentIndex <0){
            currentIndex= images.length -1;
        }
        modalImg.setAttribute("src" , images[currentIndex].getAttribute("src")) ;

    }

    rightBtn.onclick=function(){
        nextImage();
    }
    leftBtn.onclick=function(){
        privImage();
    }


    // keyboard  events  
    document.onkeydown = function(e){
     if (e.code == 'ArrowRight'){
        nextImage();
     } else if (e.code == 'ArrowLeft') {
         privImage();
        
     } 
     else if (e.code == 'Escape') {
         modalHidd();
  
     } 
    }

    document.onclick=function(e){
        console.log(e);
        if(modlaFlag == true){
            if(e.target.classList.contains("modal-section"))
            {
                modalHidd();
            }
        }
    }
 
}

customModal();