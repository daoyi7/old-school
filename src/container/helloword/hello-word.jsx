import React, { PropTypes } from 'react';

export default function HelloWorld(props) {
  return <div className="hello-world">Hello {props.who}</div>;
}

// HelloWorld.propTypes = { who: PropTypes.string };

HelloWorld.defaultProps = { who: 'World!' };