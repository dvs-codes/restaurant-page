import { content } from "./home";

const menuHeading = document.createElement('h1')

function menuAdder() {
    menuHeading.textContent = 'Menu'
    content.appendChild(menuHeading)

    for (let i=0; i<9; i++) {
        const menuItem = document.createElement('div')
        menuItem.textContent = `item number ${i}`
        content.appendChild(menuItem)
    }
        
}

export {menuAdder}