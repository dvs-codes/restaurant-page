const contactLoader = function () {
    const contactHeading = document.createElement("h1")
    contactHeading.innerText = "Contact Us"
    content.appendChild(contactHeading)

    const emailAddress = document.createElement("h2")
    emailAddress.innerText = "whatever@gmail.com"
    const phoneNumber = document.createElement("h2")
    phoneNumber.innerText = '132113213132'
    content.appendChild(emailAddress)
    content.appendChild(phoneNumber)
}

export {contactLoader}