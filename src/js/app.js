
import BaseHelpers from './helpers/BaseHelpers.js';

BaseHelpers.checkWebpSupport();

BaseHelpers.addTouchClass();

BaseHelpers.addLoadedClass();




const form = document.querySelector('.contact__form');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	sendData();
});
function sendData() {
	document.querySelector('.contact__form-btn').textContent = 'Sending...';
	const formData = new FormData(form);
	fetch('https://formsubmit.co/hello@hotheads.pro', {
		method: 'POST',
		body: formData,
	})
		.then(response => response.text())
		.then(data => {
			console.log(data);
			form.classList.toggle('hide');
			document.querySelector('.contact__titles').classList.toggle('hide');
			document.querySelector('.contact__form-success').classList.toggle('active');
		})
		.catch(error => {
			console.error('Error sending data:', error);
		});
}

// Найти все якорные ссылки с классом .menu__link
const menuLinks = document.querySelectorAll('.menu__link');

// Добавить обработчики событий для каждой ссылки
menuLinks.forEach(link => {
	link.addEventListener('click', (e) => {
		e.preventDefault();

		// Получить значение атрибута href ссылки
		const targetId = link.getAttribute('href').substring(1);

		// Найти целевой блок
		const targetBlock = document.getElementById(targetId);

		// Плавно прокрутить страницу к целевому блоку
		window.scrollTo({
			top: targetBlock.offsetTop - 40, // Учитывайте высоту header
			behavior: 'smooth'
		});
	});
});
