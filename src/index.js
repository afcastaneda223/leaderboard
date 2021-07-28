/* eslint-disable no-unused-vars */
import _ from 'lodash';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const getForm = document.querySelector('#form');
const getScore = document.getElementById('scoreInput');
const getName = document.getElementById('nameInput');
const getUl = document.querySelector('ul');
const getRefresh = document.getElementById('refreshBtn');

getForm.addEventListener('submit', (e) => {
  const nameValue = getName.value;
  const scoreValue = getScore.value;
  e.preventDefault();
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/BlsQTBvNRc0oLQlcOPFw/scores/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: nameValue,
      score: scoreValue,
    }),
  })
    .then((res) => res.json());
});

getRefresh.addEventListener('click', (e) => {
  e.preventDefault();
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/BlsQTBvNRc0oLQlcOPFw/scores/', {
    method: 'GET',
  })
    .then((res) => res.json())
    .then((data) => {
      getUl.innerHTML = '';
      data.result.forEach((elem) => {
        const li = document.createElement('li');
        li.setAttribute('class', 'list-group-item list-group-item-action');
        const p = document.createElement('p');
        p.innerText = `${elem.user}: ${elem.score}`;
        li.appendChild(p);
        getUl.appendChild(li);
      });
    });
});
