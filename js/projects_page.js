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

const proj_slider_center = document.querySelector('.proj_slider_center');
const proj_slider_left = document.querySelector('.proj_slider_left');
const proj_slider_right = document.querySelector('.proj_slider_right');
const projects_title = document.querySelector('.projects_title');
const project_link = document.querySelector('.project_page_wrapper > a');



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




const arrProjectsPath = [
    'img/proj_big/burger_proj.jpg', 'img/proj_big/aperture_proj.jpg', 'img/proj_big/concept_proj.jpg', 'img/proj_big/testspeed_proj.png','img/proj_big/freeapp_proj.png', 'img/proj_big/apple_proj.png'
]
const arrNameProject = [
    {'burger house': 'https://barsez.github.io/burger/'},
    {'aperture studio': 'https://barsez.github.io/studio_aperture/'},
    {'concept project': 'https://barsez.github.io/concept/'},
    {'test speed writing': 'https://barsez.github.io/testspeedwriting/'},
    {'freeapp': '#!'},
    {'apple project': '#!'},
];



function is_blur(target_name, timeout) {
    target_name.classList.add('slider_blur');
        setTimeout(() => {
            target_name.classList.remove('slider_blur');
        }, timeout);
} 


// slider

function is_slider_project() {
    let i = 0;
    let j = 1;
    let k = 5;

    // start position
    proj_slider_center.style.backgroundImage = `url(${arrProjectsPath[i]})`;
    proj_slider_right.style.backgroundImage = `url(${arrProjectsPath[j]})`;
    proj_slider_left.style.backgroundImage = `url(${arrProjectsPath[k]})`;
    projects_title.textContent = Object.keys(arrNameProject[i]);

    project_link.href = Object.values(arrNameProject[i]);

    // click 
    document.querySelector('.proj_slider_right').addEventListener('click', function () {
        i++;
        j++;
        k++;
        if (i > arrProjectsPath.length - 1) i = 0;
        if (j > arrProjectsPath.length - 1) j = 0;
        if (k > arrProjectsPath.length - 1) k = 0;

        proj_slider_center.style.backgroundImage = `url(${arrProjectsPath[i]})`;
        this.style.backgroundImage = `url(${arrProjectsPath[j]})`;
        document.querySelector('.proj_slider_left').style.backgroundImage = `url(${arrProjectsPath[k]})`;

        projects_title.textContent = Object.keys(arrNameProject[i]);
        project_link.href = Object.values(arrNameProject[i]);

        is_blur(proj_slider_right, 500);
        is_blur(proj_slider_left, 500);
    })

    document.querySelector('.proj_slider_left').addEventListener('click', function () {
        i--;
        j--;
        k--;

        if (i < 0) i = arrProjectsPath.length - 1;
        else if (j < 0) j = arrProjectsPath.length - 1;
        else if (k < 0) k = arrProjectsPath.length - 1;

        proj_slider_center.style.backgroundImage = `url(${arrProjectsPath[i]})`;
        this.style.backgroundImage = `url(${arrProjectsPath[k]})`;
        document.querySelector('.proj_slider_right').style.backgroundImage = `url(${arrProjectsPath[j]})`;

        projects_title.textContent = Object.keys(arrNameProject[i]);
        project_link.href = Object.values(arrNameProject[i]);

        is_blur(proj_slider_right, 500);
        is_blur(proj_slider_left, 500);
    })
}

is_slider_project()

