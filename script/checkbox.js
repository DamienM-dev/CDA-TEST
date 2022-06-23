let congratulation = document.getElementById('button_congratulation');

//initalisation de départ
checked = false


congratulation.addEventListener('click', () => {
    if (checked) {
//Si la checkbox est coché
        document.getElementById('checkbox_translate').checked = false;
        checked = false;
    } else {
//Si la checkbox est n'est pas coché
        document.getElementById('checkbox_translate').checked = true;
        checked = true;
    }
})