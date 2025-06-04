import {
	calculateImc,
	calculateTmb,
	getImcClassification,
} from '../../scripts/formulas.js';

describe('calculateImc', () => {
	test('aplicação possui IMC', () => {
		const imc = calculateImc();
		expect(imc);
	});

	test('aplicação retorna o cálculo do imc', () => {
		const imc = calculateImc(70, 175);
		expect(imc).toBe('22.86');
	});

	test('aplicação não permite valores nulos', () => {
		const imc = calculateImc(-70, 175);
		expect(imc).toBeNull();
	});
	test('aplicação que retorna o resultado dos calculos do TMB', () => {
		const tmb = calculateTmb(70, 21, 171, 'M');
		expect(tmb.active_exercise_calories).toBe(2878.59375);
	});

	test('aplicação que retorna o resultado das tabelas do IMC', () => {
		const resultTabelaIMC = getImcClassification(27);
		expect(resultTabelaIMC).toBe('result-imc-classification-overweight');
	});
});
