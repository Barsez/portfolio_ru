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
const sun_mode = document.querySelector('.sun_mode');
const moon_mode = document.querySelector('.moon_mode');


const proj_slider_center = document.querySelector('.proj_slider_center');
const proj_slider_left = document.querySelector('.proj_slider_left');
const proj_slider_right = document.querySelector('.proj_slider_right');
const projects_title = document.querySelector('.projects_title');
const project_link = document.querySelector('.project_page_wrapper > a');
const project_page_description = document.querySelector('.project_page_description');



// preloader
window.addEventListener('load', function () {
    setTimeout(() => {
        document.querySelector('.preloader').classList.add('preloader_hide')
    }, 500);
});

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
    document.querySelector('.bg_mode').classList.add('change_bg');
    setTimeout(() => {
        document.querySelector('.bg_mode').classList.remove('change_bg');
    }, 1000);

    this.classList.toggle('dark_mode_btn--active');
    body.classList.toggle('dark_mode');

    if (body.classList.contains('dark_mode')) {
        localStorage.setItem('darkMode', 'dark');
        moon_mode.style.display = 'block';
        sun_mode.style.display = 'none';
    } else {
        localStorage.setItem('darkMode', 'light');
        moon_mode.style.display = 'none';
        sun_mode.style.display = 'block';
    }
})
if (localStorage.getItem('darkMode') === 'dark') {
    body.classList.toggle('dark_mode');
    btnDarkMode.classList.add('dark_mode_btn--active');
    moon_mode.style.display = 'block';
    sun_mode.style.display = 'none';
}


// ab_icon up move
// ab_icon.addEventListener('click', function () {
//     document.querySelector('.header').scrollIntoView({ behavior: "smooth" });
//     ab_icon.classList.add('ab_icon_rotate');
//     setTimeout(() => {
//         this.classList.remove('ab_icon_rotate')
//     }, 1000);
// })



// heart in footer
document.querySelector('.heart_wrapper').addEventListener('click', function () {
    this.classList.add('heartClass');
    setTimeout(() => {
        this.classList.remove('heartClass')
    }, 1000)
})




const arrProjectsPath = [
    'img/proj_big/burger_proj.jpg',
    'img/proj_big/aperture_proj.jpg',
    'img/proj_big/concept_proj.jpg',
    'img/proj_big/keyboard.jpg',
    'img/proj_big/freeapp_proj.png',
    'img/proj_big/apple_proj.png',
    'img/proj_big/google_proj.png',
];

const arrDescriptions = [
    'Сайт о бургерах предлагает широкий ассортимент различных видов бургеров. Присоединяйтесь к нам для всего, что касается любви к бургерам!',

    'Наш сайт представляет фотостудию, оснащенную современными фотодронами. Мы предлагаем услуги фотосъемки с воздуха, что позволяет нам создавать уникальные и красивые снимки с необычных ракурсов.',

    'Наш концептуальный сайт - это уникальная онлайн-платформа, которая совмещает различные формы искусства, идеи и способы выражения.',

    'Cайт о скорости печати текста для улучшения ваших навыков скоростного набора. Присоединяйтесь к нам для достижения максимальной скорости и профессионализма в печати текста!',

    'Мы предлагаем широкий спектр функций, включая возможность создания профиля, добавления друзей, обмен сообщениями, публикацию фотографий и видео, присоединение к группам и сообществам.',

    'Предлагаем широкий выбор телефонов Apple с различными моделями и конфигурациями. Мы специализируемся на продаже оригинальных устройств, предлагая клиентам высокое качество и надежность.',

    'Основными принципами Google являются доступность информации, удобство использования и инновационный подход к созданию новых продуктов и сервисов.'

]

const arrNameProject = [
    { 'burger house': 'https://barsez.github.io/burger/' },
    { 'aperture studio': 'https://barsez.github.io/studio_aperture/' },
    { 'concept project': 'https://barsez.github.io/concept/' },
    { 'test speed writing': 'https://barsez.github.io/testspeedwriting/' },
    { 'freeapp': 'https://barsez.github.io/free_app/' },
    { 'apple project': '#!' },
    { 'google project': 'https://barsez.github.io/google_proj/' },
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
    let k = 6;

    // start position
    proj_slider_center.style.backgroundImage = `url(${arrProjectsPath[i]})`;
    proj_slider_right.style.backgroundImage = `url(${arrProjectsPath[j]})`;
    proj_slider_left.style.backgroundImage = `url(${arrProjectsPath[k]})`;
    projects_title.textContent = Object.keys(arrNameProject[i]);

    project_link.href = Object.values(arrNameProject[i]);
    project_page_description.textContent = arrDescriptions[i];



    // slider tik
    function is_interval_tic() {
        setInterval(() => {
            proj_slider_move_right();

        }, 8000)
    };
    is_interval_tic();

    function proj_slider_move_right() {
        i++;
        j++;
        k++;
        if (i > arrProjectsPath.length - 1) i = 0;
        if (j > arrProjectsPath.length - 1) j = 0;
        if (k > arrProjectsPath.length - 1) k = 0;

        proj_slider_center.style.backgroundImage = `url(${arrProjectsPath[i]})`;
        proj_slider_right.style.backgroundImage = `url(${arrProjectsPath[j]})`;
        proj_slider_left.style.backgroundImage = `url(${arrProjectsPath[k]})`;

        projects_title.textContent = Object.keys(arrNameProject[i]);
        project_link.href = Object.values(arrNameProject[i]);
        project_page_description.textContent = arrDescriptions[i];

        is_blur(proj_slider_center, 500);
        is_blur(proj_slider_right, 500);
        is_blur(proj_slider_left, 500);
    }


    // click 
    document.querySelector('.proj_slider_right').addEventListener('click', proj_slider_move_right)

    document.querySelector('.proj_slider_left').addEventListener('click', function () {
        i--;
        j--;
        k--;

        if (i < 0) i = arrProjectsPath.length - 1;
        else if (j < 0) j = arrProjectsPath.length - 1;
        else if (k < 0) k = arrProjectsPath.length - 1;

        proj_slider_center.style.backgroundImage = `url(${arrProjectsPath[i]})`;
        proj_slider_left.style.backgroundImage = `url(${arrProjectsPath[k]})`;
        proj_slider_right.style.backgroundImage = `url(${arrProjectsPath[j]})`;

        projects_title.textContent = Object.keys(arrNameProject[i]);
        project_link.href = Object.values(arrNameProject[i]);
        project_page_description.textContent = arrDescriptions[i];

        is_blur(proj_slider_center, 500);
        is_blur(proj_slider_right, 500);
        is_blur(proj_slider_left, 500);
    })
}

is_slider_project()
