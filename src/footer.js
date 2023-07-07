//we are going  to create the footer of our restaurant web page
function footer(){
    const footer = document.createElement('footer')
    const para = document.createElement('p')
    para.innerHTML='<p>Copyright &copy; <script>document.write(new Date().getFullYear())</script> BIROUE ISAAC All Rights Reserved</p>'
    footer.classList.add('footer')
    footer.appendChild(para)
    return footer
}
export default footer