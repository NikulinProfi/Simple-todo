const todoList = document.querySelector('#todo-list')
// console.log(todoList)
const todoForm = document.querySelector('#todo-form')
// console.log(todoForm)
const todoInput = document.querySelector('#todo-input')
// console.log(todoInput)

todoForm.addEventListener('submit', formHandler1)

function formHandler(event) {
  event.preventDefault()
  // console.log('submit')

  //Получаем название задачи
  const taskText = todoInput.value
  // console.log(taskText)

  // Создаем тег li через раземетку
  const li = `<li>${taskText}</li>`
  // console.log(li)

  // Добавляем разметку на страницу
  todoList.insertAdjacentHTML('beforeend', li)

  // Очищаем поле ввода
  todoInput.value = ''

  // Фокус на поле ввода
  todoInput.focus()
}

function formHandler1(event) {
  event.preventDefault()
  //Получаем название задачи
  const taskText = todoInput.value

  // Создаем тег li с помощью создания элемента
  const newTask = document.createElement('li')
  newTask.innerText = taskText
  console.log(newTask)

  // Создаем кнопку удалить
  const deleteBtn = document.createElement('button')
  deleteBtn.setAttribute('role', 'button')
  deleteBtn.innerText = 'Удалить'
  deleteBtn.style['margin-left'] = '15px'
  newTask.append(deleteBtn)

  // Добавляем событие по клику
  deleteBtn.addEventListener('click', deleteTask)

  // Добавляем элемент на страницу
  todoList.append(newTask)

  // Очищаем поле ввода
  todoInput.value = ''

  // Фокус на поле ввода
  todoInput.focus()
}

function deleteTask() {
  this.closest('li').remove()
}
