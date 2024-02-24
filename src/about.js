import { content } from "./home";

const aboutHeading = document.createElement('h1')
const aboutUs = document.createElement('div')
const contactHeading = document.createElement('h1')
const contactUs = document.createElement('div')

function aboutAdder() {
    aboutHeading.textContent = 'About Us'
    aboutUs.textContent = `Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500,
                            when an unknown printer took a galley of type and s
                            crambled it to make a type specimen book. It has survived
                            not only five centuries, but also the leap into 
                            electronic typesetting, remaining essentially unchanged.
                            PageMaker including versions of Lorem Ipsum.`

    contactHeading.textContent = "Contact Us"
    contactUs.textContent = `industry's standard dummy text ever since the 1500,
                            when an unknown printer took a galley of type and s`
        
    content.appendChild(aboutHeading)
    content.appendChild(aboutUs)
    content.appendChild(contactHeading)
    content.appendChild(contactUs)
}

export {aboutAdder}