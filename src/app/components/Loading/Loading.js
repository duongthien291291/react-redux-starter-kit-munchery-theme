import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { showLoading, hideLoading } from './LoadingReducer'
import './Loading.scss'

class Loading extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div className={'loading-invisible' + (this.props.loading.isloading ? ' loading' : ' loaded')}>
        <div className="loading-center">
          <div className="loading-center-absolute">
            <div className="object" id="object_one"></div>
            <div className="object" id="object_two"></div>
            <div className="object" id="object_three"></div>
            <div className="object" id="object_four"></div>
            <div className="object" id="object_five"></div>
            <div className="object" id="object_six"></div>
            <div className="object" id="object_seven"></div>
            <div className="object" id="object_eight"></div>
            <div className="object" id="object_big"></div>
          </div>
          <p>Please wait...</p>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  showLoading : () => showLoading(),
  hideLoading : () => hideLoading()
}

const mapStateToProps = (state) => ({
  loading : state.loading
})

export default connect(mapStateToProps, mapDispatchToProps)(Loading)
