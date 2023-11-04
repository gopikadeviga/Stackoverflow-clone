import React from 'react'
import './RightSidebar.css'
import comment from '../../assets/comment-alt-solid.svg'
import pen from '../../assets/pen-solid.svg'
import blackLogo from '../../assets/blacklogo.svg'

const Widget = () => {
  return (
    <div className='widget'>
        <h4>The Overflow Blog</h4>
        <div className='right-sidebar-div-1'>
          <div className='right-sidebar-div-2'>
            <img src={pen} alt="pen" width="18" />
            <p>How do we get a tech team to make a big technical change?</p>
        </div>
        <div className='right-sidebar-div-2'>
            <img src={pen} alt="pen" width="18" />
            <p>A conversation with the folks building Google’s AI models and I/O releases</p>
        </div>
    </div>
    <h4>Featured on Meta</h4>
        <div className='right-sidebar-div-1'>
          <div className='right-sidebar-div-2'>
            <img src={comment} alt="pen" width="18" />
            <p>New blog post from our CEO Prashanth: Community is the future of AI</p>
        </div>
        <div className='right-sidebar-div-2'>
            <img src={comment} alt="pen" width="18" />
            <p>We are updating our Code of Conduct and we would like your feedback</p>
        </div>
        <div className='right-sidebar-div-2'>
            <img src={blackLogo} alt="pen" width="18" />
            <p>Temporary policy: ChatGPT is banned</p>
        </div>
    </div>
    <h4>Hot Meta Posts</h4>
        <div className='right-sidebar-div-1'>
          <div className='right-sidebar-div-2'>
            <p>28</p>
            <p>How to fix “Failed to load resource: the server responded with a status of 404 (Not Found)”?</p>
        </div>
        <div className='right-sidebar-div-2'>
            <p>36</p>
            <p>How to fix “Uncaught TypeError: Cannot read property 'appendChild' of null”?</p>
        </div>
        <div className='right-sidebar-div-2'>
    <p>40</p>
            <p>How to fix “Cannot read property 'push' of undefined”?</p>
        </div>
    </div>
    </div>
  )
}

export default Widget
