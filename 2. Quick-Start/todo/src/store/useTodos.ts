const useTodos = () => {
  const getTodos = () => {
    const currentRawTodos = localStorage.getItem("todos");
    if (!currentRawTodos) return [{ todo: "등록된 할 일이 없네요!", id: 0 }];
    const currentTodos = JSON.parse(currentRawTodos);
    return currentTodos;
  };

  const setTodos = (newTodo: string) => {
    const date = new Date();

    const newTodos = { todo: newTodo, id: date.getTime() };
    const currentTodos = getTodos();
    currentTodos.push(newTodos);
    localStorage.setItem("todos", JSON.stringify(currentTodos));
    return currentTodos;
  };
  return {
    getTodos,
    setTodos,
  };
};

export default useTodos;
