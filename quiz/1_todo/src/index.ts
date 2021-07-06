let todoItems: {id: number, title: string, done: boolean}[];
//배열안에 객체가 있기 때문에 타입은 object[]

// api
//fetchTodoItems 함수의 반환 값은 object[]
//보다 구체적으로 type 정의함
function fetchTodoItems(): {id: number, title: string, done: boolean}[] {
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
function addTodo(todo:{id: number, title: string, done: boolean}):void {
  todoItems.push(todo);
}

//index의 타입은 number
//반환값은 void
function deleteTodo(index: number):void {
  todoItems.splice(index, 1);
}

//index는 number
//반환값은 없어서 void
function completeTodo(index: number, todo: {id: number, title: string, done: boolean}): void {
  todo.done = true; //todo 객체의 프로퍼티를 구체적으로 설정해주면 오류 사라짐.
  todoItems.splice(index, 1, todo);
}

// business logic
function logFirstTodo(): object {
  return todoItems[0];
}

function showCompleted():object[] {
  return todoItems.filter(item => item.done); //모르겠음
}

// TODO: 아래 함수의 내용을 채워보세요. 아래 함수는 `addTodo()` 함수를 이용하여 2개의 새 할 일을 추가하는 함수입니다.
//반환값이 없어서 void
function addTwoTodoItems(): void {
  // addTodo() 함수를 두 번 호출하여 todoItems에 새 할 일이 2개 추가되어야 합니다.
  const item4:object = {
    id: 4,
    title: "nice",
    done: true
  }
  addTodo(item4);
  addTodo({
    id: 5,
    title: "ho",
    done: false
  })
}
// NOTE: 유틸 함수
function log(): void {
  console.log(todoItems);
}

todoItems = fetchTodoItems();
addTwoTodoItems();
log();


