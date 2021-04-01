import React from "react";

const FakeTransition = ({ children }) => children;
const FakeCSSTransition = (props) =>
  props.transitionName ? (
    <FakeTransition>{props.children}</FakeTransition>
  ) : null;

module.exports = {
  CSSTransitionGroup: FakeCSSTransition,
  Transition: FakeTransition,
};
