import React from 'react'
import './MuncheryManifesto.scss'

export const MuncheryManifesto = () => (
  <div className="f-strata manifesto">
    <div className="fluid-container">
      <div className="row center-x">
        <div className="video-wrapper phone-col-12 tablet-col-10 desktop-col-9">
          <div>
            <div className="video masked">
              <iframe width="100%" height="100%"
                      src="https://www.youtube.com/embed/e6TeqtjXprY?modestbranding=1&amp;autohide=1&amp;showinfo=0&amp;controls=1&amp;enablejsapi=1"
                      frameBorder="0" allowFullScreen=""></iframe>
            </div>
          </div>
        </div>

        <div className="phone-col-12 tablet-col-10 desktop-col-12 blurb">
          <h2>The Munchery Manifesto</h2>
          <p>
            We’ve entered a world which transcends traditional mealtimes. Your desk is your dinner table. Your
            home
            is your office. Your office is a coffee shop. And when it comes to dinner, you’ve already got enough
            on
            your plate without having to worry about what’s going <span><i>on</i> your plate.</span>
          </p>
          <p>
            But just because you’re busy doesn’t mean you’re willing to compromise when it comes to food — in
            fact,
            your standards are sky high. You want delicious, all-natural, chef-crafted food, precisely where and
            when you want it, whether that means scoring an easy win for dinner tonight, or stocking the fridge
            with
            meals for the week. You need mealtime on your terms, and that’s where we come in. It’s not take-out.
            It’s not home cooking. <span>It’s Munchery.</span>
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default MuncheryManifesto
