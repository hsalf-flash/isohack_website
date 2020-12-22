// When the Page Will be load, 
window.onload = () => {
    location.href = "#navbar_section";
    document.getElementById('home_bar').style.borderLeft = "3.5px solid rgb(163,174,186)";
    document.querySelector('#home_bar span:nth-child(2)').style.display = "inline";
}

window.addEventListener('scroll', () => {

    // Home Section
    let home_sec = document.querySelector('#navbar_with_home');
    let home_position = home_sec.getBoundingClientRect().top;

    // About Us Section
    let about_sec = document.querySelector('#about_section');
    let about_position = about_sec.getBoundingClientRect().top;

    // Previous Year Event Section
    let isohack1_O = document.querySelector('#previous_year_event');
    let isohack1_O_position = isohack1_O.getBoundingClientRect().top;

    // Isohack Gallery
    let gallery_sec = document.querySelector('#isohack_gallery_section');
    let gallery_position = gallery_sec.getBoundingClientRect().top;

    // FAQ Section
    let faq_sec = document.querySelector('#faq_section');
    let faq_position = faq_sec.getBoundingClientRect().top;

    // Screen Position
    let screen_position = window.innerHeight;

    const allLinksBlank = () => {
        // Scrollbar Links Border
        let allLinksBorder = document.querySelectorAll('.scrollbar_link');
        for (let i = 0; i < allLinksBorder.length; i++)
            allLinksBorder[i].style.borderLeft = "1.5px solid rgba(119, 136, 153, 1)";

        // Scrollbar Links Name
        let allLinksName = document.querySelectorAll('.scrollbar_link span:nth-child(2)');
        for (let i = 0; i < allLinksName.length; i++)
            allLinksName[i].style.display = "none";
    }

    if (Math.abs(home_position) < screen_position) {
        allLinksBlank();
        document.querySelector('a[href="#navbar_with_home"]').style.borderLeft = "3.5px solid rgb(163,174,186)";
        document.querySelector('a[href="#navbar_with_home"] span:nth-child(2)').style.display = 'inline';
    }
    else if (Math.abs(about_position) < screen_position) {
        allLinksBlank();
        document.querySelector('a[href="#about_section"]').style.borderLeft = "3.5px solid rgb(163,174,186)";
        document.querySelector('a[href="#about_section"] span:nth-child(2)').style.display = 'inline';
    }
    else if (Math.abs(isohack1_O_position) < screen_position) {
        allLinksBlank();
        document.querySelector('a[href="#previous_year_event"]').style.borderLeft = "3.5px solid rgb(163,174,186)";
        document.querySelector('a[href="#previous_year_event"] span:nth-child(2)').style.display = 'inline';
    }
    else if (Math.abs(gallery_position) < screen_position) {
        allLinksBlank();
        document.querySelector('a[href="#isohack_gallery_section"]').style.borderLeft = "3.5px solid rgb(163,174,186)";
        document.querySelector('a[href="#isohack_gallery_section"] span:nth-child(2)').style.display = 'inline';
    }
    else if (Math.abs(faq_position) < screen_position) {
        allLinksBlank();
        document.querySelector('a[href="#faq_section"]').style.borderLeft = "3.5px solid rgb(163,174,186)";
        document.querySelector('a[href="#faq_section"] span:nth-child(2)').style.display = 'inline';
    }
});


// When the user clicks on any Scrollbar Link
const scrollToSec = (currentId) => {

    // Scrollbar Links Border
    let allLinksBorder = document.querySelectorAll('.scrollbar_link');
    for (let i = 0; i < allLinksBorder.length; i++)
        allLinksBorder[i].style.borderLeft = "1.5px solid rgba(119, 136, 153, 1)";

    let currentElement = document.getElementById(currentId);
    currentElement.style.borderLeft = "3.5px solid rgb(163,174,186)";

    // Scrollbar Links Name
    let allLinksName = document.querySelectorAll('.scrollbar_link span:nth-child(2)');
    for (let i = 0; i < allLinksName.length; i++)
        allLinksName[i].style.display = "none";

    let activeLinkName = document.querySelector('#' + currentId + ' span:nth-child(2)');
    activeLinkName.style.display = 'inline';
}