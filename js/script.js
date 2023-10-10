let btnload =document.getElementById('btn');

btnload.addEventListener('click',
function(){
    const nomeCompleto = document.getElementById('nomeCompleto').value;
    const Km = parseInt(document.getElementById('Km').value);
    const fasciaDieta = document.getElementById('fasciaDieta').value;
    const prezzxKm = 0.21

    // if((nomeCompleto === null ||  Km === null &&  || fasciaDieta === null  )){
    //     alert('fill all columns')
        
    // }

   let prezzoTot = Km * prezzxKm
   console.log(prezzoTot);

   if (fasciaDieta < 18) {
        prezzoTot = prezzoTot -(prezzoTot *20 / 100)    
        console.log(prezzoTot); 
   }
});