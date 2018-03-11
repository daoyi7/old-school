import React from 'react'
import Header from './header'
import Footer from './footer'
import Home from '../home'
import Welcome from '../welcome'
import style from './index.less'

class Layout extends React.Component {
  render() {
    return (
      <div className={style.container}>
        <Header />
        {this.props.children ? this.props.children : <Home />}
        <Footer />
      </div>
    )
  }
}

export default Layout