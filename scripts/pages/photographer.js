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
    h2.innerHTML=photographerData.name;
    const h3=document.createElement('h3');
    h3.innerHTML=photographerData.city+", "+photographerData.country;
    const h4=document.createElement('h4');
    h4.innerHTML=photographerData.tagline;
    const img = document.createElement( 'img' );
    img.setAttribute("src", "../assets/photographers/Photographers ID Photos/"+photographerData.portrait);

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
    photographerMedia.forEach(element => {
        const mediaModel = mediaFactory(element,mediaDirectory);
        const mediaCardDOM = mediaModel.getMediaCardDOM();
        mediaContainer.appendChild(mediaCardDOM);
    });
}

async function initPhotographer() {
    //récupère l'ID du photographe
    const id=window.location.href.split("=")[1];
    // Récupère les datas des photographes
    const allPhotographerData = await getPhotographerDataAndMedia(id);
    const photographerData = allPhotographerData[0];
    const photographerMedia = allPhotographerData[1];

    var mediaDirectory=photographerData.name.split(' ');
    mediaDirectory.pop();
    //Affiche les données du photographe
    displayHeaderData(photographerData);
    //Affiche les media du photographe
    displayMedia(photographerMedia,mediaDirectory);
};


initPhotographer() 
