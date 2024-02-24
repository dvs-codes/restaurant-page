import {homeAdder , content} from "../src/home";
import {aboutAdder} from "../src/about";
import { menuAdder } from "./menu";

const homeButton = document.querySelector('.home')
const menuButton = document.querySelector('.menu')
const aboutButton = document.querySelector('.about')

homeAdder()

homeButton.addEventListener('click',() => {
    content.textContent = ""
    homeAdder()

})

menuButton.addEventListener('click',() => {
    content.textContent = ""
    menuAdder()
})

aboutButton.addEventListener('click',() => {
    content.textContent = ""
    aboutAdder()

})



