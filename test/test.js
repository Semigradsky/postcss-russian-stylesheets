import postcss from 'postcss';
import { expect } from 'chai';

import plugin from '../';

const test = (input, output, opts, done) => {
	postcss([ plugin(opts) ]).process(input).then(result => {
		expect(result.css).to.eql(output);
		expect(result.warnings()).to.be.empty;
		done();
	}).catch(done);
};

describe('postcss-russian-stylesheets', () => {
	it('converted properties', done => {
		test(
			'a{ высота: xxx; ширина: xxx }',
			'a{ height: xxx; width: xxx }',
		{}, done);
	});
	it('converted values', done => {
		test(
			'a{ xxx: блочное; xxx: черный }',
			'a{ xxx: block; xxx: black }',
		{}, done);
	});
	it('xxx', done => {
		test(
			'a{ высота: 20пикселей; отображение: блочное; цвет: черный; цвет-фона: желтый; }',
			'a{ height: 20px; display: block; color: black; background-color: yellow; }',
		{}, done);
	});
});
