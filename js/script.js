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
let commentsEls = document.getElementsByClassName('note');
console.log(commentsEls);

for(let commentEl of commentsEls) {
    console.log(commentEl);
}

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
    if (window.confirm("Press this button")) {
        txt = "You pressed OK and some text appeared!";
    } else {
        txt = "You pressed cancel and this new text appeared!";
    }
    document.getElementById("validationText").innerHTML = txt;
});

// Use at least two BOM properties or methods (BOM used in eventlistener above in window.confirm)
console.log("Screen width is " + screen.width, "px");
console.log("Screen width is " + screen.height, "px");

// Include at least one form and/or input with DOM event-based validation. 
//(This can be the same form or input as the one above, but should include event-based validation in addition to the HTML attribute validation.)
document.getElementById('signup-form').addEventListener('submit', function (event) {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirm-password').value;

    // Validate username
    if (username.trim() === '' || username.length < 8 || username.length > 16) {
        document.getElementById('username-error').textContent = 'Username must be 8 to 16 characters long.';
        event.preventDefault();
    } else {
        document.getElementById('username-error').textContent = '';
    }

    if (confirmPassword !== password) {
        document.getElementById('confirm-password-error').textContent = 'Passwords do not match.';
        event.preventDefault();
    } else {
        document.getElementById('confirm-password-error').textContent = '';
    }
});

