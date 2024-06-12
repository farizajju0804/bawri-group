import React from 'react'
import  './Component3.css'
// import bottomleft from '../assets/bottomleft.png'
// import bottomright from '../assets/bottomright.png'
import topleft from '../assets/topleft.png'
import topright from '../assets/topright.png'
const Component3 = () => {
  return (   
    <div className=' cijen-Component3-div'>
    {/* <div className='cijen-Component3-main'> */}
    <div className='cijen-Component3-top'>
    <img className='cijen-Component3-img' src={topleft}/>
    <p className=' cijen-Component3-heading'>How We Started?</p>
    <img className='cijen-Component3-img' src={topright}/>
    </div>
        <div className='cijen-Component3-div2'>
        <div className="mbp-mockup-wrapper">
<div className="mbp-container">
	<div className="mbp-display with-glare">
		<div className="display-edge">
			<div className="bezel">
				<div className="display-camera" ></div>
				<div className="display-frame">
          <div>
            <p className="content">
              During World War II, the army needed a lot of timber but it was in short supply. My father kept our door and kitchen open to all army personnel. He said this was the least we could do; Generals, Captains, and Jawaan’s alike were risking their lives. A group of fifteen came for Diwali-dinner in 1945. After a hearty dinner of over 150 puri’s and accompaniments, they got talking. They shared both heart-warming as well as gut-wrenching stories. They asked if we could organise a large supply of woolens for them. “Consider it done” my father said in his deep voice. They joked “Can you organise large supplies of timber also.” After an hour of discussions, the entrepreneur in my father realised this was a good opportunity; it was a win-win, and he had willing customers. Six months later, in the midst of the war, Bawri Timber Industries was borne.
            </p>
          </div>
				</div>
				<div className="below-display">
					<div className="macbookpro"></div>
				</div>
			</div>
		</div>
	</div>
	<div className="mbp-keyboard">
		<div className="front">
			<div className="opener-left"></div>
			<div className="opener-right"></div>
		</div>
		<div className="bottom-left"></div>
		<div className="bottom-right"></div>
		<div className="mbp-shadow">			
			<div className="shadow-left"></div>
			<div className="shadow-right"></div>
		</div>
	</div>
</div>
</div>
        </div>
       
    </div>
  )
}

export default Component3