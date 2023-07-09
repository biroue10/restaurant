import main from "./main"

//Create home tab
function createhome(){
    const home = document.createElement('div')
    home.classList.add('home')
    home.classList.add('active')
    const titre = document.createElement('h1')
    const div1 = document.createElement('div')
    const paradiv1 = document.createElement('p')
    paradiv1.textContent='Etiam dapibus eget felis eget dictum. Duis dictum facilisis urna, id ultricies nunc lobortis a. Fusce eget augue vitae enim blandit egestas. Donec sed elit enim. Quisque magna enim, interdum in velit quis, consequat hendrerit ex. Sed tincidunt velit congue aliquet eleifend. Curabitur ultricies, erat vitae commodo commodo, tellus nisl vulputate nunc, id elementum dolor augue a lacus. Sed risus magna, viverra ac ligula quis, lobortis commodo diam. Fusce id luctus erat, et dapibus tortor. Fusce ut purus ipsum. Nam dignissim sem sit amet odio sodales, id maximus massa fermentum. Sed elit ligula, rhoncus id sollicitudin id, scelerisque vel arcu. Donec felis neque, condimentum quis lobortis vitae, bibendum accumsan sapien.'
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
    const paradiv4 = document.createElement('div')
    paradiv4.classList.add('frame')
    paradiv4.innerHTML=`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13292.94349687302!2d-7.557224000000001!3d33.59918390000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7ccf77c009ce3%3A0x89bdfd73a580b00b!2sAmoud%20P%C3%A2tisserie%20A%C3%AFn%20Sebaa!5e0!3m2!1sfr!2sma!4v1688901444369!5m2!1sfr!2sma" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    const titre4 = document.createElement('h3')
    titre4.textContent='Location'
    div3.append(titre4,paradiv3,paradiv4)
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