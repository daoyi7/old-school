import React from 'react'
import Header from './header'
import Footer from './footer'
import Home from '../home'
import Welcome from '../welcome'

class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children ? this.props.children : <Home />}
        <Footer />
      </div>
    )
  }
}

export default Layout