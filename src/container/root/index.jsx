import React from 'react'
import Layout from 'container/layout'

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <Layout children={this.props.children ? this.props.children : null} />
      </div>
    )
  }
}

export default Welcome