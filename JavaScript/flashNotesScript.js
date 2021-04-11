
function callModal(modalID) {
    const modal = document.getElementById(modalID);

    if(modal){
    modal.classList.add('show')
    modal.addEventListener('click', (e) =>{
        if(e.target.id == modalID || e.target.className == 'fechar'){
            modal.classList.remove('show')
        }
    })
 }
}

const butn =  document.getElementById('containerMain')
butn.addEventListener('click', function () {
        callModal('modal-promocao')
})