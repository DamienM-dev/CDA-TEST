// J'initialise again 

let again = false;
let play = document.getElementById('play');

// L'utilisateur va d'abord commencer la chanson
do {
   
   play.addEventListener('click', NombreBolee);
   
   function NombreBolee() {
      
      let p = document.createElement('p');
      
      let nbr_bolee = prompt("Combien de bolées vous reste t'il à boire ?");
      
      
      
      if (nbr_bolee > 1 && nbr_bolee <= 99 ) {
         alert(nbr_bolee + " bolées de cidre sur le mur, " + nbr_bolee + " bolées sans alcool.\n Bois en un et au suivant ! " + (nbr_bolee -1) + " bolées de cidre sur le mur.");
         
         
         p.innerHTML += nbr_bolee + " bolées de cidre sur le mur, " + nbr_bolee + " bolées sans alcool.<br />Bois en un et au suivant ! " + (nbr_bolee -1) + " bolées de cidre sur le mur.";
         document.body.append(p);
         document.querySelector('#block_bouton').prepend(p);
         

      } else if ( nbr_bolee == 1) {
         alert(nbr_bolee + " bolée de cidre sur le mur," + nbr_bolee + " bolée sans alcool.\n Bois en un et au suivant ! Plus de bolées de cidre sur le mur.");

         p.innerHTML += nbr_bolee + " bolée de cidre sur le mur, " + nbr_bolee + " bolée sans alcool.<br /> Bois en un et au suivant ! Plus de bolées de cidre sur le mur.";
         document.body.append(p);
         document.querySelector('#block_bouton').prepend(p);
   

      } else if ( nbr_bolee >= 100) {
         alert(nbr_bolee + " bolées ! Il serait temps d'investir dans un bar !");

         p.innerHTML += nbr_bolee + " bolées ! Il serait temps d'investir dans un bar !";
         document.body.append(p);
         document.querySelector('#block_bouton').prepend(p);
      

       } else if (nbr_bolee == 0) {
         alert("Plus de bolées de cidre sur le mur, plus de bolées sans alcool.\n Vas au supermarché pour en acheter, 99 bolées de cidre sur le mur.");

        p.innerHTML += "Plus de bolées de cidre sur le mur, plus de bolées sans alcool.<br /> Vas au supermarché pour en acheter, 99 bolées de cidre sur le mur."
        document.body.append(p);
        document.querySelector('#block_bouton').prepend(p);
      

         // Si ce n'est pas un nombre ou bien si il est négatif
      } else if ( isNaN(nbr_bolee) == true || nbr_bolee < 0 || IsEmpty(nbr_bolee) == true) {
         alert("Hey,que fait tu ?");

         p.innerHTML += "Le compte est impossible !";
        document.body.append(p);
        document.querySelector('#block_bouton').prepend(p);
      }
   }

   NombreBolee();

   // Je demande si l'utilisateur veux rejouer ?
   again = confirm("Souhaitez-vous d'autres bolées ?!");
   
   //si il confirme alors again = true et une autre chanson commencera !
}  while(again)

