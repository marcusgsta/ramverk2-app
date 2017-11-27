import React from 'react';
import { shallow } from 'enzyme';
import Chat from './chat';

it('renders without crashing', () => {
    shallow(<Chat />);
});


// import App from './App';

it('renders welcome message', () => {
    const wrapper = shallow(<Chat />);
    const welcome = <h1>Chat</h1>;

    expect(wrapper.contains(welcome)).toEqual(true);
});
//
// import { updateScroll } from './chat';
// var element = document.createElement('div');
//
// element.style.height = '100px';
// element.style.width = '100px';
// element.style.overflow = 'scroll';
// element.innerHTML = '<br>x<br>x<br>x<br>x<br>x<br>x<br>x<br>x';
// document.body.appendChild(element);
// element.scrollTop = 100;
// element.scrollHeight = 200;
//
// const scrollState = updateScroll(element);
//
// expect(scrollState.scrollHeight).toBe(100);

// describe('updateScroll', () => {
//
//     jest.spyOn(Chat, 'updateScroll');
//     test('have the same value', () => {
//         expect(element.scrollTop).toEqual(element.scrollHeight);
//     });
// });
