import './style.css';
import main from './main';
import footer from './footer';
//we are going to create our header in this file 
function header(){
    const header = document.createElement('header')
    header.classList.add('header')
    const navbar = document.createElement('nav')
    const liste = document.createElement('ul')
    const liste_element1 = document.createElement('li')
    liste_element1.classList.add('element')
    liste_element1.textContent='home'
    const liste_element2 = document.createElement('li')
    liste_element2.classList.add('element')
    liste_element2.textContent='menu'
    const liste_element3 = document.createElement('li')
    liste_element3.classList.add('element')
    liste_element3.textContent='contact'
    liste.append(liste_element1,liste_element2,liste_element3)
    navbar.appendChild(liste)
    header.appendChild(navbar)
    return header
}
//This is tha last function to call
function initializeWebsite(){
    const content = document.getElementById('content')
    content.append(header(),main(),footer())
    const home = document.querySelector('.home')
    const menu = document.querySelector('.menu')
    const contact = document.querySelector('.contact')
    menu.parentElement.style.display='none'
    contact.parentElement.style.display='none'
    home.parentElement.style.display='block'
    const li = document.querySelectorAll('.element')
    li.forEach(function(element){
        element.addEventListener('click',(element)=>{
            if(element.target.textContent==='home'){
            menu.parentElement.style.display='none'
            contact.parentElement.style.display='none'
            home.parentElement.style.display='block'
            }
            else if(element.target.textContent==='menu'){
                home.parentElement.style.display='none'
                contact.parentElement.style.display='none'
                menu.parentElement.style.display='block'
            }
            else if(element.target.textContent==='contact'){
                home.parentElement.style.display='none'
                menu.parentElement.style.display='none'
                contact.parentElement.style.display='block'
            }
        })
    })
}
export default initializeWebsite