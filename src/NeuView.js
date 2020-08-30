import React, { Component } from 'react';
import NeuPressedView from './NeuPressedView';
import NeuUnpressedView from './NeuUnpressedView';

export default class NeuView extends Component {
  render() {
    const pressed = this.props.pressed;

    if (pressed) {
      return <NeuPressedView {...this.props} />;
    } else {
      return <NeuUnpressedView {...this.props} />;
    }
  }
}
