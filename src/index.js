import _ from "lodash";
import './style.css';

const content = document.createElement('div');
const title = document.createElement('h1');
title.innerHTML = 'Hello Webpack!';

document.body.appendChild(content);
content.appendChild(title);
