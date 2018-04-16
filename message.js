// obtain ref to article
const article = document.querySelector("#messages")
const fragment = document.createDocumentFragment()


database.messages.forEach(message => {
    //create section
    let section = document.createElement("section")
    let span = document.createElement("span")
    span.textContent = message
    section.appendChild(span)
    fragment.appendChild(section)
});

//append fragment to the article
article.appendChild(fragment)


