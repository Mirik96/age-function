let Name = prompt('Введите свое имя');
let born = +prompt('Введите год рождения');
let year = +prompt('Введите нынешный год');

function age(){
    let num = (year - born);
    return num
}
alert(Name + ' , ' + ' ваш возраст ' + age() + ' !')