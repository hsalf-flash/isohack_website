// When the Page Will be load, 
window.onload = () => {
    location.href = "#navbar_section";
    document.getElementById('home_bar').style.borderLeft = "3px solid rebeccapurple";
    document.querySelector('#home_bar span:nth-child(2)').style.display = "inline";
}

// When the user clicks on any Scrollbar Link
const scrollToSec = (currentId) => {

    // Scrollbar Links Border
    let allLinksBorder = document.querySelectorAll('.scrollbar_link');
    for(let i=0; i<allLinksBorder.length; i++) 
        allLinksBorder[i].style.borderLeft = "1.5px solid rgba(102,51,153,0.5)";

    let currentElement = document.getElementById(currentId);
    currentElement.style.borderLeft = "3px solid rebeccapurple";

    // Scrollbar Links Name
    let allLinksName = document.querySelectorAll('.scrollbar_link span:nth-child(2)');
    for(let i=0; i<allLinksName.length; i++) 
        allLinksName[i].style.display = "none";

    let activeLinkName = document.querySelector('#' + currentId + ' span:nth-child(2)');
    activeLinkName.style.display = 'inline';
}