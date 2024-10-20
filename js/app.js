let url = 'https://kiberone-150ab-default-rtdb.europe-west1.firebasedatabase.app/users.json';

let nameUser = document.querySelector('#nameUser');
let passwordUser = document.querySelector('#passwordUser');
let btn = document.querySelector('#btn');

btn.onclick = () => {
    axios.get(url)
        .then(res => {
            // Проверьте точные ключи в ответе
            if (nameUser.value == res.data.userName && passwordUser.value == res.data.userPassword) {
                alert('Доступ разрешён');
            } else {
                
            }
        })
        .catch(err => {
            console.error('Ошибка запроса:', err);
            alert('Произошла ошибка при запросе.');
        });
};
