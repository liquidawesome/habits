const elements = {
	habitInput: document.querySelector('.habit-input'),
	habitList: document.querySelector('.habit-list')
};

const addHabit = (name) => {
	const markup = `
	<div class="habit-item">
		<div>${name}</div>
		<div>Description?</div>
		<div>50/100 | <progress value="25" max="100"></progress></div>
	</div>
	`;
	elements.habitList.insertAdjacentHTML('beforeend', markup);
}

document.querySelector('.habit-form > .btn').addEventListener('click', e => {
	const habit_name = elements.habitInput.value;

	// Clear field
	elements.habitInput.value = '';

	addHabit(habit_name);
	console.log(habit_name);
});