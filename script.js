const container = document.querySelector('.container');
const btnShow = document.createElement("button");

container.appendChild(btnShow)

btnShow.innerText = "הצג ריבוע"

btnShow.addEventListener('click', createQube);


function createQube() {
    const yellowDiv = document.createElement('div');
    yellowDiv.classList.add('yellowDiv')
    yellowDiv.style.background = "yellow"
    yellowDiv.style.width = '100px'
    yellowDiv.style.height = '100px'
    container.appendChild(yellowDiv)
    checkIfHasQube()
}

// function checkIfHasQube() {
//     if (yellowDiv.style.display == 'none') {
//         yellowDiv.style.display == 'block'
//     }
// }
const nameU = document.createElement('p');




async function feachUser() {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json()
    console.log(data.results);
    return createUser(data.results) 
}
feachUser()

function createUser(results) {
    results.forEach(r => {
        nameU.innerHTML = 'name: ' + r.name.first + ' ' + r.name.last
        container.appendChild(nameU)     
    });
}



