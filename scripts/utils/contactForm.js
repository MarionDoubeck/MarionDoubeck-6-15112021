const modal = document.getElementById("contact_modal");
const main=document.getElementById("main");

function displayModal() {
	modal.style.display = "block";
    modal.setAttribute('aria-hidden','false');
    main.setAttribute('aria-hidden','true');
    document.addEventListener('keydown',(e)=>{
        if(e.keyCode==27){
            closeModal()
        }
    }) 
}

function closeModal() {
    modal.style.display = "none";
    modal.setAttribute('aria-hidden','true');
    main.setAttribute('aria-hidden','false');
}

