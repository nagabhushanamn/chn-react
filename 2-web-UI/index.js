

console.log('-index.js-')

//----------------------------------------------------------------
// way-1 : plain-JS
//----------------------------------------------------------------

// Actual DOM elements
let asia_kolkata_ele = document.getElementById('asia_kolkata_v1')
let asia_dubai_ele = document.getElementById('asia_dubai_v1')
let ameria_newyork_ele = document.getElementById('america_newyork_v1')

// component class
function Clock(props) {
    let timeZone = props.timeZone;
    return `
        <div class="card">
            <div class="card-header">${timeZone}</div>
            <div class="card-body">
                <span class="badge badge-dark">${new Date().toLocaleTimeString('en-US', { timeZone: timeZone })}</span>
            </div>
        </div>
    `
}
setInterval(() => {
    asia_kolkata_ele.innerHTML = Clock({ timeZone: 'Asia/Kolkata' });
    asia_dubai_ele.innerHTML = Clock({ timeZone: 'Asia/Dubai' });
    ameria_newyork_ele.innerHTML = Clock({ timeZone: 'America/New_york' });
}, 1000);



//----------------------------------------------------------------
// way-1 : React-js
//----------------------------------------------------------------


// Actual DOM elements
let asia_kolkata_ele_v2 = document.getElementById('asia_kolkata_v2')
let asia_dubai_ele_v2 = document.getElementById('asia_dubai_v2')
let ameria_newyork_ele_v2 = document.getElementById('america_newyork_v2')

// // component class

// function NewClock(props) {
//     let timeZone = props.timeZone;
//     let div1 = React.createElement('div', { className: 'card-header' }, timeZone)
//     let span = React.createElement('span', { className: 'badge badge-dark' }, new Date().toLocaleTimeString('en-US', { timeZone: timeZone }))
//     let div2 = React.createElement('div', { className: 'card-body' }, span)
//     let div = React.createElement('div', { className: 'card' }, div1, div2)
//     return div;
// }

// JSX
function NewClock(props) {
    let timeZone = props.timeZone;
    return (
        <div className="card">
            <div className="card-header">{timeZone}</div>
            <div className="card-body">
                <span className="badge badge-dark">{new Date().toLocaleTimeString('en-US', { timeZone: timeZone })}</span>
            </div>
        </div>
    )

}

setInterval(() => {
    ReactDOM.render(NewClock({ timeZone: 'Asia/Kolkata' }), asia_kolkata_ele_v2)
    ReactDOM.render(NewClock({ timeZone: 'Asia/Dubai' }), asia_dubai_ele_v2)
    ReactDOM.render(NewClock({ timeZone: 'America/New_york' }), ameria_newyork_ele_v2)
}, 1000);