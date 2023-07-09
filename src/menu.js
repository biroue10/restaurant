import image1 from './menu1.jpg'
import image2 from './menu2.jpg'
import image3 from './menu3.jpg'
//create menu tab
function createmenu(){
    const image_menu1 = new Image()
    const image_menu2 = new Image()
    const image_menu3 = new Image()
    image_menu1.src=image1
    image_menu2.src=image2
    image_menu3.src=image3
    const menu2 = document.createElement('div')
    const titre = document.createElement('h1')
    titre.textContent='our menu'
    menu2.classList.add('menu')
    const para1 = document.createElement('p')
    para1.textContent="this is the first paragraphe"
    para1.appendChild(image_menu1)
    const para2 = document.createElement('p')
    para2.textContent='this is the second paragraphe'
    para2.appendChild(image_menu2)
    const para3 = document.createElement('p')
    para3.textContent="this is the third paragraphe"
    para3.appendChild(image_menu3)
    menu2.append(titre,para1,para2,para3)

    return menu2
}

function loadmenu(){
    const menu = document.createElement('div')
    menu.appendChild(createmenu())
    return menu
}
export default loadmenu