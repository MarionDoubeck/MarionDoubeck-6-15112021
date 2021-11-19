function selectedOption(photographerMedia,mediaDirectory){ //écoute le clic sur une option et définit la propriété (option) sélectionnée
    const options=document.querySelectorAll(".option");
    var selectedProperty="";
    options.forEach(option=>{
        option.addEventListener("click",(e)=>{
            selectedProperty=option.textContent;
            if(!Array.from(option.classList).find(c=>c=='selected')){
                const temp=document.querySelector(".selected").textContent;
                document.querySelector(".selected").innerHTML=selectedProperty;
                option.innerHTML=temp;
            }
        sortPhotographerMedia(selectedProperty,photographerMedia,mediaDirectory)
        });
    });
}
    

function sortPhotographerMedia(selectedProperty,photographerMedia,mediaDirectory){ //affiche les media triés
    var sortedMedia=[];
    var media=[];
    const l=photographerMedia.length;
        for (let i=0;i<l;i++){
            media.push(photographerMedia[i]);
        }
    ///tri par ordre croissant des likes : ///
    if (selectedProperty=="Popularité"){
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
    }else if (selectedProperty=="Date"){
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
    }else if (selectedProperty=="Nom"){
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


