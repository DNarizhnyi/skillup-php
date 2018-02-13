var user = {};         // Создайте пустой объект user.
user.name = 'Вася';    //  Добавьте свойство name со значением Вася.
user.surname = 'Петров';   //  Добавьте свойство surname со значением Петров.
user.name = 'Сергей';       // Поменяйте значение name на Сергей.



user.name = 'Сергей';
console.log(user);

delete user.name;        //Удалите свойство name из объекта.
console.log(user);

for ( var key in user){
    alert ('Свойство:' + key + ' , значение : '+ user[key]);
}

// Задача для нахождения количество элементов

var goods = [5,3,454,233,12,132];
alert (goods[goods.length - 1]);
