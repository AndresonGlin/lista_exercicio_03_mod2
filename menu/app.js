const botao = document.getElementById('button_menu');
const menu = document.querySelector('nav ul');

botao.addEventListener('click', () => {
  menu.classList.toggle('show');
});
