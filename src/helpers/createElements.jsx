import React, { Component } from 'react';

class CustomElement extends Component {
  createElement(tagName, props = {}, ...children) {
    const tag = document.createElement(tagName);

    Object.keys(props).forEach((prop) => {
      tag.setAttribute(prop, props[prop]);
    });

    children.forEach((child) => {
      tag.append(child);
    });

    return tag;
  }

  render() {
    const customElement = this.createElement('div', { id: 'myElement', className: 'custom-class' }, 'Hello, World!');

    return <div>{customElement}</div>;
  }
}

export default CustomElement;
