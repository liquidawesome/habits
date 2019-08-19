const elements = {
	habitName: document.querySelector('.habit__name'),
	habitAmount: document.querySelector('.habit__amount'),
	habitPeriod: document.querySelector('.habit__period'),
	habitList: document.querySelector('.habit-list')
};

const addHabit = (name, amount, period, current = 0) => {
	let time = new Date();
	let remaining;
	switch (period) {
		case 'day':
			remaining = (24 - time.getHours()) + ' hours';
			break;
		case 'week':
			remaining = (6 - time.getDay()) + ' days';
			break;
		case 'month':
			const time_tmp = new Date(time.getFullYear(), time.getMonth() + 1, 1);
			const lastDay = new Date(time_tmp - 1).getDate();
			remaining = (lastDay - time.getDate()) + ' days';
			break;
		default:
			time = 0;
			console.log('???');
			break;
	}
	const markup = `
	<div class="habit-item">
		<div>${name}</div>
		<div class="habit__progress">${current}/${amount} | <progress value="${current}" max="${amount}"></progress></div>
		<div class="habit__update">
		<button class="btn btn-secondary" data-update="-25">-25</button>
		<button class="btn btn-secondary" data-update="-1">-1</button>
		<button class="btn btn-secondary" data-update="+1">+1</button>
		<button class="btn btn-secondary" data-update="+25">+25</button>
		</div>
		<div>${remaining} left</div>
	</div>
	`;
	elements.habitList.insertAdjacentHTML('beforeend', markup);
}

const updateCount = (update, current = 0) => {
	const updateType = update.charAt(0);
	const updateValue = update.substring(1);

	if (updateType === '+') {
		current += updateValue;
	} else if (updateType === '-') {
		current -= updateValue;
	}
};

document.querySelector('.habit-form').addEventListener('submit', e => {
	e.preventDefault();
	addHabit(elements.habitName.value, elements.habitAmount.value, elements.habitPeriod.value);

	// Clear field
	elements.habitName.value = '';
});

document.querySelector('.habit-list').addEventListener('click', e => {
	const update = e.target.dataset.update;
	if (update) {
		updateCount(update);
	}
});