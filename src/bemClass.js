/**
* Create bem class names
*
* block: Block name 
* elem: Element __element
* ...mod: Modifier --modifier
*
* Use .b() to build string if component does not use valueOf 
*
**/
export default class BemClass {
	constructor(block, additions='') {
		this.block = block;
		this.additions = additions instanceof BemClass ? additions.b() : additions;
		this.mods = [];
	}

	valueOf() {
		const res =  this.mods.reduce((out, mod) => {
			out.push(`${this.block}--${mod}`);
			return out;
		}, [this.block]);
		if(this.additions) {
			res.push(this.additions);
		}
		return res.join(' ').trim();
	}

	b() {
		return this.valueOf();
	}

	split(str) {
		return this.valueOf().split(str);
	}

	elem(elem, additions) {
		return new BemClass(`${this.block}__${elem}`, additions);
	}

	mod(mod) {
		if(mod && typeof mod === 'string') {
			this.mods.push(mod);
		} else if(mod && typeof mod === 'object') {
			Object.keys(mod).forEach(key => {
				if(mod[key]) {
					this.mods.push([key]);
				}
			});
		}

		return this;
	}
}