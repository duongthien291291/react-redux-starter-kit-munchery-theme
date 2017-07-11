import { connect } from 'react-redux'
import { updateUserDataForAppState } from '../../../containers/AppReducer'

import Home from '../components/Home'

const mapDispatchToProps = {
  updateUserInfo : (user) => updateUserDataForAppState(user),
}

const mapStateToProps = (state) => ({
  user: state.home.user
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
