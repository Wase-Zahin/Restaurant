import chicken_breast from '../img/chicken_breast.png';
import fried_rice from '../img/fried_rice.png';
import egg_noodles from '../img/egg_noodles.png';
import ice_cream from '../img/ice_cream.png';
import chicken_shwarma from '../img/chicken_shwarma.png';
import chicken_burger from '../img/chicken_burger.png';
import pizza from '../img/pizza.jpg';

const menu = () => {
    const foodTime = document.createElement('div');
    foodTime.classList.add('foodTime');
    foodTime.innerHTML = 'We serve breakfast from 6:30 AM to 10 AM, Lunch time is 12:00 PM to 5 PM'
    document.body.appendChild(foodTime);

    const main = document.createElement('div');
    main.classList.add('main');
    document.body.appendChild(main);

    for (let i = 0; i < 7; i++) {
        const food = document.createElement('div');
        main.appendChild(food);
        const foodDiv = document.createElement('div');
        food.appendChild(foodDiv);
        const foodName = document.createElement('div');

        switch (i) {
            case 0:
                const img1 = new Image();
                img1.src = chicken_breast;
                foodDiv.appendChild(img1);
                img1.classList.add('foodImg');
                foodName.classList.add('foodName');
                foodName.innerHTML = 'Chicken Breast';
                foodDiv.appendChild(foodName);
                foodDiv.classList.add('foodDiv');
                break;
            
            case 1:
                const img2 = new Image();
                img2.src = fried_rice;
                foodDiv.appendChild(img2);
                img2.classList.add('foodImg');
                foodName.classList.add('foodName');
                foodName.innerHTML = 'Fried Rice';
                foodDiv.appendChild(foodName);
                foodDiv.classList.add('foodDiv');
                break;

            case 2:
                const img3 = new Image();
                img3.src = chicken_shwarma;
                foodDiv.appendChild(img3);
                img3.classList.add('foodImg');
                foodName.classList.add('foodName');
                foodName.innerHTML = 'Chicken Shwarma';
                foodDiv.appendChild(foodName);
                foodDiv.classList.add('foodDiv');
                break;

            case 3:
                const img4 = new Image();
                img4.src = ice_cream;
                foodDiv.appendChild(img4);
                img4.classList.add('foodImg');
                foodName.classList.add('foodName');
                foodName.innerHTML = 'Ice Cream';
                foodDiv.appendChild(foodName);
                foodDiv.classList.add('foodDiv');
                break;

            case 4:
                const img5 = new Image();
                img5.src = egg_noodles;
                foodDiv.appendChild(img5);
                img5.classList.add('foodImg');
                foodName.classList.add('foodName');
                foodName.innerHTML = 'Egg Noodles';
                foodDiv.appendChild(foodName);
                foodDiv.classList.add('foodDiv');
                break;

            case 5:
                const img6 = new Image();
                img6.src = pizza;
                foodDiv.appendChild(img6);
                img6.classList.add('foodImg');
                foodName.classList.add('foodName');
                foodName.innerHTML = 'Pizza';
                foodDiv.appendChild(foodName);
                foodDiv.classList.add('foodDiv');
                break;

            case 6:
                const img7 = new Image();
                img7.src = chicken_burger;
                foodDiv.appendChild(img7);
                img7.classList.add('foodImg');
                foodName.classList.add('foodName');
                foodName.innerHTML = 'Chicken Burger';
                foodDiv.appendChild(foodName);
                foodDiv.classList.add('foodDiv');
                break;
        }
        
        const prcQntt = document.createElement('div');
        prcQntt.classList.add('prcQntt');
        food.appendChild(prcQntt);

        const price = document.createElement('div');
        price.classList.add('price');
        price.innerHTML = '$0.00'
        prcQntt.appendChild(price);

        const addrmv = document.createElement('div');
        addrmv.classList.add('addrmv');
        prcQntt.appendChild(addrmv);

        const addBtn = document.createElement('div');
        addBtn.classList.add('addBtn');
        addrmv.appendChild(addBtn);

        const number = document.createElement('div');
        number.classList.add('number');
        number.innerHTML = 0;
        addrmv.appendChild(number);

        const rmvBtn = document.createElement('div');
        rmvBtn.classList.add('rmvBtn');
        addrmv.appendChild(rmvBtn);
    }
}


export default menu;