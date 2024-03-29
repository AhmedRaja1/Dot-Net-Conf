window.addEventListener('load', main);

function main() {
	const navbarMenuButton = document.getElementById('navbar-menu-btn');
	const navbarNav = document.querySelector('.navbar > nav');

	let isOpen = false;

	navbarMenuButton.addEventListener('click', () => {
		if (isOpen) {
			navbarNav.style.display = 'none';
			isOpen = false;
		} else {
			navbarNav.style.display = 'flex'; 
			isOpen = true;
		}
	});
}
