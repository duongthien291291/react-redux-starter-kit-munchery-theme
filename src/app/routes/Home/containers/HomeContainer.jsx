import { connect } from 'react-redux'
import { updateUserInfo } from '../modules/HomeReducer'

import Home from '../components/Home'

const mapDispatchToProps = {
  updateUserInfo : (user) => updateUserInfo(user),
}

const mapStateToProps = (state) => ({
  user: state.home.user
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
