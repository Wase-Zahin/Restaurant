const initialLoader = () => {
    let header = document.querySelector('.header');
    let nav = document.createElement('nav');
    nav.classList.add('nav');
    header.appendChild(nav);

    let homeBtn = document.createElement('div');
    homeBtn.innerHTML = 'Home';
    homeBtn.classList.add('home');
    homeBtn.classList.add('selected');
    nav.appendChild(homeBtn);

    let menuBtn = document.createElement('div');
    menuBtn.innerHTML = 'Menu'
    menuBtn.classList.add('menu')
    nav.appendChild(menuBtn);

    let contactBtn = document.createElement('div');
    contactBtn.innerHTML = 'Contact'
    contactBtn.classList.add('contact');
    nav.appendChild(contactBtn);

    let name = document.createElement('div');
    name.classList.add('name');
    document.body.appendChild(name);
    name.innerHTML = 'Chickenigans Restaurant!'

    let mid = document.createElement('div');
    mid.classList.add('mid');
    document.body.appendChild(mid);
    mid.innerHTML = 'Get Recipe!'

    let footer = document.createElement('div');
    footer.classList.add('footer');
    document.body.appendChild(footer);
    footer.innerHTML = "Don't be a chicken while eating our chickens!"
}

const clear = () => {
    const body = document.querySelector('body');
    while (body.children.length > 1) {
        body.children[1].remove();
    }
}

export {initialLoader, clear};