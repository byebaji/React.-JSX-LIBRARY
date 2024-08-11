import './App.css';

function App() {
	const name = 'Святослав';
	const welcome = 'Ласкаво просимо до нашого сайту!';

	const firstN = 2;
	const secondN = 3;
	const resultN = firstN + secondN;

	const colors = ['Червоний', 'Синій', 'Зелений'];

	const img = {
		src: 'https://kartinki.pics/pics/uploads/posts/2022-09/1662615787_1-kartinkin-net-p-milie-kotiki-v-shapochkakh-instagram-1.jpg',
		alt: 'image',
	};

	const twitch = {
		name: 'twitch',
		url: 'twitch.tv',
	};
	return (
		<div className='App'>
			<header className='App-header'>
				<h1>{welcome}</h1>
				<h1>{name}</h1>

				<img src={img.src} alt={img.alt}></img>

				<a href={twitch.url}>{twitch.name}</a>

				<p>{resultN}</p>

				<ul>
					{colors.map((color, index) => (
						<li key={index}>{color}</li>
					))}
				</ul>
			</header>
		</div>
	);
}

export default App;
