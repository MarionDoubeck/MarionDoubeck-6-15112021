function displayTotalLikes(totalLikes){
    document.querySelector(".photographerLikes").innerHTML=totalLikes+'  <i class="fa-solid fa-heart"></i>';
}

function manageLikes(totalLikes,photographerMedia,mediaDirectory){
    const hearts=Array.from(document.getElementsByClassName("fa-heart"));
    hearts.forEach(heart => {
        heart.addEventListener("click",()=>{
            var mediaLikes=parseInt(heart.previousSibling.textContent,10);
            mediaLikes++;
            totalLikes++;
            addLikeInPhotographerMedia(photographerMedia,mediaLikes,heart.id);
            displayMedia(photographerMedia,mediaDirectory);
            displayTotalLikes(totalLikes);
        })
    })
}

function addLikeInPhotographerMedia(photographerMedia,mediaLikes,title){
    let media=findObjectByKey(photographerMedia,"title",title);
    media.likes=mediaLikes;
    return photographerMedia
}

function findObjectByKey(array, key, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i][key] === value) {
            return array[i];
        }
    }
    return null;
}