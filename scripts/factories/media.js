function imageFactory(data,mediaDirectory,photographerMedia){
    const {title, image, id, likes, date, price } =data;
    const heart='  <i class="fa-solid fa-heart" id="'+title+'"></i>';
    function getMediaCardDOM(){
        const media=document.createElement('div');
        media.className="media";
        const display=document.createElement('img');
        const imageAdress="../assets/photographers/"+mediaDirectory+"/"+image;
        display.setAttribute("src",imageAdress);
        display.addEventListener("click",(e)=>displayCarousel(e,"image",imageAdress,photographerMedia,mediaDirectory));
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

function videoFactory(data,mediaDirectory,photographerMedia){
    const { video, id, likes, date, price } =data;
    var title=data.video.replaceAll('_',' ');
    title=title.replace('.mp4','');
    data.title=title;
    const heart='  <i class="fa-solid fa-heart" id="'+title+'"></i>';
    function getMediaCardDOM(){
        const media=document.createElement('div');
        media.className="media";
        const display=document.createElement('video');
        const videoAdress="../assets/photographers/"+mediaDirectory+"/"+video;
        display.src=videoAdress;
        display.autoplay=true;
        display.addEventListener("click",(e)=>displayCarousel(e,"video",videoAdress,photographerMedia,mediaDirectory));
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

function mediaFactory(data,mediaDirectory,photographerMedia) {
    var mediaType=Object.keys(data)[3];
    if (mediaType=="image"){
        return imageFactory(data,mediaDirectory,photographerMedia);
    }else{
        return videoFactory(data,mediaDirectory,photographerMedia);
    }

}



function sortPhotographerMedia(e,sortingMenu,photographerMedia,mediaDirectory){
    const selectedProperty=sortingMenu.value;
    var sortedMedia=[];
    var media=[];
    const l=photographerMedia.length;
        for (let i=0;i<l;i++){
            media.push(photographerMedia[i]);
        }
    ///tri par ordre croissant des likes : ///
    if (selectedProperty=="likes"){
        var allLikes=[];
        for (let i=0; i<l; i++ ){
            allLikes.push(media[i].likes)
        }
        allLikes.sort(function(a,b){return a-b});
        for (let i=0; i<l; i++ ){
            for (let j=0; j<l ; j++){
                if (media[j].likes==allLikes[i]){
                    sortedMedia.push(media[j]);
                    media[j]="";
                }
            }
        }
        displayMedia(sortedMedia,mediaDirectory);
    ///tri par ordre croissant des dates : ///
    }else if (selectedProperty=="date"){
        var allDates=[];
        for (let i=0; i<l; i++ ){
            allDates.push(media[i].date)
        }
        allDates.sort();
        for (let i=0; i<l; i++ ){
            for (let j=0; j<l ; j++){
                if (media[j].date==allDates[i]){
                    sortedMedia.push(media[j]);
                    media[j]="";
                }
            }
        }
        displayMedia(sortedMedia,mediaDirectory);
    ///tri par ordre alphabetique des noms : ///
    }else if (selectedProperty=="title"){
        var allTitles=[];
        for (let i=0; i<l; i++ ){
            allTitles.push(media[i].title)
        }
        allTitles.sort();
        for (let i=0; i<l; i++ ){
            for (let j=0; j<l ; j++){
                if (media[j].title==allTitles[i]){
                    sortedMedia.push(media[j]);
                    media[j]="";
                }
            }
        }
        displayMedia(sortedMedia,mediaDirectory);
    }else{
        console.log("erreur dans le menu de selection");
    }
}
