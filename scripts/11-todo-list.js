const todolist = [{
	name:'make dinner',
	duedate: '2024-12-14'
},{
	name:'wash dishes',
	duedate:'2024-12-14'
}];

function renderTodolist() {
	let todolistHTML = '';
	
	for (let i = 0; i < todolist.length; i++) {
		const todoObject = todolist[i];
	//	const name = todoObject.name;
	//	const duedate = todoObject.duedate;
		const {name, duedate} = todoObject;

		const html = `
		<div>${name} </div>
		<div> ${duedate} </div>
		<button onclick="
			todolist.splice(${i}, 1);
			renderTodolist();
		" class="delete-todo-button">Delete</button>
		`;
		todolistHTML += html;

	}

	document.querySelector('.js-todo-list').innerHTML = todolistHTML;
}

function addTodo() {
	const inputElement = document.querySelector('.js-name-input');
	const name = inputElement.value;

	const dateinputElement = document.querySelector('.js-due-date-input');
	const duedate = dateinputElement.value;

	todolist.push({
		//name: name,
		//duedate: duedate,
		name,
		duedate
	});

	inputElement.value = '';
	renderTodolist();
}