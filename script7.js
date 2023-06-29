function krData(god, strana_cod) {
    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = '';
    
    // ajax-запрос на сервер
    const xhr = new XMLHttpRequest();
    xhr.open("GET", https://calendarific.com/api/v2/holidays?&api_key=90e1d94fce560508c66b99cd5f679adfe9d524b7&country=${strana_cod}&year=${god});
    xhr.onload = function() {
    if (xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);
    console.log(data);
    const holidays = data.response.holidays;
    holidays.forEach(holiday => {
    const row = document.createElement('tr');
    const dateCell = document.createElement('td');
    dateCell.textContent = holiday.date.iso;
    const nameCell = document.createElement('td');
    nameCell.textContent = holiday.name;
    row.appendChild(dateCell);
    row.appendChild(nameCell);
    tableBody.appendChild(row);
    });
    } else {
    console.log('Ошибка запроса');
    }
    };
    xhr.send();
    }