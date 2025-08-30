
function customModal(){
    var myModal=document.querySelector(".modal-section ");
    var images=Array.from(document.querySelectorAll(".producte-img"));
    var leftBtn=document.querySelector(".left-arrow ");
    var rightBtn=document.querySelector(".right-arrow ");
    var colseBtn=document.querySelector(".close-arrow ");
    var modalImg=document.querySelector(".modal-img");
    var currentIndex=0;


   function modalShow(){
       myModal.classList.remove('d-none');
   }


     function modalHidd(){
       myModal.classList.add('d-none');
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
        modalImg.setAttribute("src" , images[currentIndex].getAttribute("src")) ;
    }

     rightBtn.onclick=function(){
        nextImage();
    }

    function privImage(){
        --currentIndex;
        modalImg.setAttribute("src" , images[currentIndex].getAttribute("src")) ;

    }

     leftBtn.onclick=function(){
        privImage();
    }


 
}

customModal();