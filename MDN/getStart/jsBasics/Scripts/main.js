const myImage = document.querySelector('img');

myImage.onclick = ()=>{
    const mySrc = myImage.getAttribute('src');
    if(mySrc === '../Images/fox.avif'){
        myImage.setAttribute('src', '../Images/images/firefox-icon.png');
    }  else if(mySrc === '../Images/images/firefox-icon.png'){
        myImage.setAttribute('src', '../Images/bmw.avif')
    }else{
        myImage.setAttribute('src', '../Images/fox.avif');
    }
    } 


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    const myName = prompt('Enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
}

myButton.onclick = ()=>{
    setUserName();
};

