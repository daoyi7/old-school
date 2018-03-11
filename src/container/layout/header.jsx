import React from 'react'
import Logo from 'components/logo'
import style from './styles/header.less'

class Header extends React.Component {
  render() {
    return (
      <div className={style.header}>
        <Logo />
        {/* <h2>This is Header Component</h2> */}
      </div>
    )
  }
}

export default Header