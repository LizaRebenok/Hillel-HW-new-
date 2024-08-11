`Use strict`;

const birthYear = prompt(`Введіть свій рік народження`);
let userAge;
if (birthYear === null || birthYear.trim() === `` || isNaN(+birthYear)) {
     alert(`Шкода, що Ви не захотіли ввести свій рік народження`);
} else {
    userAge = 2024 - birthYear;
}

const city = prompt(`Введіть місто проживання`);
let userCity;
if (city === null || city.trim() === ``) {
    alert(`Шкода, що Ви не захотіли ввести назву свого міста`);
} else {
    switch (city) {
        case `Київ`:
             userCity = 'Ти живеш у столиці України';
            break;
        case `Вашингтон`:
            userCity = 'Ти живеш у столиці США';
            break;
        case `Лондон`:
            userCity = 'Ти живеш у столиці Англії';
            break;
        default:
            userCity = `Ти живеш у місті ${city}`;
    }
}

const favoriteSport = prompt(`Введіть улюблений вид спорту`);
let userFavoriteSport;
if (favoriteSport === null || favoriteSport.trim() === ``) {
    alert(`Шкода, що Ви не захотіли ввести свій рік народження`);
} else {
    switch (favoriteSport) {
        case `бокс`:
            userFavoriteSport = 'Круто! Хочеш стати Олександром Усиком?';
            break;
        case `футбол`:
            userFavoriteSport = 'Круто! Хочеш стати Криштиану Роналду?';
            break;
        case `баскетбол`:
            userFavoriteSport = 'Круто! Хочеш стати Майкл Джордан';
            break;
        default:
            userFavoriteSport = `Класний вид спорту ${favoriteSport}!`;
    }
}


alert(`Твій вік: ${userAge} . ${userCity}. ${userFavoriteSport}`);






















