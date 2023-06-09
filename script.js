console.log('Hello!');

let userName = document.getElementById('userName');
let userNameChild = document.getElementById('userNameChild');

// userNameChild.remove();
userName.removeChild(userNameChild);

let userAge = document.createElement('p'); // <p></p>
// userAge.innerHTML = '20'; // <p>20</p>
// userName.appendChild(userAge); //<p>My name: Huyhq <p>20</p> </p>
// let body = document.getElementById('body');
// let pInsertBefore = document.createElement('p');
// pInsertBefore.innerHTML = 'them vao truowc my name';
// body.insertBefore(pInsertBefore, userName);
// them 1 phan tu vao truoc danh sach
// phan tu bao ngaoi | the bi theme | the bi them dang truowc
// let userEmail = document.getElementById('userEmail');

// userName.style.color = 'rgb(255,0,0)'; // greeen
// userName.style.fontSize = '30px';

// userName.classList.add('text-bold'); // them
// userName.classList.remove('text-bold');// xoa
// let status = userName.classList.contains('text-bold'); // check xem co
// console.log(status);
// lop la text-bold khong

// font-size, border-radius
// console.log(userName.style);

// userName.innerHTML = `<b>my name is change</b>
// <script>
// console.log('test');
// </script>`;
// userName.innerText = `<b>my name is change</b>
// <script>
// console.log('test');
// </script>`;

// let userNameInnerText = userName.innerText;
// console.log(userName.innerHTML, userNameInnerText);

// console.log(userEmail);
