

console.log('-index.js-')


//-------------------------------------------
// using DOM API
//-------------------------------------------

var box = document.querySelector('.alert-info')
var hideBtn = document.querySelector('.btn-danger')
var showBtn = document.querySelector('.btn-primary')

hideBtn.addEventListener('click', e => {
    box.style.display = "none"
})
showBtn.addEventListener('click', e => {
    box.style.display = ""
})


//-------------------------------------------
// using DOM API   + XHR / fetch API
//-------------------------------------------

var todosBtn = document.getElementById("todos-btn")
todosBtn.addEventListener('click', e => {
    var apiUrl = "https://jsonplaceholder.typicode.com/todos?_limit=5";
    let promise = fetch(apiUrl)
    document.getElementById('message').innerText = "Loading todos";
    promise
        .then(response => response.json())
        .then(todos => {
            let eles = todos.map((todo) => {
                return `
                    <li class="list-group-item ${todo.completed ? 'bg-success' : ''}">
                        ${todo.id} ${todo.title} ${todo.completed}
                    </li>
                `
            })
            document.getElementById('message').innerText = "";
            document.getElementById('todos-list').innerHTML = eles.join(" ")
        })

})



//-------------------------------------------
// using DOM API + Timer API
//-------------------------------------------

var timeEle=document.getElementById('time');
setInterval(() => {
    timeEle.innerHTML = new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/kolkata' })
}, 1000);