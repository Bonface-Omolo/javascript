const todolist = [{
	name:'make dinner',
	duedate: '2024-12-14'
},{
	name:'wash dishes',
	duedate:'2024-12-14'
}];

function renderTodolist() {
	let todolistHTML = '';
	
	todolist.forEach((todoObject,index) => {
		const {name, duedate} = todoObject;

		const html = `
		<div>${name} </div>
		<div> ${duedate} </div>
		<button class="delete-todo-button js-delete-todo-button">Delete</button>
		`;
		todolistHTML += html;
	});
	

	document.querySelector('.js-todo-list')
	.innerHTML = todolistHTML;

	document.querySelectorAll('.js-delete-todo-button')
	.forEach( (deleteButton, index) => {
		deleteButton.addEventListener('click', () => {
			todolist.splice(index, 1);
			renderTodolist();
		})
	});

}


document.querySelector('.js-add-todo-button')
.addEventListener('click', () => {
	addTodo();
})

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