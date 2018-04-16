// obtain ref to article
const article = document.querySelector("#messages")
const fragment = document.createDocumentFragment()

//create message and append to article
let messageOne = document.createElement("section") 
messageOne.textContent = "Hey whats up lyndz?"
fragment.appendChild(messageOne)

//create message and append to fragment
let messageTwo = document.createElement("section") 
messageTwo.textContent = "Nothing much, doing anything fun this weekend?"
fragment.appendChild(messageTwo)
//create message and append to fragment

let messageThree = document.createElement("section") 
messageThree.textContent = "i'm seeing infinity war with some friends"
fragment.appendChild(messageThree)
//create message and append to fragment

let messageFour = document.createElement("section") 
messageFour.textContent = "cool! hope you enjoy it!"
fragment.appendChild(messageFour)
//create message and append to fragment

let messageFive = document.createElement("section") 
messageFive.textContent = "me to"
fragment.appendChild(messageFive)

//append fragment to the article
article.appendChild(fragment)


