function displayCarousel(e,typeOfMedia,mediaAdress,photographerMedia,mediaDirectory){
    carousel=document.getElementById("carousel_modal");
    carousel.style.display = "block";
    if (typeOfMedia=="image"){
        document.querySelector(".carousel_media").innerHTML="<img src="+mediaAdress+">";
    }else if(typeOfMedia=="video"){
        document.querySelector(".carousel_media").innerHTML="<video src="+mediaAdress+" autoplay></video>";
    }else{
        console.log("error in display carousel");
    }
    const media=mediaAdress.split('/')[mediaAdress.split('/').length-1];//récupère le nom du fichier
    const place=placeInCarousel(photographerMedia,media);
    const left=document.getElementById("left-arrow");
    left.innerHTML='<i class="fas fa-chevron-left"></i>';
    left.addEventListener("click",(e)=>changeMedia(e,photographerMedia,place-1,mediaDirectory));
    const right=document.getElementById("right-arrow");
    right.innerHTML='<i class="fas fa-chevron-right"></i>';
    right.addEventListener("click",(e)=>changeMedia(e,photographerMedia,place+1,mediaDirectory));
}

function closeCarousel(){
    carousel=document.getElementById("carousel_modal");
    carousel.style.display = "none";
    document.querySelector(".carousel_media").innerHTML="";
}

function placeInCarousel(photographerMedia,media){
    return photographerMedia.findIndex(object=>object.image==media||object.video==media);
}

function changeMedia(e,photographerMedia,place,mediaDirectory){ //determine typeOfMedia et mediaAdress
    //faire un carousel infini
    if (place<0){place=photographerMedia.length-1}
    else if (place>photographerMedia.length-1){place=0};
    //
    var typeOfMedia="";
    var mediaAdress="";
    if(Object.keys(photographerMedia[place]).find(key=>key=="image")){
        typeOfMedia="image";
        const image=photographerMedia[place].image;
        mediaAdress="../assets/photographers/"+mediaDirectory+"/"+image;
    }else if(Object.keys(photographerMedia[place]).find(key=>key=="video")){
        typeOfMedia="video";
        const video=photographerMedia[place].video;
        mediaAdress="../assets/photographers/"+mediaDirectory+"/"+video;
    }else{
        console.log("problem in changeMedia()");
    }
    displayCarousel(e,typeOfMedia,mediaAdress,photographerMedia,mediaDirectory);
}
