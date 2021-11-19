function imageFactory(data,mediaDirectory,photographerMedia,tabindex){
    const {title, image, id, likes, date, price } =data;
    const heart='  <i class="fa-solid fa-heart" id="'+title+'"></i>';
    function getMediaCardDOM(){
        const media=document.createElement('div');
        media.className="media";
        const display=document.createElement('img');
        const imageAdress="./assets/photographers/"+mediaDirectory+"/"+image;
        display.setAttribute("src",imageAdress);
        display.setAttribute("alt",title);
        display.setAttribute("tabindex",tabindex);
        display.addEventListener("click",(e)=>displayCarousel(e,"image",imageAdress,photographerMedia,mediaDirectory,title));
        media.appendChild(display);
        const titleAndLikes=document.createElement('div');
        titleAndLikes.className="titleAndLikes";
        const myTitle=document.createElement('div');
        myTitle.className="title";
        myTitle.textContent=title;
        titleAndLikes.appendChild(myTitle);
        const myLikes=document.createElement('div');
        myLikes.innerHTML=likes+heart;
        myLikes.setAttribute("aria-label","nombre de likes");
        titleAndLikes.appendChild(myLikes);
        media.appendChild(titleAndLikes);
        
        return media;
    }

    return { likes, title, date, getMediaCardDOM }

}

function videoFactory(data,mediaDirectory,photographerMedia,tabindex){
    const { video, id, likes, date, price } =data;
    var title=data.video.replaceAll('_',' ');
    title=title.replace('.mp4','');
    data.title=title;
    const heart='  <i class="fa-solid fa-heart" id="'+title+'"></i>';
    function getMediaCardDOM(){
        const media=document.createElement('div');
        media.className="media";
        const display=document.createElement('video');
        const videoAdress="./assets/photographers/"+mediaDirectory+"/"+video;
        display.src=videoAdress;
        display.autoplay=true;
        display.title=title;
        display.setAttribute("tabindex",tabindex);
        display.addEventListener("click",(e)=>displayCarousel(e,"video",videoAdress,photographerMedia,mediaDirectory,title));
        media.appendChild(display);
        const titleAndLikes=document.createElement('div');
        titleAndLikes.className="titleAndLikes";
        const myTitle=document.createElement('div');
        myTitle.className="title";
        myTitle.textContent=title;
        titleAndLikes.appendChild(myTitle);
        const myLikes=document.createElement('div');
        myLikes.innerHTML=likes+heart;
        myLikes.setAttribute("aria-label","nombre de likes");
        titleAndLikes.appendChild(myLikes);
        
        media.appendChild(titleAndLikes);
        return media;
    }

    return { likes, title, date, getMediaCardDOM }

}

function mediaFactory(data,mediaDirectory,photographerMedia,tabindex) {
    var mediaType=Object.keys(data)[3];
    if (mediaType=="image"){
        return imageFactory(data,mediaDirectory,photographerMedia,tabindex);
    }else{
        return videoFactory(data,mediaDirectory,photographerMedia,tabindex);
    }

}
