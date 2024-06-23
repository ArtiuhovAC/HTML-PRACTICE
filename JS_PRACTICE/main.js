const Name = prompt("Введите сюда своё имя", "Введите имя");
alert(`Ваше имя: ${Name}`);
const restart = confirm("Начать заново?");
if (restart) {
    const response = confirm("Не надоело?");
    if (response) {
        alert("Да, это интересно!");
    } else {
        alert("Ну и правильно!");
    }
} else {
    alert("До свидания!");
}