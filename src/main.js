import loadhome from "./home"
import loadmenu from "./menu"
import loadcontact from "./contact"
//we are going to the main section of our restaurant web page

function main(){
    const main = document.createElement('div')
    main.append(loadhome(),loadmenu(),loadcontact())
    return main
}
export default main