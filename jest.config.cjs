/** @type {import('jest').Config} */
module.exports = {
	clearMocks: true,
	collectCoverage: true,
	coverageDirectory: 'coverage',
	coverageProvider: 'v8',
	testEnvironment: 'jsdom',

	transform: {
		'^.+\\.js$': 'babel-jest',
	},
};
