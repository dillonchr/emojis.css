import emojis from './emojis';
import './demo-style.css';
import './emojis.css';

const main = document.querySelector('main');

const hideIcon = li => li.className = 'hidden';

const showIcon = li => li.className = '';

const filterDisplayedEmojis = ({target}) => {
    const query = target.value.toLowerCase();
    const emojis = Array.from(main.querySelectorAll('li'));
    const callbacks = emojis
        .map(li => !query || li.textContent.includes(query) ? () => showIcon(li) : () => hideIcon(li))
        .forEach(cb => cb());
};

const createElem = (tag, attrs, text) => {
    const elem = document.createElement(tag);
    if (attrs) {
        Object.entries(attrs)
            .forEach(([name, value]) => elem.setAttribute(name, value));
    }
    if (text) {
        elem.textContent = text;
    }
    return elem;
};

document.querySelector('#filter')
    .addEventListener('input', filterDisplayedEmojis);

const icons = emojis.reduce((fragment, code) => {
    const li = createElem('li', {title: code});
    const icon = createElem('i', {class: code});
    const p = createElem('p', null, code);
    li.appendChild(icon);
    li.appendChild(p);
    fragment.appendChild(li);
    return fragment;
}, createElem('ul'));
main.appendChild(icons);
