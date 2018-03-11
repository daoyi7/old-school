import React from 'react'
import Text from 'components/text'
import {Link} from 'react-router'
import style from './styles/footer.less'

class Footer extends React.Component {
  render() {
    return (
      <div className={style.footer}>
        <Text><Link to="/">old-school</Link> is Developed By Kawhi</Text>
      </div>
    )
  }
}

export default Footer