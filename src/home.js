import main from "./main"

//Create home tab
function createhome(){
    const home = document.createElement('div')
    home.classList.add('home')
    home.classList.add('active')
    const titre = document.createElement('h1')
    const div1 = document.createElement('div')
    const paradiv1 = document.createElement('p')
    paradiv1.textContent='Beary\'s has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.'
    const titre3 = document.createElement('h3')
    titre3.textContent='Who are we?'
    div1.append(titre3,paradiv1)
    const div2 = document.createElement('div')
    const titre2 = document.createElement('h3')
    titre2.textContent='Hours'
    const p1 = document.createElement('p')
    p1.textContent='Sunday: 8am - 8pm'
    const p2 = document.createElement('p')
    p2.textContent='Monday: 6am - 6pm'
    const p3 = document.createElement('p')
    p3.textContent='Tuesday: 6am - 6pm'
    const p4 = document.createElement('p')
    p4.textContent='Wednesday: 6am - 6pm'
    const p5 = document.createElement('p')
    p5.textContent='Thursday: 6am - 10pm'
    const p6 = document.createElement('p')
    p6.textContent='Friday: 6am - 10pm'
    const p7 = document.createElement('p')
    p7.textContent='Saturday: 8am - 10pm'

    div2.append(titre2,p1,p2,p3,p3,p4,p5,p6,p7)
    const div3 = document.createElement('div')
    const paradiv3 = document.createElement('p')
    paradiv3.textContent='123 Forest Drive, Forestville, Maine'
    const titre4 = document.createElement('h3')
    titre4.textContent='Location'
    div3.append(titre4,paradiv3)
    titre.textContent='biroue isaac restaurant'
    home.append(titre, div1,div2,div3)
    return home
}

function loadhome(){
    const main = document.createElement('div')
    main.textContent=''
    main.appendChild(createhome())
    return main
}
export default loadhome