// МОРСКОЙ БОЙ
function getRandom(coordinates) { //Выбор случайного числа от 0 до 9
    var coordinates = Math.floor(Math.random() * 10);
    return coordinates;
}

// Ввести имя игрока
var userName = prompt("Please, enter your name:");
// Поприветствовать
alert("Hello, " + userName + "!");
// Автоматически разместить корабль на поле
var ship = getRandom();
var t = 9;
//Получить от пользователя координату выстрела 
var shoot = prompt("Input your coordinate shot from 0 to 9:");
// Вывести на экран: попали или промазали
while (shoot != ship) { // Если корабаль не убит, то повторить с момента ввода координат
    var shoot = prompt("You missed. You have " + t + " attempts:");
    t = t - 1;
    if (t <= 0) {
        break; 
    }
}
if (shoot == ship) { // Если убит, то вывести поздравление и количество попыток. Попрощаться
   alert("Congratulation! You win!");
} 