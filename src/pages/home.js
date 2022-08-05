const home = () => {

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

export default home;