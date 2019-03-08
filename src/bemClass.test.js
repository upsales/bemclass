// import the component to test
import bemClass from './bemClass';

describe('bemClass', () => {
	it('Should set block', () => {
		expect(new bemClass('TEMP').valueOf()).toEqual('TEMP');
	});

	it('Should set element', () => {
		expect(new bemClass('TEMP').elem('temp').valueOf()).toEqual('TEMP__temp');
	});

	it('Should set modifier and return instance (object)', () => {
		expect(new bemClass('TEMP').mod({temp: 'temp'}).valueOf()).toEqual('TEMP TEMP--temp');
	});

	it('Should set modifier and return instance (string)', () => {
		expect(new bemClass('TEMP').mod('temp').valueOf()).toEqual('TEMP TEMP--temp');
	});

	it('Should set modifier on instance (object)', () => {
		const classname = new bemClass('TEMP');
		classname.mod({temp: 'temp'});
		expect(classname.valueOf()).toEqual('TEMP TEMP--temp');
	});

	it('Should set modifier on instance string', () => {
		const classname = new bemClass('TEMP');
		classname.mod('temp');
		expect(classname.valueOf()).toEqual('TEMP TEMP--temp');
	});

	it('Should not set invalid modifier', () => {
		const classname = new bemClass('TEMP');
		classname.mod();
		classname.mod(null);
		classname.mod(undefined);
		classname.mod([]);
		expect(classname.valueOf()).toEqual('TEMP');
	});

	it('Should not set falsy modifier', () => {
		expect(new bemClass('TEMP').mod({hidden: true, active: false}).valueOf()).toEqual('TEMP TEMP--hidden');
	});

	it('Should handle split', () => {
		expect(new bemClass('TEMP').split(' ')).toEqual(['TEMP']);
	});

	it('Should handle b (build)', () => {
		expect(new bemClass('TEMP').elem('temp').b()).toEqual('TEMP__temp');
	});

	it('Should handle additions (extra classNames) b', () => {
		expect(new bemClass('TEMP', 'customClass').b()).toEqual('TEMP customClass');
	});

	it('Should handle additions (extra classNames) valueOf', () => {
		expect(new bemClass('TEMP', 'customClass').valueOf()).toEqual('TEMP customClass');
	});

	it('Should handle additions of a bemClass instance', () => {
		expect(new bemClass('TEMP', new bemClass('shitClass')).b()).toEqual('TEMP shitClass');
	});
});