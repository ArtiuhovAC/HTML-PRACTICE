// Предполагается, что данные будут в формате JSON
const leadersData = [
    {
        "photo": "data/local_img/1917.png",
        "name": "Иван Иванов",
        "life": "1900 - 1980",
        "term": "1950 - 1960",
        "positions": "Председатель, Министр"
    },
    {
        "photo": "data/local_img/1917.png",
        "name": "Мария Петрова",
        "life": "1890 - 1970",
        "term": "1920 - 1930",
        "positions": "Секретарь, Депутат"
    }
    // Добавьте дополнительные объекты для других руководителей
];

// Функция для заполнения таблицы данными о руководителях
function populateTable() {
    const table = document.getElementById('leaders-table');
    leadersData.forEach(leader => {
        const row = table.insertRow();
        const photoCell = row.insertCell();
        const nameCell = row.insertCell();
        const lifeCell = row.insertCell();
        const termCell = row.insertCell();
        const positionsCell = row.insertCell();

        photoCell.innerHTML = `<img src="${leader.photo}" alt="Фото ${leader.name}">`;
        nameCell.textContent = leader.name;
        lifeCell.textContent = leader.life;
        termCell.textContent = leader.term;
        positionsCell.textContent = leader.positions;
    });
}

// Вызов функции при загрузке страницы
window.onload = populateTable;
