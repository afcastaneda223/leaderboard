import _ from 'lodash';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const getForm = document.querySelector('#form')
const getScore = document.getElementById('scoreInput')
const getName = document.getElementById('nameInput')
const getUl = document.querySelector('ul')

getForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const li = document.createElement('li');
    li.setAttribute('class', 'list-group-item list-group-item-action');
    const p = document.createElement('p');
    p.innerText = 'Name: ' + getName.value + ' /  Score: ' + getScore.value;
    li.appendChild(p)
    getUl.appendChild(li)
    getForm.reset()
})
