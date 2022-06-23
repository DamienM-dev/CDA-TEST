let congratulation = document.getElementById('button_congratulation');

//initalisation de départ
checked = false


congratulation.addEventListener('click', () => {
    if (checked) {
//Si la checkbox est coché
        document.getElementById('checkbox_translate').checked = false;
        congratulation.innerHTML ="accepter entrée CDA";
        checked = false;
    } else {
        //Si la checkbox est n'est pas coché
        document.getElementById('checkbox_translate').checked = true;
        congratulation.innerHTML ="Génial !";
        checked = true;
    }
});