import React from 'react'

class Text extends React.Component {
  render() {
    return (
      <p>{this.props.children}</p>
    )
  }
}

export default Text