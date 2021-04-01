const FakeSwitchTransition = ({ children }) => children;

const FakeCSSTransition = (props) => {
  return props.classNames ? props.children : null;
};

module.exports = {
  SwitchTransition: FakeSwitchTransition,
  CSSTransition: FakeCSSTransition,
};
