const menuLoader = function() {
    
const menuHeading = document.createElement("h1")
menuHeading.innerText = "Menu"
content.appendChild(menuHeading)

for (let i=0;i<10;i++) {
    const listItem = document.createElement("li")    
    listItem.classList.add(`${i}`)
    listItem.innerText = `Dosa Number : ${i}`
    content.appendChild(listItem)
}}

export {menuLoader}