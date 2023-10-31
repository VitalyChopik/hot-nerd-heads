
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
	fetch('https://formsubmit.co/chopikvitali@yandex.by', {
		method: 'POST',
		body: formData,
	})
		.then(response => response.text())
		.then(data => {
			form.classList.toggle('hide');
			document.querySelector('.contact__titles').classList.toggle('hide');
			document.querySelector('.contact__form-success').classList.toggle('active');
		})
		.catch(error => {
			console.error('Error sending data:', error);
		});
}