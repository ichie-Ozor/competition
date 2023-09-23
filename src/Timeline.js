import React from 'react'
import './Timeline.css'
import star from './img1/starpu.png'

function Timeline() {
  return (
    <div className='timeline1'>
      <div className='main-timeline'>
        <div className='main-timeline-title'>
            <p>Timeline</p>
            <span>Here is the breakdown of the time we anticipate using for the upcoming event.</span>
            <img src={star} alt=''/>
        </div>
        <div className='timeline-item one'>
            <div className='empty'></div>
            <div className='number'>1</div>
            <span>Hackathon Announcement</span>
            <p>The getlinked tech hackathon 1.0 is formally announced to the generl public and teams begins to get ready to register</p>
            <div className='date'>November 18, 2023</div>
        </div>
        <div className='timeline-item two'>
            <div className='empty'></div>
            <div className='number'>2</div>
            <span>Teams Registration begins</span>
            <p>Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register</p>
            <div className='date'>November 18, 2023</div>
        </div>
        <div className='timeline-item three'>
            <div className='empty'></div>
            <div className='number'>3</div>
            <span>Teams Registration ends</span>
            <p>Interested participants are no longer allowed to register</p>
            <div className='date'>November 18, 2023</div>
        </div>
        <div className='timeline-item four'>
            <div className='empty'></div>
            <div className='number'>4</div>
            <span>Announcement of the accepted teams and ideas</span>
            <p>All teams whom idea has been accepted into getlinked tech hacathon 1.0 2023 are formally announced</p>
            <div className='date'>November 18, 2023</div>
        </div>
        <div className='timeline-item five'>
            <div className='empty'></div>
            <div className='number'>5</div>
            <span>Getlinked Hackathon 1.0 Officially Begins</span>
            <p>All teams whom idea has been accepted into getlinked tech hacathon 1.0 2023 are formally announced</p>
            <div className='date'>November 18, 2023</div>
        </div>
        <div className='timeline-item six'>
            <div className='empty'></div>
            <div className='number'>6</div>
            <span>Demo Day</span>
            <p>Teams get the opportunity to pitch their project to judges. The winner of the hackathon will also be announced on this day</p>
            <div className='date'>November 18, 2023</div>
        </div>
      </div>
    </div>
  )
}

export default Timeline
