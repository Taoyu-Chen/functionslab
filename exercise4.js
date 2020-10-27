fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const countCompleted = json.reduce((n, todo) =>
      todo.completed ? n + 1 : n, 0)
    console.log(countCompleted)

  })
  .catch(function(err) { 
    console.log(err);
  });
