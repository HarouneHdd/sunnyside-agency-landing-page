const learnMoreBtns = document.getElementsByClassName('learn-more-btn');

for (const learnMoreBtn of learnMoreBtns) {
    learnMoreBtn.addEventListener('mouseover', () => {
        learnMoreBtn.style.cursor = 'pointer';

        if (learnMoreBtn.children[1].style.opacity !== '1') {
            learnMoreBtn.children[1].style.opacity = '1';
        }
    });

    learnMoreBtn.addEventListener('mouseout', () => {
        learnMoreBtn.style.cursor = 'default';
        
        if (learnMoreBtn.children[1].style.opacity !== '0.3') {
            learnMoreBtn.children[1].style.opacity = '0.3';
        }
    });
}

const mobileNavBtn = document.getElementById('mobile-nav-button');
const mobileNav = document.getElementById('mobile-nav');

mobileNavBtn.addEventListener('click', () => {
    if (mobileNav.style.display === 'none') {
        mobileNav.style.display = 'flex';
    }
    else {
        mobileNav.style.display = 'none';
    }
});