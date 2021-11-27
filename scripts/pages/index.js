async function getPhotographers() { //lit le fichier json pour en récupérer les données
    const myJsonData=await loadJsonData();
    const photographers=myJsonData.photographers;
    return photographers;
}

async function displayData(photographers) { //affiche les photographes
    const photographersSection = document.querySelector(".photographer_section");
    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
};

async function init() {
    // Récupère les datas des photographes
    const photographers = await getPhotographers();
    displayData(photographers);
};

init();
    