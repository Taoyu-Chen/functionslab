fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const todosComArr = json.reduce((n, todo) => {
      todo.completed ? n : n.push({ userID: todo.userId, title: todo.title })
      return n;
    }, []);
    console.log(todosComArr);
  })
  .catch(function(err) { 
    console.log(err);
  });
