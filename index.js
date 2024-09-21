const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

addButton.addEventListener('click', function () {//при клике
    const taskText = taskInput.value;//берет значение из input
    const newTask = document.createElement('li');//создает новый элемент списка
    newTask.textContent = taskText; //в новый элемент берет значенм ранее полученное из input
    taskList.append(newTask);//добавлят новый элемент со значенем вниз 
    taskInput.value = '';//обнуляет значение ввода формы
});

taskList.addEventListener('click', function (evt) {
	if (evt.target.tagName === 'LI') {//только при клике на элемент li
		evt.target.classList.toggle('completed'); //если еще раз кликнуть - стиль отмнится
	}
});