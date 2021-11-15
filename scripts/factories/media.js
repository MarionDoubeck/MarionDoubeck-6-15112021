function imageFactory(data,mediaDirectory){
    const {title, image, id, likes, date, price } =data;
    const heart='  <i class="fa-solid fa-heart"></i>';
    function getMediaCardDOM(){
        const media=document.createElement('div');
        media.className="media";
        const display=document.createElement('img');
        display.setAttribute("src","../assets/photographers/"+mediaDirectory+"/"+image);
        media.appendChild(display);
        const titleAndLikes=document.createElement('div');
        titleAndLikes.className="titleAndLikes";
        const myTitle=document.createElement('div');
        myTitle.className="title";
        myTitle.textContent=title;
        titleAndLikes.appendChild(myTitle);
        const myLikes=document.createElement('div');
        myLikes.innerHTML=likes+heart;
        titleAndLikes.appendChild(myLikes);

        media.appendChild(titleAndLikes);
        return media;
    }

    return { likes, title, date, getMediaCardDOM }

}

function videoFactory(data,mediaDirectory){
    const { video, id, likes, date, price } =data;
    const heart='  <i class="fa-solid fa-heart"></i>';
    var title=data.video.replaceAll('_',' ');
    title=title.replace('.mp4','');
    function getMediaCardDOM(){
        const media=document.createElement('div');
        media.className="media";
        const display=document.createElement('video');
        display.src="../assets/photographers/"+mediaDirectory+"/"+video;
        display.autoplay=true;
        media.appendChild(display);
        const titleAndLikes=document.createElement('div');
        titleAndLikes.className="titleAndLikes";
        const myTitle=document.createElement('div');
        myTitle.className="title";
        myTitle.textContent=title;
        titleAndLikes.appendChild(myTitle);
        const myLikes=document.createElement('div');
        myLikes.innerHTML=likes+heart;
        titleAndLikes.appendChild(myLikes);

        media.appendChild(titleAndLikes);
        return media;
    }

    return { likes, title, date, getMediaCardDOM }

}

function mediaFactory(data,mediaDirectory) {
    var mediaType=Object.keys(data)[3];
    if (mediaType=="image"){
        return imageFactory(data,mediaDirectory);
    }else{
        return videoFactory(data,mediaDirectory);
    }

}