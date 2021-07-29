/* eslint-disable no-unused-vars */
import _ from 'lodash';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const getForm = document.querySelector('#form');
const getScore = document.getElementById('scoreInput');
const getName = document.getElementById('nameInput');
const getUl = document.querySelector('ul');
const getRefresh = document.getElementById('refreshBtn');

async function fetchStart(a, b) {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Ytd5zJzS5gn4qgb9ylPV/scores/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: a,
      score: b,
    }),
  })
    .then((res) => res.json());
  return response;
}

getForm.addEventListener('submit', (e) => {
  const nameValue = getName.value;
  const scoreValue = getScore.value;
  e.preventDefault();
  fetchStart(nameValue, scoreValue);
  getForm.reset();
});

async function fetchRefresh() {
  const refresh = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Ytd5zJzS5gn4qgb9ylPV/scores/');
  const scores = await refresh.json();
  return scores;
}
getRefresh.addEventListener('click', () => {
  fetchRefresh().then((data) => {
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
