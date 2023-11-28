import React from 'react'
import img1 from "../Assets/0d77bf0b-5ced-4b00-b684-108b7430120e.jpg"
import img2 from "../Assets/1b3cdeb1-54d4-4feb-a788-770ece7caad2.jpg"
import img3 from "../Assets/30358123-7f25-4f7a-a0d7-5ae9c90c810c.jpg"
import img4 from "../Assets/a64e125e-2d35-4aa9-81cd-fedba8dcc023.jpg"
import Logo from "../Assets/posh-logo-w-typeface.svg"
import artist1 from "../Assets/artist-white.jpg"
import Slider from 'react-slick'
export default function EEcarousel() {
  const settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, 

  };
  return (
    <>
  <div className='carousel text-white'>
        <Slider {...settings}>
          <div className='position-relative' >
            <div className="layer-blur">
              <div className='layer'></div>
            </div>
            <div className='d-flex py-5 justify-content-center align-items-center position-relative inner-carousel  '>
              <div className='carousel-item-image me-5 rounded-3 overflow-hidden'>
                <img src={img1} alt="img1" className='w-100 h-100 inner-image' />
              </div>
              <div className='carouel-item-data'>
                <h2 className=''>End Of Semester Party</h2>
                <h5>Artistry</h5>
                <h5>Sunday December 3, 9:00 AM</h5>
                <div className='artist d-flex justify-content-center align-items-center'>
                  <img src={artist1} alt="artistname" className='me-2' />
                  <h6 className='fw-bold'>ZUEZUEU</h6>
                </div>
              </div> 
            </div>
            
          </div>
          <div className='position-relative' >
            <div className="layer-blur">
              <div className='layer'></div>
            </div>
            <div className='d-flex py-5 justify-content-center align-items-center position-relative inner-carousel  '>
              <div className='carousel-item-image me-5 rounded-3 overflow-hidden'>
                <img src={img1} alt="img1" className='w-100 h-100 inner-image' />
              </div>
              <div className='carouel-item-data'>
                <h2>End Of Semester Party</h2>
                <h5>Artistry</h5>
                <h5>Sunday December 3, 9:00 AM</h5>
                <div className='artist  rounded-5 d-flex justify-content-center align-items-center'>
                  <img src={artist1} alt="artistname" className='me-2' />
                  <h6 className='fw-bold'>ZUEZUEU</h6>
                </div>
              </div> 
            </div>
            
          </div>
          <div className='position-relative' >
            <div className="layer-blur">
              <div className='layer'></div>
            </div>
            <div className='d-flex py-5 justify-content-center align-items-center position-relative inner-carousel  '>
              <div className='carousel-item-image me-5 rounded-3 overflow-hidden'>
                <img src={img1} alt="img1" className='w-100 h-100 inner-image' />
              </div>
              <div className='carouel-item-data'>
                <h2>End Of Semester Party</h2>
                <h5>Artistry</h5>
                <h5>Sunday December 3, 9:00 AM</h5>
                <div className='artist  rounded-5 d-flex justify-content-center align-items-center'>
                  <img src={artist1} alt="artistname" className='me-2' />
                  <h6 className='fw-bold'>ZUEZUEU</h6>
                </div>
              </div> 
            </div>
            
          </div>
          <div className='position-relative' >
            <div className="layer-blur">
              <div className='layer'></div>
            </div>
            <div className='d-flex py-5 justify-content-center align-items-center position-relative inner-carousel  '>
              <div className='carousel-item-image me-5 rounded-3 overflow-hidden '>
                <img src={img1} alt="img1" className='w-100 h-100 inner-image' />
              </div>
              <div className='carouel-item-data'>
                <h2>End Of Semester Party</h2>
                <h5>Artistry</h5>
                <h5>Sunday December 3, 9:00 AM</h5>
                <div className='artist  rounded-5 d-flex justify-content-center align-items-center'>
                  <img src={artist1} alt="artistname" className='me-2' />
                  <h6 className='fw-bold'>ZUEZUEU</h6>
                </div>
              </div> 
            </div>
            
          </div>
         
        </Slider>
      </div>
    </>
  )
}
