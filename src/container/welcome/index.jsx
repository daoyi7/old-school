import React from 'react'
import style from './index.less'

class Welcome extends React.Component {
  render() {
    return (
      <h1 className={style.slogan}>Hey yo, this is old school!</h1>
    )
  }
}

export default Welcome