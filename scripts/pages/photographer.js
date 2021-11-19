async function getPhotographerDataAndMedia(photographId) {        
    const myJsonData=await loadJsonData();
    const photographers=myJsonData.photographers;
    const photographerData=photographers.find(photographer=>photographer.id==photographId);
    const photographerMedia=myJsonData.media.filter(medium=>medium.photographerId==photographId);
    return [photographerData,photographerMedia];
}

async function displayHeaderData(photographerData) {
    const headerSection = document.querySelector(".photograph-header");
    const h2=document.createElement('h2');
    h2.setAttribute("aria-label","Nom du photographe"+photographerData.name);
    h2.innerHTML=photographerData.name;
    const h3=document.createElement('h3');
    h3.setAttribute("aria-label","Lieu d'activité du photographe"+photographerData.city+", "+photographerData.country);
    h3.innerHTML=photographerData.city+", "+photographerData.country;
    const h4=document.createElement('h4');
    h4.innerHTML=photographerData.tagline;
    h4.setAttribute("aria-label","devise du photographe"+photographerData.tagline);
    const img = document.createElement( 'img' );
    img.setAttribute("alt","portrait du photographe");
    img.setAttribute("src", "./assets/photographers/Photographers ID Photos/"+photographerData.portrait);

    const left=document.createElement("div");
    headerSection.appendChild(left);
    left.appendChild(h2);
    left.appendChild(h3);
    left.appendChild(h4);
    headerSection.appendChild(left.previousElementSibling);
    headerSection.appendChild(img);
}; 

async function displayMedia(photographerMedia,mediaDirectory){
    const mediaContainer=document.querySelector(".media_container");
    mediaContainer.innerHTML="";
    var totalLikes=0;
    var tabindex=0;
    photographerMedia.forEach(element => {
        tabindex+=2;
        const mediaModel = mediaFactory(element,mediaDirectory,photographerMedia,tabindex);
        element.title=mediaModel.title;
        const mediaCardDOM = mediaModel.getMediaCardDOM();
        mediaContainer.appendChild(mediaCardDOM);
        totalLikes+=element.likes;
    });
    displayTotalLikes(totalLikes);
    manageLikes(totalLikes,photographerMedia,mediaDirectory);
}

async function displayLikesAndPrice(price){
    document.querySelector(".price").innerHTML=price+"€/jour ";
}

async function initPhotographer() {
    //récupère l'ID du photographe
    const id=window.location.href.split("=")[1];
    // Récupère les datas des photographes
    const allPhotographerData = await getPhotographerDataAndMedia(id);
    const photographerData = allPhotographerData[0];
    const photographerMedia = allPhotographerData[1];
    document.getElementById("photographerName").innerHTML=photographerData.name;
    var mediaDirectory=photographerData.name.split(' ');
    mediaDirectory.pop();
    //Affiche les données du photographe
    displayHeaderData(photographerData);
    //Affiche les media du photographe
    displayMedia(photographerMedia,mediaDirectory);
    //Affiche le cadre du bas
    displayLikesAndPrice(photographerData.price);
    //Menu de selection
    selectedOption(photographerMedia,mediaDirectory);
};

initPhotographer() 


/* mettre un onfocus if img ou video then :
display.addEventListener('keydown',(e)=>{
    if(e.keyCode==16){
        displayCarousel(e,"image",imageAdress,photographerMedia,mediaDirectory,title)
    }}); */