fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const uncompleted = json.filter((todo) => !todo.completed)
    console.log(uncompleted)
    uncompleted.forEach((todo, index) => {
      console.log(`${todo.title} - ${todo.completed}`)
    })
  })
  .catch(function(err) { 
    console.log(err);
  });
