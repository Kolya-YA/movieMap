const info = (...params: unknown[]): void => {
	// biome-ignore lint/suspicious/noConsoleLog: <explanation>
	console.log(...params);
};

const error = (...params: unknown[]): void => {
	console.error(...params);
};

export default { info, error };