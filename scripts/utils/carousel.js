function displayCarousel(e,typeOfMedia,mediaAdress){
    carousel=document.getElementById("carousel_modal");
    carousel.style.display = "block";
    if (typeOfMedia=="image"){
        document.querySelector(".carousel_media").innerHTML="<img src="+mediaAdress+">";
    }else if(typeOfMedia=="video"){
        document.querySelector(".carousel_media").innerHTML="<video src="+mediaAdress+" autoplay></video>";
    }else{
        console.log("error in display carousel");
    }
    
    document.getElementById("left-arrow").innerHTML='<i class="fas fa-chevron-left" onclick="prevMedia()" ></i>';
    document.getElementById("right-arrow").innerHTML='<i class="fas fa-chevron-right" onclick="nextMedia()" ></i>';
}

function closeCarousel(){
    carousel=document.getElementById("carousel_modal");
    carousel.style.display = "none";
    document.querySelector(".carousel_media").innerHTML="";
}

function prevMedia(){
    alert("coucou");
}

function nextMedia(){

}
