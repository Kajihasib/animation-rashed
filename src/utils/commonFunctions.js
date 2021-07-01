export const objectToArray = (input) => {
	const entries = Object.entries(input);
	entries.forEach((entry) => (entry[0] = +entry[0]));
	return entries;
};

export function translateToString(string) {
	string = string.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
	string = string.replace(/\s/g, '-');
	return string;
}
