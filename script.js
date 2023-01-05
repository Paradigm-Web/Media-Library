/**
 * HEADER HANDLERS
 */

const dark = true;
const theme = document.querySelector('#theme > img');
theme.addEventListener('click', () => {
    theme.classList.toggle('fa-moon');
    theme.classList.toggle('dark');
    theme.classList.toggle('light');
    theme.classList.toggle('fa-sun');
});

const search_input = document.querySelector('#search-input');
search_input.addEventListener('blur', () => {
    document.querySelector('.search-box').classList.toggle('search-box-open');
});

const search_btn = document.querySelector('.search-icon');
search_btn.addEventListener('click', () => {
    document.querySelector('.search-box').classList.toggle('search-box-open');
    search_input.focus();
});


/**
 * CONTROL HANDLERS
 */

const settings_wrapper = document.querySelector('.settings-wrapper');
const settings_btn = document.querySelector('#settings > i');
function openSettings() {
    settings_wrapper.classList.toggle('settings-open');
    document.querySelector('#settings').classList.toggle('settings-clicked');
}
settings_btn.addEventListener('click', () => {
    openSettings();
});


/**
 * MEDIA CARD HANDLERS
 */

const list_sections = document.querySelectorAll('.content-section');
list_sections.forEach((s) => {
    const cards = s.querySelectorAll('.card-cover');
    const add_card = s.querySelector('.add-card');
    add_card.setAttribute('title', `Add to ${s.id} list`);
    try {
        cards[0].style.transformOrigin = '0 50%';
    } catch {
        console.log(`${s.id} section has no content yet`);
    }
    
    cards.forEach((card) => {
        const card_img = card.querySelector('.card-img');
        const img1 = card_img.children[0];
        const img2 = card_img.children[1];
        const more_btn = card.querySelector('.more-info');
        let isActive = false;
        let isHovered = false;
    
        card_img.addEventListener('mouseenter', () => {
        isHovered = true;
        if (isActive) return;
        setTimeout(() => {
        if (!isHovered) return;
        card.classList.add('expand');
        isActive = true;
        setTimeout(() => {
            if (!isHovered) return;
            img2.classList.add('fade-in');
            img2.classList.remove('fade-out');
            setTimeout(() => {
                if (!isActive) return;
                if (!isHovered) return;
                img1.style.opacity = '0%';
            }, 600);
        }, 75);
        }, 500);
        });
        card_img.addEventListener('mouseleave', () => {
        isHovered = false;
        });
    
        card.addEventListener('mouseleave', () => {
        isHovered = false;
        if (!isActive) return;
        card.classList.remove('expand');
        isActive = false;
        setTimeout(() => {
        img1.style.opacity = '100%';
        img2.classList.remove('fade-in');
        img2.classList.add('fade-out');
        }, 1);
        });
    });
});
