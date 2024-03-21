// console.log('my script is linked');

// Cache one element using getElementById
let titleEl = document.getElementById('title');
console.log(titleEl);

// Cache one element using querySelector or querySelectorAll
let h2El = document.querySelector("h2");
console.log(h2El);

// Use the parent-child-sibling relationship to navigate between elements at least once (firstChild, lastChild, parentNode, nextElementSibling, etc.).
const container = document.getElementById('mainContainer');
const firstChild = container.firstChild;
const lastChild = container.lastChild;
console.log(firstChild);
console.log(lastChild);

let parentName = document.getElementById("comment").parentNode.nodeName;
console.log(parentName); //it should output div because div is the parent of the p element with comment class

const firstParagraph = document.querySelector("p");
const nextParagraph = firstParagraph.nextElementSibling;
console.log(nextParagraph);

// Iterate over a collection of elements to accomplish some task
let listEl = document.querySelectorAll('li');
console.log(listEl);

// listEl.forEach(listItem => {
//     console.log(listItem.className);
//     if (listItem.className === 'comment') {
//         console.log('i could do something with only these li')
//     } else {
//         console.log('and i could ignore these')
//         listItem.className = 'purple'
//         // this makes the class name purple
//         // but you can also use
//         listItem.classList.add('pinkText');
//         // you can see the entire class list using
//         console.log( listItem.classList);
//         console.log('CHECKING WHAT GETATTRIBUTE(CLASS) does')
//         console.log(listItem.getAttribute("class"));
//     }
// })

// Create at least one element using createElement (also uses appendChild)
const newPara = document.createElement("p");
newPara.innerText = "This is a new paragraph that I have inserted using createElement!";

document.body.appendChild(newPara);

// Use the DocumentFragment interface or HTML templating with the cloneNode method to create templated content
const fragment = document.createDocumentFragment();
const header = document.createElement("h1");
header.textContent = "DocumentFragmenting is cool!";
fragment.appendChild(header);

document.body.appendChild(fragment);

// Modify the HTML or text content of at least one element in response to user interaction using innerHTML, innerText, or textContent
let pEl = document.querySelector('.cool');
console.log(pEl);
pEl.textContent = 'Click me to change my color!';

//Modify the style and/or CSS classes of an element in response to user interactions using the style or classList properties.
pEl.style.textAlign = 'center';
pEl.style.color = 'hotpink';

// Event listener #1
pEl.addEventListener('click', function () {
    if (pEl.style.color === 'hotpink') {
        pEl.style.color = 'darkblue';
    } else {
        pEl.style.color = 'hotpink';
    }
});

// Event listener #2
document.getElementById('myBtn').addEventListener('click', function() {
    alert("Surprise!");
});


