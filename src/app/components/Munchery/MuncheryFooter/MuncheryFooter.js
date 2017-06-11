import React from 'react'
import './MuncheryFooter.scss'

export const MuncheryFooter = () => (
  <nav className="footer">
    <div className="footer-contents">
      <div className="footer-col collapsed">
        <h4>Help &amp; Support</h4>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 18" fill="#F27242" className="footer-caret">
          <path
            d="M16.5 18c-.4 0-.8-.1-1.1-.4l-15-15C-.1 2-.1 1 .4.4 1-.1 2-.1 2.6.4l13.9 13.9L30.4.4c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-15 15c-.2.4-.6.5-1 .5z"></path>
        </svg>

        <ul>
          <li><a className="faq-link" href="/help/">Help Center</a></li>
          <li><a href="/food-near-me/">Service Areas</a></li>
          <li><a href="/support/">Contact Support</a></li>
          <li><a href="/about/privacy-and-terms-of-service/">Privacy &amp; Terms</a></li>
        </ul>
      </div>
      <div className="footer-col collapsed">
        <h4>Munchery</h4>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 18" fill="#F27242" className="footer-caret">
          <path
            d="M16.5 18c-.4 0-.8-.1-1.1-.4l-15-15C-.1 2-.1 1 .4.4 1-.1 2-.1 2.6.4l13.9 13.9L30.4.4c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-15 15c-.2.4-.6.5-1 .5z"></path>
        </svg>

        <ul>
          <li><a href="/how-it-works/">How It Works</a></li>
          <li><a href="https://munchery.com/blog">Blog</a></li>
          <li><a href="/press/">Press</a></li>
        </ul>
      </div>
      <div className="footer-col collapsed">
        <h4>Products</h4>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 18" fill="#F27242" className="footer-caret">
          <path
            d="M16.5 18c-.4 0-.8-.1-1.1-.4l-15-15C-.1 2-.1 1 .4.4 1-.1 2-.1 2.6.4l13.9 13.9L30.4.4c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-15 15c-.2.4-.6.5-1 .5z"></path>
        </svg>

        <ul>
          <li><a href="/gifts/">Gift Cards</a></li>
          <li><a href="/giving/">Munchery Giving</a></li>
          <li><a href="/mobile/">Mobile Apps</a></li>
          <li><a href="/food-delivery/">Menu Sitemap</a></li>
        </ul>
      </div>
      <div className="footer-col last-col collapsed">
        <h4>Join Us</h4>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 18" fill="#F27242" className="footer-caret">
          <path
            d="M16.5 18c-.4 0-.8-.1-1.1-.4l-15-15C-.1 2-.1 1 .4.4 1-.1 2-.1 2.6.4l13.9 13.9L30.4.4c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-15 15c-.2.4-.6.5-1 .5z"></path>
        </svg>

        <ul>
          <li><a href="/jobs/">Jobs</a></li>
          <li><a href="/delivery/">Become A Driver</a></li>
          <li><a href="mailto:partnerships@munchery.com">Partnerships</a></li>
        </ul>
        <div className="footer-social phone-hide">
          <a href="https://www.facebook.com/munchery">
            <svg xmlns="http://www.w3.org/2000/svg" width="7" height="16" viewBox="0 0 7 16"
                 className="social-icon"><title>Group</title>
              <g fill="none" fillRule="evenodd">
                <path d="M-4 0h16v16H-4z"></path>
                <path className="color-path"
                      d="M5.338 2.807c-.35 0-.7.374-.7.655v1.871H7a43.859 43.859 0 0 1-.262 2.714h-2.1V16h-3.15V7.953H0V5.24h1.487V3.088C1.487 2.713 1.4 0 4.637 0h2.276C7 1.123 7 2.433 7 2.807H5.338z"
                      fill="#FFF"></path>
              </g>
            </svg>

          </a> <a href="https://twitter.com/munchery">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" viewBox="0 0 16 13"
               className="social-icon"><title>Group</title>
            <g fill="none" fillRule="evenodd">
              <path d="M0-2h16v16H0z"></path>
              <path className="color-path"
                    d="M14.211 3.7c0 4.3-3.28 9.3-9.242 9.3C3.08 13 1.39 12.5 0 11.5h.795c1.49 0 2.981-.5 4.075-1.4-1.392 0-2.584-1-3.081-2.3.199 0 .397.1.596.1.298 0 .596 0 .895-.1C1.789 7.5.696 6.2.696 4.6c.397.2.894.4 1.49.4-.894-.6-1.49-1.6-1.49-2.7 0-.6.198-1.2.397-1.7 1.59 2 3.975 3.3 6.758 3.4-.1-.2-.1-.5-.1-.7 0-1.8 1.491-3.3 3.28-3.3.894 0 1.789.4 2.385 1 .696-.1 1.49-.4 2.087-.8-.199.8-.795 1.4-1.391 1.8.695-.1 1.292-.3 1.888-.5-.596.7-1.193 1.3-1.789 1.8v.4z"
                    fill="#FFF"></path>
            </g>
          </svg>

        </a> <a href="https://www.pinterest.com/munchery/">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="17" viewBox="77 1 14 17"
               className="social-icon">
            <path className="color-path"
                  d="M82.5 11.9s-.6 2.3-.7 2.7c-.4 1.5-1.6 3.1-1.7 3.2-.1.1-.2.1-.2-.1s-.3-2.1 0-3.7c.2-.8 1.2-5.3 1.2-5.3s-.3-.6-.3-1.5c0-1.4.8-2.5 1.9-2.5.9 0 1.3.7 1.3 1.5 0 .9-.6 2.2-.9 3.5-.2 1 .5 1.9 1.5 1.9 1.8 0 3.1-2.4 3.1-5.2 0-2.1-1.4-3.7-4-3.7-2.9 0-4.7 2.2-4.7 4.7 0 .9.2 1.5.6 1.9.2.2.2.3.1.5 0 .2-.2.6-.2.8-.1.2-.3.3-.5.2-1.3-.6-2-2.1-2-3.7C77 4.3 79.3 1 83.9 1 87.6 1 90 3.7 90 6.6c.1 3.7-2 6.5-5.1 6.5-1 0-2-.6-2.4-1.2z"
                  fill="#515252" fillRule="evenodd"></path>
          </svg>

        </a> <a href="https://instagram.com/munchery/">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="117 2 14 15"
               className="social-icon">
            <path className="color-path"
                  d="M131 14.4c0 .9-.7 1.6-1.6 1.6h-10.8c-.9 0-1.6-.7-1.6-1.6V3.6c0-.9.7-1.6 1.6-1.6h10.8c.9 0 1.6.7 1.6 1.6v10.8zM128.3 9c0 2.4-1.9 4.3-4.3 4.3s-4.3-1.9-4.3-4.3c0-.4.1-.7.1-1.1h-1.2v5.9c0 .3.2.5.5.5h9.7c.3 0 .5-.2.5-.5V7.9h-1.2c.1.4.2.7.2 1.1zm-4.3 2.7a2.7 2.7 0 1 0 0-5.4 2.7 2.7 0 0 0 0 5.4zm4.8-8.1h-1.6c-.3 0-.5.2-.5.5v1.6c0 .3.2.5.5.5h1.6c.3 0 .5-.2.5-.5V4.1c.1-.2-.2-.5-.5-.5z"
                  fill="#515252" fillRule="evenodd"></path>
          </svg>

        </a></div>
      </div>

      <div className="footer-social phone-show">
        <a href="https://www.facebook.com/munchery">
          <svg xmlns="http://www.w3.org/2000/svg" width="7" height="16" viewBox="0 0 7 16"
               className="social-icon"><title>Group</title>
            <g fill="none" fillRule="evenodd">
              <path d="M-4 0h16v16H-4z"></path>
              <path className="color-path"
                    d="M5.338 2.807c-.35 0-.7.374-.7.655v1.871H7a43.859 43.859 0 0 1-.262 2.714h-2.1V16h-3.15V7.953H0V5.24h1.487V3.088C1.487 2.713 1.4 0 4.637 0h2.276C7 1.123 7 2.433 7 2.807H5.338z"
                    fill="#FFF"></path>
            </g>
          </svg>

        </a> <a href="https://twitter.com/munchery">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" viewBox="0 0 16 13"
             className="social-icon"><title>Group</title>
          <g fill="none" fillRule="evenodd">
            <path d="M0-2h16v16H0z"></path>
            <path className="color-path"
                  d="M14.211 3.7c0 4.3-3.28 9.3-9.242 9.3C3.08 13 1.39 12.5 0 11.5h.795c1.49 0 2.981-.5 4.075-1.4-1.392 0-2.584-1-3.081-2.3.199 0 .397.1.596.1.298 0 .596 0 .895-.1C1.789 7.5.696 6.2.696 4.6c.397.2.894.4 1.49.4-.894-.6-1.49-1.6-1.49-2.7 0-.6.198-1.2.397-1.7 1.59 2 3.975 3.3 6.758 3.4-.1-.2-.1-.5-.1-.7 0-1.8 1.491-3.3 3.28-3.3.894 0 1.789.4 2.385 1 .696-.1 1.49-.4 2.087-.8-.199.8-.795 1.4-1.391 1.8.695-.1 1.292-.3 1.888-.5-.596.7-1.193 1.3-1.789 1.8v.4z"
                  fill="#FFF"></path>
          </g>
        </svg>

      </a> <a href="https://www.pinterest.com/munchery/">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="17" viewBox="77 1 14 17"
             className="social-icon">
          <path className="color-path"
                d="M82.5 11.9s-.6 2.3-.7 2.7c-.4 1.5-1.6 3.1-1.7 3.2-.1.1-.2.1-.2-.1s-.3-2.1 0-3.7c.2-.8 1.2-5.3 1.2-5.3s-.3-.6-.3-1.5c0-1.4.8-2.5 1.9-2.5.9 0 1.3.7 1.3 1.5 0 .9-.6 2.2-.9 3.5-.2 1 .5 1.9 1.5 1.9 1.8 0 3.1-2.4 3.1-5.2 0-2.1-1.4-3.7-4-3.7-2.9 0-4.7 2.2-4.7 4.7 0 .9.2 1.5.6 1.9.2.2.2.3.1.5 0 .2-.2.6-.2.8-.1.2-.3.3-.5.2-1.3-.6-2-2.1-2-3.7C77 4.3 79.3 1 83.9 1 87.6 1 90 3.7 90 6.6c.1 3.7-2 6.5-5.1 6.5-1 0-2-.6-2.4-1.2z"
                fill="#515252" fillRule="evenodd"></path>
        </svg>

      </a> <a href="https://instagram.com/munchery/">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="117 2 14 15"
             className="social-icon">
          <path className="color-path"
                d="M131 14.4c0 .9-.7 1.6-1.6 1.6h-10.8c-.9 0-1.6-.7-1.6-1.6V3.6c0-.9.7-1.6 1.6-1.6h10.8c.9 0 1.6.7 1.6 1.6v10.8zM128.3 9c0 2.4-1.9 4.3-4.3 4.3s-4.3-1.9-4.3-4.3c0-.4.1-.7.1-1.1h-1.2v5.9c0 .3.2.5.5.5h9.7c.3 0 .5-.2.5-.5V7.9h-1.2c.1.4.2.7.2 1.1zm-4.3 2.7a2.7 2.7 0 1 0 0-5.4 2.7 2.7 0 0 0 0 5.4zm4.8-8.1h-1.6c-.3 0-.5.2-.5.5v1.6c0 .3.2.5.5.5h1.6c.3 0 .5-.2.5-.5V4.1c.1-.2-.2-.5-.5-.5z"
                fill="#515252" fillRule="evenodd"></path>
        </svg>

      </a></div>
    </div>
  </nav>
)

export default MuncheryFooter
