

    document.querySelector('.form').addEventListener('change',function(){
    document.querySelector('.hiden').style.display="block"

    let facture = Number(document.querySelector('.facture').value)
    let pourboire = Number(document.querySelector('.pourboir_input').value)

    document.querySelector('.pourboire_affiche').innerHTML = `${pourboire}%`  

    let pourboireDisplay = facture * pourboire / 100
    let factureTotal = facture + pourboireDisplay

    document.querySelector('.pourboire_display').placeholder = `${pourboireDisplay.toFixed(2)} $` 
    document.querySelector('.facture_display').placeholder = `${factureTotal.toFixed(2)} $` 

})
