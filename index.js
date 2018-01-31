import emojis from './emojis';
import './demo-style.css';
import './native-emoji-stylesheet.css';

const list = document.querySelector('ul');

const filterDisplayedEmojis = ({target}) => {
    displayEmojis(emojis.filter(e => e.includes(target.value.toLowerCase())));
};

const displayEmojis = selected => {
    list.innerHTML = selected.reduce((fragment, code) => {
        return `${fragment}<li title="${code}"><i class="${code}"></i><p>${code}</p></li>`;
    }, '');
};

displayEmojis(emojis);
document.querySelector('#filter')
    .addEventListener('input', filterDisplayedEmojis);
