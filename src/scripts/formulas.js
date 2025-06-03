function calculateImc(weight, height) {
	if (weight <= 0 || height <= 0) {
		return null;
	}

	const heightInMeters = height / 100;
	const imc = weight / heightInMeters ** 2;
	return imc.toFixed(2);
}

function getImcClassification(imc) {
	if (imc < 18.5) return 'result-imc-classification-underweight';
	if (imc >= 18.5 && imc <= 24.9) return 'result-imc-classification-normal';
	if (imc >= 25 && imc <= 29.9) return 'result-imc-classification-overweight';
	if (imc > 30 && imc <= 34.9) return 'result-imc-classification-obesity-i';
	if (imc > 35 && imc <= 39.9) return 'result-imc-classification-obesity-ii';
	if (imc > 40) return 'result-imc-classification-obesity-iii';
	return '';
}

/* função para calcular a taxa metabólica basal e o nível de calorias necessárias
de acordo com a prática esportiva*/
function calculateTmb(weight, age, height, gender) {
	const tmbRate =
		gender === 'M'
			? 10 * weight + 6.25 * height - 5 * age + 5
			: 10 * weight + 6.25 * height - 5 * age - 161;

	const tmbData = {
		tmb: tmbRate,
		sedentary_calories: tmbRate * 1.2,
		light_exercise_calories: 1.375 * tmbRate,
		moderate_exercise_calories: 1.55 * tmbRate,
		active_exercise_calories: 1.725 * tmbRate,
		super_active_exercise_calories: 1.9 * tmbRate,
		to_weight_gain_calories: tmbRate + 450,
		to_weight_loss_calories: tmbRate - 450,
	};

	return tmbData;
}

export { calculateImc, getImcClassification, calculateTmb };
