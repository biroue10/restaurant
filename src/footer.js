//we are going  to create the footer of our restaurant web page
function footer(){
    const footer = document.createElement('footer')
    const para = document.createElement('p')
    para.textContent='this is my footer'
    footer.classList.add('footer')
    footer.appendChild(para)
    return footer
}
export default footer