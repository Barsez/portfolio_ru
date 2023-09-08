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



// proj cards
for (let i = 0; i < project_cards.length; i++) {
    project_cards[i].addEventListener('click', function f() {
        if (i % 2 == 0) {
            this.classList.toggle('card_rotate_180_left');
        } else {
            this.classList.toggle('card_rotate_180_right');
        }

        this.classList.toggle('card_back');
        this.addEventListener('click', function fa() {
            this.classList.toggle('card_rotate_360');
            this.removeEventListener('click', fa);
        })
    })
}


// text in span
logo.innerHTML = logo.textContent.replace(/\S/g, '<span>$&</span>');
main_title.innerHTML = main_title.textContent.replace(/\S/g, '<span>$&</span>');
main_text.innerHTML = main_text.textContent.replace(/\S/g, '<span>$&</span>');

proj_descriptions.forEach(el => {
    el.innerHTML = el.textContent.replace(/\S/g, '<span>$&</span>');
    is_span_target(el, 'main_text_active', 1000);
})



function is_span_target(el_name, name_animation, time_anim) {
    el_name.addEventListener('mouseover', function (e) {
        if (e.target.tagName != 'SPAN') return;
        e.target.classList.add(name_animation)
        setTimeout(() => {
            e.target.classList.remove(name_animation);
        }, time_anim);
    })
}

// is_span_target(main_title, 'main_text_active', 3000);
is_span_target(main_text, 'main_text_active', 3000);


// logo_active
logo.addEventListener('click', function (e) {
    if (e.target.tagName != 'SPAN') return;
    e.target.classList.add('logo_active');
    setTimeout(() => {
        e.target.classList.remove('logo_active');
    }, 1000);

})


// ab_icon up move
ab_icon.addEventListener('click', function () {
    document.querySelector('.header').scrollIntoView({ behavior: "smooth" });
    ab_icon.classList.add('ab_icon_rotate');
    setTimeout(() => {
        this.classList.remove('ab_icon_rotate')
    }, 1000);
})



// dark mode in local storage

btnDarkMode.addEventListener('click', function () {
    document.querySelector('.preloader').classList.remove('preloader_hide')
    setTimeout(() => {
        document.querySelector('.preloader').classList.add('preloader_hide');

        this.classList.toggle('dark_mode_btn--active');
        body.classList.toggle('dark_mode');
        main.classList.toggle('main_dark');

        if (body.classList.contains('dark_mode')) {
            localStorage.setItem('darkMode', 'dark');
            moon_mode.style.display = 'block';
            sun_mode.style.display = 'none';
        } else {
            localStorage.setItem('darkMode', 'light');
            moon_mode.style.display = 'none';
            sun_mode.style.display = 'block';
        }
    }, 200)

})

if (localStorage.getItem('darkMode') === 'dark') {
    body.classList.toggle('dark_mode');
    btnDarkMode.classList.add('dark_mode_btn--active');
    main.classList.toggle('main_dark');
    moon_mode.style.display = 'block';
    sun_mode.style.display = 'none';
}


// btn load more
function is_load_more_profects() {
    let i = 0;
    btn_load_more.addEventListener('click', function load_more() {
        cards_opts[i].style.display = 'flex';
        i++;
        if (i >= cards_opts.length) {
            btn_load_more.removeEventListener('click', load_more);
        }
    })
};
is_load_more_profects();




// observer

window.onload = () => {
    let options = {
        root: null,
        threshold: 0.2
    }


    // observer func
    function observe_all(name_obs, target_name, target_id, options, animation_class) {
        name_obs = new IntersectionObserver(function (entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(animation_class);
                }
                else if (!entry.isIntersecting) {
                    entry.target.classList.remove(animation_class);
                }

            })
        }, options);
        target_name = document.querySelector(target_id);
        name_obs.observe(target_name);
    }

    let observer_proj_side, target_proj_side;
    observe_all(observer_proj_side, target_proj_side, '.projects_side', options, 'show_projects_side');


    // proj_description
    let proj_text1, targ_text1;
    observe_all(proj_text1, targ_text1, '#proj_description1', options, 'project2_animation');
    let proj_text2, targ_text2;
    observe_all(proj_text2, targ_text2, '#proj_description2', options, 'project1_animation');
    let proj_text3, targ_text3;
    observe_all(proj_text3, targ_text3, '#proj_description3', options, 'project2_animation');
    let proj_text4, targ_text4;
    observe_all(proj_text4, targ_text4, '#proj_description4', options, 'project1_animation');
    let proj_text5, targ_text5;
    observe_all(proj_text5, targ_text5, '#proj_description5', options, 'project2_animation');
    let proj_text6, targ_text6;
    observe_all(proj_text6, targ_text6, '#proj_description6', options, 'project1_animation');
    let proj_text7, targ_text7;
    observe_all(proj_text7, targ_text7, '#proj_description7', options, 'project2_animation');


    let skills_title_obs, target_skills;
    observe_all(skills_title_obs, target_skills, '.skills_title', options, 'skills_left_trans');
    let serteficate_title, target_sert_title;
    observe_all(serteficate_title, target_sert_title, '.sertificate_title', options, 'skills_left_trans');

    let observer_sertificate, target_sertificate;
    observe_all(observer_sertificate, target_sertificate, '.sert_img', options, 'sert_img_animation');
}



// heart in footer
heart_wrapper.addEventListener('click', function () {
    this.classList.add('heartClass');
    setTimeout(() => {
        this.classList.remove('heartClass')
    }, 1000)
})


// проверка темной темы на уровне системных настроек

// if(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
//     body.classList.add('dark_mode');
//     btnDarkMode.classList.add('dark_mode_btn--active');
// }