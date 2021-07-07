import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';
import Navigation from './App';
import PlayerList from './App';
import Player from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Navigation component renders', () => {
  const component = render(<Navigation/>);
});

it('PlayerList component renders', () => {
    const component = render(<PlayerList/>);
});

it('Player component renders', () => {
  const component = render(<Player/>);

});