const userLogin = document.getElementById('user-login');
const modal = document.querySelector('.modal');

modal.innerHTML = `
    <div class="modal-login">
        <i class="fa-solid fa-x modal-close"></i>

        <div class="modal-item">
            <label for="name">User name</label>
            <input type="text" name="name" id="name" placeholder="Type your user name">
        </div>

        <div class="modal-item">
            <label for="password">Password</label>
            <input type="password" name="password" id="password" placeholder="Type your password">
        </div>
    </div>
`;

// show modal
userLogin.addEventListener('click', () => {
    modal.classList.add('show');
});

// close modal
const closeModal = document.querySelector('.modal-close');
closeModal.addEventListener('click', () => {
    modal.classList.remove('show');
});

document.addEventListener('click', (e) => {
    const target = e.target;

    if(target.classList.contains('show')) {
        modal.classList.remove('show');
    }
});