import React from 'react';
import ReactDOM from 'react-dom';
import Report from './report';

it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Report />, div);
});
