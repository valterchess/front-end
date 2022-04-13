'use strict'
const switcher = document.querySelector(".btn");

// função responsável por lterar os valores do botão e 
switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    var className = document.body.className;

    this.textContent = (className == "light-theme") ? "Dark" : "Light";

    console.log(`current class Name: ${className}`);
});