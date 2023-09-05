const btnDarkMode = document.querySelector('.dark_mode_btn');
const body = document.querySelector('body');
const main = document.querySelector('.main');
const btn_load_more = document.querySelector('.btn_load_more');
const cards_opts = document.querySelectorAll('.opt');
const heart_wrapper = document.querySelector('.heart_wrapper');
const ab_icon = document.querySelector('#ab_icon');
const logo = document.querySelector('.logo');
const main_title = document.querySelector('.main_title');
const main_text = document.querySelector('.main_text');
const skills_nav_header = document.querySelector('.nav_list_skills');
const project_card = document.querySelector('.project_card');
const proj_descriptions = document.querySelectorAll('.proj_description');
const project_cards = document.querySelectorAll('.project_card');
const menu_mobile_img = document.querySelector('.menu_mobile_img');
const project_page_img = document.querySelector('#project_page_img');
const next_project = document.querySelector('.next_project');
const prev_project = document.querySelector('.prev_project');
const projects_title = document.querySelector('.projects_title');

// preloader
setTimeout(() => {
    document.querySelector('.preloader').classList.add('preloader_hide')
}, 700);

// menu mobile
menu_mobile_img.addEventListener('click', function () {
    this.classList.add('menu_mobile_scale');
    document.querySelector('#mobile_menu').classList.toggle('display_block');
    setTimeout(() => {
        this.classList.remove('menu_mobile_scale')
    }, 500)
})



// dark mode in local storage

btnDarkMode.addEventListener('click', function () {
    document.querySelector('.preloader').classList.remove('preloader_hide')
    setTimeout(() => {
        document.querySelector('.preloader').classList.add('preloader_hide');
        this.classList.toggle('dark_mode_btn--active');
        body.classList.toggle('dark_mode');

        if (body.classList.contains('dark_mode')) {
            localStorage.setItem('darkMode', 'dark')
        } else {
            localStorage.setItem('darkMode', 'light')
        }
    }, 100)
})
if (localStorage.getItem('darkMode') === 'dark') {
    body.classList.toggle('dark_mode');
    btnDarkMode.classList.add('dark_mode_btn--active');
}


// ab_icon up move
ab_icon.addEventListener('click', function () {
    document.querySelector('.header').scrollIntoView({ behavior: "smooth" });
    ab_icon.classList.add('ab_icon_rotate');
    setTimeout(() => {
        this.classList.remove('ab_icon_rotate')
    }, 1000);
})



// heart in footer
document.querySelector('.heart_wrapper').addEventListener('click', function () {
    this.classList.add('heartClass');
    setTimeout(() => {
        this.classList.remove('heartClass')
    }, 1000)
})