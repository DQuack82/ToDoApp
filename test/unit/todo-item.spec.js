import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';

import TodoItem from '../../src/todo-item'

describe('Check All Items', () => {
  it('should check all items', () => {
    const todoItem = mount(<TodoItem/>);
    const listItem = todoItem.find(TodoItem);

    expect(listItem).to.have.length(1);
    expect(listItem.children().first().type()).to.equal('span');
    expect(listItem.children().first().text()).to.equal('Hello World');
  });
});