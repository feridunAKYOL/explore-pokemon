console.log('hi');
document.querySelector('.btn').addEventListener('click', function(event) {
	const pokid = event.target.form.pokemonId.value;
	fetch(`https://pokeapi.co/api/v2/pokemon/${pokid}`)
		.then((res) => res.json())
		.then((data) => {
			console.log(data);

			return new Pokemon(data);
		})
		.then((output) => {
			console.log(output);

			const view = output.render();
			document.querySelector('#root').appendChild(view);
		})
		.catch((err) => console.error(err));
});
