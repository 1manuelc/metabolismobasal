import {
	calculateImc,
	getImcClassification,
	calculateTmb,
} from './formulas.js';

document.querySelector('form').addEventListener('submit', handleSubmit);

function handleSubmit(event) {
	event.preventDefault();

	const data = {
		weight: Number(document.getElementById('input_weight').value),
		age: Number(document.getElementById('input_age').value),
		height: Number(document.getElementById('input_height').value),
		gender: getUserGender('select_gender'),
		imc: calculateImc(
			Number(document.getElementById('input_weight').value),
			Number(document.getElementById('input_height').value)
		),
		tmb: calculateTmb(
			Number(document.getElementById('input_weight').value),
			Number(document.getElementById('input_age').value),
			Number(document.getElementById('input_height').value),
			getUserGender('select_gender')
		),
	};

	updateResults(data, data.imc);
}

function updateResults(data, imc) {
	document.getElementById('result-tmb').innerHTML = Math.ceil(data.tmb.tmb);
	document.getElementById('result-sedentary-calores').innerHTML = Math.ceil(
		data.tmb.sedentary_calories
	);
	document.getElementById('result-light-exercise-calories').innerHTML =
		Math.ceil(data.tmb.light_exercise_calories);
	document.getElementById('result-moderate-exercise-calories').innerHTML =
		Math.ceil(data.tmb.moderate_exercise_calories);
	document.getElementById('result-active-exercise-calories').innerHTML =
		Math.ceil(data.tmb.active_exercise_calories);
	document.getElementById('result-super-active-exercise-calories').innerHTML =
		Math.ceil(data.tmb.super_active_exercise_calories);

	document.getElementById('result-to-weight-gain-calories').innerHTML =
		Math.ceil(data.tmb.to_weight_gain_calories);
	document.getElementById('result-to-weight-loss-calories').innerHTML =
		Math.ceil(data.tmb.to_weight_loss_calories);

	document.getElementById('imc').innerHTML = imc;

	const imcClassKey = getImcClassification(imc);
	const imcClassElement = document.getElementById('imc_classification');
	imcClassElement.setAttribute('data-locale', imcClassKey);

	const translations = JSON.parse(localStorage.getItem('translations') || '{}');
	if (translations[imcClassKey]) {
		imcClassElement.innerHTML = translations[imcClassKey];
	}

	document.getElementById('result-data').style.visibility = 'visible';
}

function getUserGender(id) {
	const select = document.getElementById(id);
	return select.options[select.selectedIndex].value;
}
