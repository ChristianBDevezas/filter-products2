const userLogin = document.getElementById('user-login');
const modal = document.querySelector('.modal');

const modalLogin = document.createElement('div');
modalLogin.classList.add('modal-login');

const closeIcon = document.createElement('i');
closeIcon.classList.add('fa-solid', 'fa-x', 'modal-close');

const modalItem1 = document.createElement('div');
modalItem1.classList.add('modal-item');

const label1 = document.createElement('label');
label1.setAttribute('for', 'name');
label1.innerText = "User name";

const input1 = document.createElement('input');
input1.setAttribute('type', 'text');
input1.setAttribute('name', 'name');
input1.setAttribute('id', 'name');
input1.setAttribute('placeholder', 'Type your user name');

modalItem1.appendChild(label1);
modalItem1.appendChild(input1);

const modalItem2 = document.createElement('div');
modalItem2.classList.add('modal-item');

const label2 = document.createElement('label');
label2.setAttribute('for', 'password');
label2.innerText = "Password";

const input2 = document.createElement('input');
input2.setAttribute('type', 'password');
input2.setAttribute('name', 'password');
input2.setAttribute('id', 'password');
input2.setAttribute('placeholder', 'Type your password');

modalItem2.appendChild(label2);
modalItem2.appendChild(input2);

const modalItem3 = document.createElement('div');
modalItem3.classList.add('modal-item');

const input3 = document.createElement('input');
input3.setAttribute('type', 'submit');
input3.setAttribute('id', 'submit');
input3.setAttribute('value', 'Log In');

modalItem3.appendChild(input3);

modalLogin.appendChild(closeIcon);
modalLogin.append(modalItem1);
modalLogin.append(modalItem2);
modalLogin.append(modalItem3);

modal.appendChild(modalLogin);

// show modal
userLogin.addEventListener('click', () => {
    modal.classList.add('show');
});

// close modal
closeIcon.addEventListener('click', () => {
    modal.classList.remove('show');
});

document.addEventListener('click', (e) => {
    const target = e.target;

    if(target.classList.contains('show')) {
        modal.classList.remove('show');
    }
});