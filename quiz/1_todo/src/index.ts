let todoItems: object[];
//배열안에 객체가 있기 때문에 타입은 object[]

// api
//fetchTodoItems 함수의 반환 값은 object[]
function fetchTodoItems(): object[] {
  const todos = [
    { id: 1, title: '안녕', done: false },
    { id: 2, title: '타입', done: false },
    { id: 3, title: '스크립트', done: false },
  ];
  return todos;
}

// crud methods
function fetchTodos(): object[] {
  const todos = fetchTodoItems();
  return todos;
}

//리턴값이 없기 때문에 void로 설정
function addTodo(todo:object):void {
  todoItems.push(todo);
}

//index의 타입은 number
//반환값은 void
function deleteTodo(index: number):void {
  todoItems.splice(index, 1);
}

//index는 number
//반환값은 없어서 void
function completeTodo(index: number, todo: object): void {
  todo.done = true; //모르겠음
  todoItems.splice(index, 1, todo);
}

// business logic
function logFirstTodo() {
  return todoItems[0];
}

function showCompleted() {
  return todoItems.filter(item:Array => item:Array.done);
}

// TODO: 아래 함수의 내용을 채워보세요. 아래 함수는 `addTodo()` 함수를 이용하여 2개의 새 할 일을 추가하는 함수입니다.
function addTwoTodoItems() {
  // addTodo() 함수를 두 번 호출하여 todoItems에 새 할 일이 2개 추가되어야 합니다.
  function addTodo(id=4,: Array<string>)
  function addTodo(영어공부: Array<string>)
}
// NOTE: 유틸 함수
function log() {
  console.log(todoItems);
}

todoItems = fetchTodoItems();
addTwoTodoItems();
log();


