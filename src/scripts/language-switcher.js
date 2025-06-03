document.addEventListener('DOMContentLoaded', () => {
	const langSwitcher = document.getElementById('lang-switcher');

	const loadLanguage = async (lang) => {
		try {
			const res = await fetch(`./public/locales/${lang}/${lang}.json`);
			const translations = await res.json();

			localStorage.setItem('translations', JSON.stringify(translations)); // <-- aqui

			document.querySelectorAll('[data-locale]').forEach((el) => {
				const key = el.getAttribute('data-locale');
				if (translations[key]) {
					if (el.tagName === 'IMG') {
						el.src = translations[key];
					} else {
						el.innerHTML = translations[key];
					}
				}
			});

			document.documentElement.lang = lang;
			localStorage.setItem('lang', lang);
			document.querySelector('html').lang = lang;
			document.querySelector('body').lang = lang;
		} catch (error) {
			console.error('Erro ao carregar idioma:', error);
		}
	};

	langSwitcher.querySelectorAll('li').forEach((item) => {
		item.addEventListener('click', () => {
			const lang = item.getAttribute('data-lang');
			loadLanguage(lang);
		});
	});

	// Carregar idioma salvo ou padrão
	const savedLang = localStorage.getItem('lang') || 'pt-BR';
	loadLanguage(savedLang);
});
