fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const countCompleted = json.reduce((n, todo) => {
      if (todo.completed) {
        n[todo.userId] === undefined
          ? (n[todo.userId] = 1)
          : (n[todo.userId] += 1);
      }
      return n;
    }, {});
    console.log(countCompleted)
  })
  .catch(function(err) { 
    console.log(err);
  });
