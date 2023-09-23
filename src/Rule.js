import React from 'react'
import star from './img1/starpu.png'
import star1 from './img1/star1.png'
import star2 from './img1/star2.png'
import lady from './img1/lady.png'
import question from './img1/question.png'
import plus from './img1/+.png'
import casual from './img1/casual.png'
import man from './img1/man.png'

import './Rule.css'

function Rule() {
  return (
    <div className='main-rule'>
    <div className='rule'>
      <img src={star} alt='' className='rule-star'/>
      <img src={lady} alt='' className='lady'/>
      <div className='rule-text'>
        <div className='rule-text-title'>Rules and <span>Guildelines</span></div>
        <img src={star1} alt='' className='star2'/>
        <div className='rule-main-text'>
        Our tech hackathon is a melting pot of visionaries and its purpose is as clear as day to shape the future. Whether you're a coding gemius, a design maverick or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundariesof technology, and creating solutions that can change the world, that's what we're all about!  
        </div>
        <img src={star2} alt='' className='star3'/>
      </div>
      </div>
      <div className='criteria'>
        <div className='criteria-img'>
          <img src={star} alt='' className='criteria-img-star'/>
          <img src={man} alt='' className='man'/>
        </div>
        <div className='criteria-text'>
          <div className='criteria-title'>Judging Criteria <span>Key attributes</span></div>
          <div className='criteria-main-text'>
            <p><span>Innovation and Creativity:</span>Evaluate the uniquness and creativity of te solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.</p>
            <p><span>Functionality:</span>Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.</p>
            <p><span>Impact and Relevance:</span>Determine the potential impact of the solution in the real world.Does it addresses a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic or environmental benefits.</p>
            <p><span>Technical Complexity:</span>Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms and the scalability of the solution.</p>
            <p><span>Adherence to Hackathon Rules:</span>Judges will ensure that the team adhere to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.</p>
          </div>
          <button>Read More</button>
        </div>
      </div>
      <div className='faq1'>
        <div className='faq-text'>
           <img src={star} alt='' className='faq-text-star'/>
           <p>Frequently Ask <span>Question</span></p>
           <h4>We got answers to the questions that you might want to ask about getlinked Hackathon 1.0</h4>
           <div className='faq-text-main'>
            <p>Can I work on a project I started before the hackathon?</p>
            <img src={plus} alt='' className='plus'/>
           </div>
           <div className='faq-text-main'>
            <p>What hapens if i need help during the hacathon?</p>
            <img src={plus} alt='' className='plus'/>
           </div>
           <div className='faq-text-main'>
            <p>What happens if i dont have an idea for  a project?</p>
            <img src={plus} alt='' className='plus'/>
           </div>
           <div className='faq-text-main'>
            <p>Can i join a team or do I have to come with one?</p>
            <img src={plus} alt='' className='plus'/>
           </div>
           <div className='faq-text-main'>
            <p>What happens after the hacathon ends?</p>
            <img src={plus} alt='' className='plus'/>
           </div>
           <div className='faq-text-main'>
            <p>Can I work on a project I started before the hackathon?</p>
            <img src={plus} alt='' className='plus'/>
           </div>
        </div>
        <div className='faq-img'>
          <img src={question} alt='' className='question1'/>
          <img src={question} alt='' className='question2'/>
          <img src={question} alt='' className='question3'/>
          <img src={star} alt='' className='faq-star1'/>
          <img src={star} alt='' className='faq-star2'/>
          <img src={star1} alt='' className='faq-star3'/>
          <img src={casual} alt='' className='casual'/>
          <img src={star2} alt='' className='faq-star4'/>
        </div>
      </div>
    </div>
  )
}

export default Rule
