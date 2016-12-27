console.log("Hello world!");
import react from 'react';
import reactDOM from 'react-dom';
import Counter from './counter';

document.addEventListener('DOMContentLoaded',function(){
	reactDOM.render(react.createElement(Counter),document.getElementById('mount'));
});