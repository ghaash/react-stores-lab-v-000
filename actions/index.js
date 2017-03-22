const React = require('react');
const CounterStore = require('../stores/counterStore')

const increment = () =>  {
  CounterStore.increment();
};

const decrement = () => {
  CounterStore.decrement();
};

module.exports = {
  // Your implementation here.
  // Hint: We need two actions!
  increment,
  decrement
};
