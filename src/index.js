import postcss from 'postcss';

import russianProperties from './properties.json';
import russianValues from './values.json';

export default postcss.plugin('postcss-russian-stylesheets', () => {
	return (css) => {
		css.walkDecls(decl => {
			Object.keys(russianProperties).forEach(property => {
				const russianProperty = russianProperties[property];
				decl.prop === russianProperty && (decl.prop = property);
			});

			Object.keys(russianValues).forEach(value => {
				const russianValue = russianValues[value];

				if (typeof russianValue === 'string') {
					decl.value = decl.value.replace(russianValue, value);
					return;
				}

				russianValue.forEach(val => {
					decl.value = decl.value.replace(val, value);
				});
			});

			if (decl.value.indexOf('!важно') >= 0) {
				decl.value = decl.value.replace(/\s*!важно\s*/, '');
				decl.important = true;
			}
		});
	};
});
