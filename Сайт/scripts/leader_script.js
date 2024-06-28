// Предполагается, что данные будут в формате JSON
const leadersData = [
        {
            "name": "Иван Иванов",
            "photo": "data/local_img/1917.png",
            "bio": "Иван Иванов — опытный политик, работающий в ..."
        },
        {
            "name": "Мария Петрова",
            "photo": "data/local_img/1917.png",
            "bio": "Мария Петрова — известный эксперт в области ..."
        }
    
];

// Функция для заполнения таблицы данными о руководителях
function populateTable() {
    const table = document.getElementById('leaders-table');
    leadersData.forEach(leader => {
        const row = table.insertRow();
        const nameCell = row.insertCell();
        const photoCell = row.insertCell();
        const bioCell = row.insertCell();

        nameCell.textContent = leader.name;
        photoCell.innerHTML = `<img src="${leader.photo}" alt="Фото ${leader.name}">`;
        bioCell.textContent = leader.bio;
    });
}

// Вызов функции при загрузке страницы
window.onload = populateTable;
