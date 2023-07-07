//create contact module
function createcontact(){
    const titre = document.createElement('h1')
    titre.textContent='contacts info'
    const contact = document.createElement('div')
    contact.classList.add('contact')
    contact.appendChild(titre)
    contact.appendChild(contactitem('Mama Bear','Chef','555-555-5554','totallyRealEmail@notFake.com'))
    contact.appendChild(contactitem('Papa Bear','Manager','555-555-5555','perfectlyRealEmail@notFake.com'))
    contact.appendChild(contactitem('Baby Bear','Waiter','555-555-5556','totallyRealEmail@notFake.com'))
    return contact
}
function contactitem(name, role, number, email){
    const contactelement = document.createElement('div')
    const nom = document.createElement('h3')
    nom.textContent=name
    const titre = document.createElement('p')
    titre.textContent=role
    const numero = document.createElement('p')
    numero.textContent=number
    const adresse_email = document.createElement('p')
    adresse_email.textContent=email
    contactelement.append(nom, titre,numero,adresse_email)
    return contactelement
}
function loadcontact(){
    const contact = document.createElement('div')
    contact.textContent=''
    contact.appendChild(createcontact())
    return contact
}
export default loadcontact
