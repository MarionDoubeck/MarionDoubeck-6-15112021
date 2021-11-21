//navigation clavier du menu de selection de tri des media
function adaMenu(){
    const sortingMenu=document.getElementById("sortingMenu");
    const option1=sortingMenu.children[0];
    const option2=sortingMenu.children[1];
    const option3=sortingMenu.children[2];
    var focusedOption="";
    document.addEventListener('keydown',(e)=>{
        if(e.keyCode==38 && document.activeElement==sortingMenu){//up
            e.preventDefault();
            if (focusedOption=="" || focusedOption==option2){
                focusedOption=option1;
                console.log("le focus est sur : ",document.activeElement);
                console.log(option1);
            }else if(focusedOption==option1){
                option3.focus();
                focusedOption=option3;
                document.activeElement.children[2].focus();
                console.log("le focus est sur : ",document.activeElement);
                console.log(option3);
            }else if(focusedOption==option3){
                option2.focus();
                focusedOption=option2;
                document.activeElement.children[1].focus();
                console.log("le focus est sur : ",document.activeElement);
                console.log(option2);
            }else{ 
                null
            }
        }else if (e.keyCode==40 && document.activeElement==sortingMenu){//down
            e.preventDefault();
            if (focusedOption=="" || focusedOption==option3){
                option1.focus();
                focusedOption=option1;
                console.log("le focus est sur : ",document.activeElement);
                console.log(option1);
            }else if(focusedOption==option1){
                option2.focus();
                focusedOption=option2;
                console.log("le focus est sur : ",document.activeElement);
                console.log(option2);
            }else if(focusedOption==option2){
                option3.focus();
                focusedOption=option3;
                console.log("le focus est sur : ",document.activeElement);
                console.log(option3);
            }else{ 
                null
            }
        }
    })
}

/* <div class="sort" aria-label="triez les photos par titre, date ou popularité">Trier par
        <container id="sortingMenu" aria-haspopup="true"  role="menu" tabindex="0">
          <div class="option selected">Nom</div>
          <div class="option">Date</div>
          <div class="option last">Popularité</div>
        </container>
      </div> */