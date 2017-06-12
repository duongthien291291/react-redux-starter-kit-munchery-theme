import React from 'react'
import MuncheryHero from '../../../components/Munchery/MuncheryHero'
import MuncheryHiw from '../../../components/Munchery/MuncheryHiw'
import MuncheryMissionHero from '../../../components/Munchery/MuncheryMissionHero'
import MuncheryPillars from '../../../components/Munchery/MuncheryPillars'
import MuncheryManifesto from '../../../components/Munchery/MuncheryManifesto'
import MuncheryVillain from '../../../components/Munchery/MuncheryVillain'
import '../assets/style.scss'

class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div>
        <MuncheryHero></MuncheryHero>
        {/*<!-- .f-strata .hero -->*/}

        <MuncheryHiw></MuncheryHiw>
        {/*<!-- .f-strata .hiw -->*/}

        <MuncheryMissionHero></MuncheryMissionHero>
        {/*<!-- .f-strata .mission-hero -->*/}

        <MuncheryPillars></MuncheryPillars>
        {/*<!-- .f-strata pillars -->*/}

        <MuncheryManifesto></MuncheryManifesto>
        {/*<!-- .f-strata .manifesto -->*/}

        <MuncheryVillain></MuncheryVillain>
        {/*<!-- .f-strata .villain -->*/}

      </div>
    )
  }
}

export default Home
