let myLibrary = [];

function Book() {

}

function addBookToLibrary() {
    
}

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
    // document.body.classList.toggle('light');
    // document.body.classList.toggle('dark');
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
 * AWFUL MODAL HANDLERS
 * @param {*} modal 
 * @param {*} wrapper 
 */

function toggleModal(modal, wrapper) {
    wrapper.classList.toggle('active');
    modal.classList.toggle('active');
    overlay.classList.toggle('open');
}

const add_btn = document.querySelector('#add');
const upload_btn = document.querySelector('#upload');
const share_btn = document.querySelector('#share');

const modals = document.querySelectorAll('.modal');
const add_wrapper = document.querySelector('#add-wrapper')
const add_modal = document.querySelector('#add-card-modal');
const upload_modal = document.querySelector('#upload-list-modal');
const upload_wrapper = document.querySelector('#upload-wrapper')
const share_modal = document.querySelector('#share-list-modal');
const share_wrapper = document.querySelector('#share-wrapper')
const overlay = document.querySelector('.overlay');

add_btn.addEventListener('click', () => {
    toggleModal(add_modal, add_wrapper);
});
const close_add = document.querySelector('#close-add');
close_add.addEventListener('click', () => {
    toggleModal(add_modal, add_wrapper);
})

upload_btn.addEventListener('click', () => {
    toggleModal(upload_modal, upload_wrapper);
});
const close_upload = document.querySelector('#close-upload');
close_upload.addEventListener('click', () => {
    toggleModal(upload_modal, upload_wrapper);
})

share_btn.addEventListener('click', () => {
    toggleModal(share_modal, share_wrapper);
});
const close_share = document.querySelector('#close-share');
close_share.addEventListener('click', () => {
    toggleModal(share_modal, share_wrapper);
})

const settings_wrapper = document.querySelector('.settings-wrapper');
const settings_btn = document.querySelector('#settings > i');
function openSettings() {
    settings_wrapper.classList.toggle('settings-open');
    document.querySelector('#settings').classList.toggle('settings-clicked');
}
settings_btn.addEventListener('click', () => {
    openSettings();
})


/**
 * ADD CARD HANDLERS
 */
const add_cards = document.querySelectorAll('.add-card');
add_cards.forEach((c) => {
    c.addEventListener('click', () => {
        toggleModal(add_modal, add_wrapper);
    })
});


/**
 * CARD INFO HANDLERS
 */

function updateStatus() {
    let status_ = document.querySelector('#status > p');
    let status_txt = status_.textContent.split('/');
    let current_ep = parseInt(status_txt[0]); 
    let ep_count = status_txt[1];
    current_ep++;
    if (current_ep == parseInt(ep_count)) {
        alert('Content completed!');
        current_ep = 0;
    }
    status_.textContent = current_ep + '/' + ep_count;
}

const increase_status = document.querySelector('#status i');
increase_status.addEventListener('click', () => {
    updateStatus();
});


const card_wrapper = document.querySelector('#card-wrapper')
const card_modal = document.querySelector('#card-modal');
const expand_info = document.querySelector('#expand-info');
expand_info.addEventListener('click', () => {
    toggleModal(card_modal, card_wrapper);
});
const close_card = document.querySelector('#close-card');
close_card.addEventListener('click', () => {
    toggleModal(card_modal, card_wrapper);
})




// const s_wrapper = document.querySelector('.settings-wrapper');
// // const setting_caret = document.querySelector('.settingcaret')
// const settings_btn = document.querySelector('.sbtn');

// function openSettings() {
//     s_wrapper.classList.toggle('settings-open');
// }

// settings_btn.addEventListener('click', () => {
//     openSettings();
// });
