import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});

import H1 from "../styles/H1";
import InputForm from "./InputForm";
import TodoList from "../components/TodoList";

describe("<App />", () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("displays an <InputForm>, <H1> and <TodoList> components", () => {
    const component = shallow(<App />);
    expect(component.find(H1).length).toEqual(1);
    expect(component.find(InputForm).length).toEqual(1);
    expect(component.find(TodoList).length).toEqual(1);
  });
});

