let btnload =document.getElementById('btn');

btnload.addEventListener('click',
function(){
    const nomeCompleto = document.getElementById('nomeCompleto').value;
    const Km = parseInt(document.getElementById('Km').value);
    const fasciaDieta = document.getElementById('fasciaDieta').value;
    const prezzxKm = 0.21

     if(!nomeCompleto  ||  isNaN(Km)   || !fasciaDieta  ){
         alert('Completa tutte le caselle o assicurati ti aver inserito un numero ai Km ')
          window.location.reload();
     }

   let prezzoTot = Km * prezzxKm

   if (fasciaDieta === 'Minorenne') {
        prezzoTot = prezzoTot -(prezzoTot *20 / 100)    
   } else if (fasciaDieta === 'Senior'){
      prezzoTot = prezzoTot -(prezzoTot *40 / 100)
   }
});

