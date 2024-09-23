import "./styles.css"
import { homeLoader } from "./home"
import { menuLoader } from "./menu"
import { contactLoader } from "./contact"
homeLoader()

const contentCleaner = function() {
    const content = document.getElementById('content')
    content.innerText = ""
}

const homeButton = document.getElementById('home')
const menuButton = document.getElementById('menu')
const contactButton = document.getElementById('contact')



homeButton.addEventListener("click", () => {
    contentCleaner()
    homeLoader()
})

menuButton.addEventListener("click", () => {
    contentCleaner()
    menuLoader()
})

contactButton.addEventListener('click', () => {
    contentCleaner()
    contactLoader()
})