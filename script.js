const elements = {
	habitName: document.querySelector('.habit__name'),
	habitAmount: document.querySelector('.habit__amount'),
	habitPeriod: document.querySelector('.habit__period'),
	habitList: document.querySelector('.habit-list')
};

const addHabit = (name, amount, period, current = 0) => {
	const markup = `
	<div class="habit-item">
		<div>${name}</div>
		<div>Description?</div>
		<div>${current}/${amount} | <progress value="${current}" max="${amount}"></progress></div>
	</div>
	`;
	elements.habitList.insertAdjacentHTML('beforeend', markup);
}

document.querySelector('.habit-form').addEventListener('submit', e => {
	e.preventDefault();

	// Clear field
	elements.habitName.value = '';

	addHabit(elements.habitName.value, elements.habitAmount.value, elements.habitPeriod.value);
});