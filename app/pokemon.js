class Pokemon {
	name = '';
	imgUrl = '';
	constructor(data) {
		this.name = data.name;
		this.imgUrl = data.sprites.front_shiny;
	}
	render() {
		const pEl = document.createElement('p');
		pEl.textContent = `this is ${this.name}`;

		const image = document.createElement('img');
		image.src = this.imgUrl;

		const divEl = document.createElement('div');
		divEl.appendChild(pEl);
		divEl.appendChild(image);
		divEl.id = name;

		return divEl;
	}
}
