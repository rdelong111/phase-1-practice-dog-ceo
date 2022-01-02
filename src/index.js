console.log('%c HI', 'color: firebrick')
const imgUrl = 'https://dog.ceo/api/breeds/image/random/4';
const breedUrl = 'https://dog.ceo/api/breeds/list/all';

document.addEventListener('DOMContentLoaded', () => {
	challenge1();
	challenge2_3_4();
});

function challenge1() {
	return fetch(imgUrl)
		.then((r) => r.json())
		.then(object => {
			const dogcontainer = document.getElementById('dog-image-container');
			object.message.forEach(dogimg => {
				const img = document.createElement('img');
				img.src = dogimg;
				dogcontainer.appendChild(img);
			});
		});
}

// challenge 2 & 3 & 4
function challenge2_3_4() {
	return fetch(breedUrl)
		.then((r) => r.json())
		.then(inside2_3_4);
}

function inside2_3_4(object) {
	const dropmenu = document.getElementById('breed-dropdown');
	attachingdogs(object, dropmenu.value);
	changingcolors();

	dropmenu.addEventListener('change', () => {
		const dogslist = document.getElementById('dog-breeds');
		dogslist.innerHTML = '';
		attachingdogs(object, dropmenu.value);
	});
}

function attachingdogs(object, dmvalue) {
	const doglist = document.getElementById('dog-breeds');
	for (dogtype in object.message) {
		for (dogbreed of object.message[dogtype]) {
			if (dogbreed[0] === dmvalue) {
				const breedname = document.createElement('li');
				breedname.innerHTML = `<span class="clickbold">${dogbreed} ${dogtype}</span>`;
				doglist.appendChild(breedname);
			}
		}
	}
}

function changingcolors() {
	const alldogs = document.getElementsByClassName('clickbold');
	for (const single of alldogs) {
		single.addEventListener('click', () => {
			if (single.classList[1]) {
				single.classList.remove('colored');
			}
			else {
				single.classList.add('colored');
			}
		});
	}
}