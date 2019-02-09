import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import TodoList from "./TodoList";
import TodoItem from "../styles/TodoItem";
import Success from "../styles/Success";

configure({ adapter: new Adapter() });

describe("<TodoList />", () => {
  it("should diplay one <TodoItem> for every to-do", () => {
    const todos = [{ id: 1, content: "Todo1" }, { id: 2, content: "Todo2" }];
    const component = shallow(<TodoList todos={todos} />);
    expect(component.find(TodoItem).length).toEqual(2);
  });

  it("should display <Success> message when there are 0 todos", () => {
    const component = shallow(<TodoList />);
    expect(component.find(Success).length).toEqual(1);
  });
});
