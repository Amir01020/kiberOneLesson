let obj = {
    name: 'kiberOne  ', 
    password: '123 123'
};
console.log(obj.name);
console.log(obj.password);
let nameUser = document.querySelector('#nameUser');
let passwordUser = document.querySelector('#passwordUser');
let btn = document.querySelector('#btn');

btn.onclick = () => {
    if (nameUser.value === obj.name && passwordUser.value === obj.password) {
        alert('Доступ разрешён');
    } else {
        alert('Доступ запрещён');
        
    }
};
