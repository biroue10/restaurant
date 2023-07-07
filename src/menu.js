//create menu tab
function createmenu(){
    const menu2 = document.createElement('div')
    const titre = document.createElement('h1')
    titre.textContent='our menu'
    menu2.classList.add('menu')
    const para1 = document.createElement('p')
    para1.textContent="this is the first paragraphe"
    const para2 = document.createElement('p')
    para2.textContent='this is the second paragraphe'
    const para3 = document.createElement('p')
    para3.textContent="this is the third paragraphe"
    menu2.append(titre,para1,para2,para3)

    return menu2
}

function loadmenu(){
    const menu = document.createElement('div')
    menu.appendChild(createmenu())
    return menu
}
export default loadmenu