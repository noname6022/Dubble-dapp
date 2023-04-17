import React from 'react'
import DiscordIcon from "../assets/Social/DiscordIcon.jsx"
import MediumIcon from '../assets/Social/MediumIcon.jsx'
import TwitterIcon from '../assets/Social/TwitterIcon.jsx'
import "./styles/FooterStyles.css"
import MediaQuery from 'react-responsive'
export const Footer = () => {
  return (
    <div className='FooterContainer'>
<MediaQuery minWidth={601}>


    <div className='SocialContainer'>
        <a href='https://www.discord.com/invite/3Y8X2JTdGh' target="_blank">
          <DiscordIcon/>
        </a>
        <a href='https://twitter.com/DubbleExchange' target="_blank">
<TwitterIcon/>
        </a>
        <a href='https://www.medium.com/@dubbledex' target="_blank">
        <MediumIcon/>
        </a>
    </div></MediaQuery>
    <MediaQuery maxWidth={600}>
    <div className='SocialContainer'></div>
    </MediaQuery>
    <div className='CopyrightContainer'>
        <h3>Copyright © 2023 Dubble Exchange</h3>
    </div>
    
    </div>
  )
}
export default Footer
