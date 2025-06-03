(function startDropdown() {
	const dropdownList = document.querySelector('.dropdown-list');
	const customDropdown = document.querySelector('.custom-dropdown');
	const dropdownHeader = document.querySelector('.dropdown-header');
	const lanBarTop = document.querySelector('.lan-bar-top');

	document.addEventListener('click', function (event) {
		if (
			dropdownList.style.display === 'block' &&
			!dropdownHeader.contains(event.target)
		) {
			toggleDropdown(dropdownList, lanBarTop, customDropdown);
		}
	});

	dropdownHeader.addEventListener('click', () =>
		toggleDropdown(dropdownList, lanBarTop, customDropdown)
	);
})();

function toggleDropdown(dropdownList, lanBarTop, customDropdown) {
	if (dropdownList.style.display === 'block') {
		dropdownList.style.display = 'none';
		lanBarTop.classList.remove('open');
		customDropdown.classList.remove('open');
	} else {
		dropdownList.style.display = 'block';
		lanBarTop.classList.add('open');
		customDropdown.classList.add('open');
	}
}
