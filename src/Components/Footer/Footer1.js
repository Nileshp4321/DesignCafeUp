import React from 'react'

const Footer1 = () => {
  return (
    <>
      <div className='container mx-auto m-32'>
        <div className='footerstart flex justify-center grid grid-cols-2 gap-4'>
          <div className=''>
            <h1 className='text-2xl m-3 font-semibold'>Founded By Architects</h1>
            <p className='text-xl m-3  '>Having studied and worked as architects for 15 years, we founded DesignCafe in 2015 to extend the intelligent and beautiful home interior design to a wider range of budgets.</p>
            <p className='text-xl m-3  '>Obsessively quality focused, we do most things in-house – with expert designers, our own factory, and trained carpenters – to ensure flawless execution.</p>
            <p className='text-xl m-3  '>We consistently focus on solving customer needs, with a big focus on space optimisation, to deliver up to 20% extra space to your home.</p>
            <h1 className='text-xl m-3 text-justify'>Our key strengths include:</h1>
              <ul>
              <li>400+ design alchemists</li>
              <li>Dedicated customer happiness managers</li>
              <li>Use of 3D and VR for rendering</li>
              <li>State-of-the-art factory</li>
              <li>51 point checklist for quality</li>
              <li>Professional delivery and installation</li>
              </ul>
          </div>
          <div className='m-8'>
            <img src='https://media.designcafe.com/wp-content/uploads/2020/01/21002145/design-cafe-founders-ceo-gita-ramanan-shezaan-bhojani.webp' />
          </div>
        </div>
        <div className='flex justify-center'>
            <h1 className='text-3xl '>Questions? Chat Now</h1>
          </div>
          <div className='flex justify-around m-5'>
          <div className='flex '>
            <img className='' src='https://media.designcafe.com/wp-content/uploads/2019/11/17060719/Cal.png'/><span className=''>080-68065000</span>
            </div>
            <div className='flex '>
            <img className='' src='https://media.designcafe.com/wp-content/uploads/2019/11/17060719/email.png'/><span className='m-2'>writetous@designcafe.com</span>
            </div>
            <div className='flex '>
            <img className='' src='https://img.icons8.com/?size=1x&id=16712&format=png'/><span className='m-2'>+91-6366910437</span>
            </div>
          </div>
      </div>
    </>
  )
}

export default Footer1
