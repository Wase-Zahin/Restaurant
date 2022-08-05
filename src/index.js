import './styles/home.css';
import './styles/menu.css';
import './styles/contact.css';
import { initialLoader, clear } from './pages/loader';
import home from './pages/home';
import menu from './pages/menu';
import contact from './pages/contact'

initialLoader();

const menuBtn = document.querySelector('.menu');
const homeBtn = document.querySelector('.home');
const contactBtn = document.querySelector('.contact');
const navs = document.querySelectorAll('.nav > div');

navs.forEach(function(e) {
    e.addEventListener('click', () => {
        let arr = Array.from(navs);
        arr.forEach(function(elem) {
            if (elem.classList.contains('selected')) elem.classList.remove('selected');
        })
        e.classList.add('selected');
    })
})

menuBtn.addEventListener('click', function() {
    clear();
    menu();
})

homeBtn.addEventListener('click', function() {
    clear();
    home();
})

contactBtn.addEventListener('click', function() {
    clear();
    contact();
})
