import React from 'react'
import img1 from "../Assets/0d77bf0b-5ced-4b00-b684-108b7430120e.jpg"
import img2 from "../Assets/1b3cdeb1-54d4-4feb-a788-770ece7caad2.jpg"
import img3 from "../Assets/30358123-7f25-4f7a-a0d7-5ae9c90c810c.jpg"
import img4 from "../Assets/a64e125e-2d35-4aa9-81cd-fedba8dcc023.jpg"
import artist1 from "../Assets/artist-white.jpg"
import Slider from 'react-slick'
import Navbar from './Navbar'
export default function EEcarousel() {

  
  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, 

  };
  return (
    <>
    <Navbar/>

  <div className='carousel '>
        <Slider {...settings}>
        <div className='position-relative  py-5' >
            <div className="layer-blur bg3">
              <div className='layer'></div>
            </div>
            <div className='row py-5 justify-content-center align-items-center position-relative inner-carousel  '>
              <div className='carousel-item-image  rounded-3 overflow-hidden col-lg-3 col-md-5 col-sm-6'>
                <img src={img3} alt="img1" className='w-100 h-100 inner-image rounded-4' />
              </div>
              <div className='carouel-item-data col-md-5'>
                <h2>RUNAWAY NEW YORK PRESENTS: OPEN 'TIL MIDNIGHT</h2>
                <h5>Public Records</h5>
                <h5>Tuesday December 12, 2:00 AM</h5>
                <div className='artist  rounded-5 d-flex justify-content-center align-items-center'>
                  <img src={artist1} alt="artistname" className='me-2' />
                  <h6 className='fw-bold'>ZUEZUEU</h6>
                </div>
                <button className="btn  bg-white  rounded-5" >
                  Purchase Tickets
                </button>
              </div> 
            </div>
            
          </div>
          <div className='position-relative py-5' >
            <div className="layer-blur bg1">
              <div className='layer'></div>
            </div>
            <div className='row py-5 justify-content-center align-items-center position-relative inner-carousel  '>
              <div className='carousel-item-image  overflow-hidden col-lg-3 col-md-4 '>
                <img src={img1} alt="img1" className='w-100 h-100 inner-image rounded-4 ' />
              </div>
              <div className='carouel-item-data col-md-5'>
                <h2 className=''>End Of Semester Party</h2>
                <h5>Artistry</h5>
                <h5>Sunday December 3, 9:00 AM</h5>
                <div className='artist  rounded-5 d-flex justify-content-center align-items-center'>
                  <img src={artist1} alt="artistname" className='me-2' />
                  <h6 className='fw-bold'>ZUEZUEU</h6>
                </div>
                <button className="btn  bg-white  rounded-5" >
                  Purchase Tickets
                </button>
              </div> 
            </div>
            
          </div>
          <div className='position-relative  py-5' >
            <div className="layer-blur bg2">
              <div className='layer'></div>
            </div>
            <div className=' py-5 position-relative inner-carousel row justify-content-center align-items-center'>
              <div className='carousel-item-image rounded-3 overflow-hidden col-lg-3 col-md-5 col-sm-6'>
                <img src={img2} alt="img1" className='w-100 h-100 inner-image rounded-4' />
              </div>
              <div className='carouel-item-data col-md-5'>
                <h2>Miami Art Week Powered by Art Hearts Fashion Art Basel 2023</h2>
                <h5>Fabel / Kiki on The River / Dream Rooftop / The Vessel</h5>
                <h5>Friday December 8, 7:00 AM</h5>
                <div className='artist  rounded-5 d-flex justify-content-center align-items-center'>
                  <img src={artist1} alt="artistname" className='me-2' />
                  <h6 className='fw-bold'>ZUEZUEU</h6>
                </div>
                <button className="btn  bg-white  rounded-5" >
                  Purchase Tickets
                </button>
              </div> 
            </div>
            
          </div>
          <div className='position-relative py-5'  >
            <div className="layer-blur bg4">
              <div className='layer'></div>
            </div>
            <div className='row py-5 justify-content-center align-items-center position-relative inner-carousel  '>
              <div className='carousel-item-image  rounded-3 overflow-hidden col-lg-4 col-md-5'>
                <img src={img4} alt="img1" className='w-100 h-100 inner-image rounded-4' />
              </div>
              <div className='carouel-item-data col-md-5'>
                <h2>New York Fashion Week Powered by Art Hearts Fashion</h2>
                <h5>The Angel Orensanz Foundation</h5>
                <h5>Friday February 9, 5:00 AM</h5>
                <div className='artist  rounded-5 d-flex justify-content-center align-items-center'>
                  <img src={artist1} alt="artistname" className='me-2' />
                  <h6 className='fw-bold'>ZUEZUEU</h6>
                </div>
                <button className="btn  bg-white  rounded-5" >
                  Purchase Tickets
                </button>
              </div> 
            </div>
            
          </div>
         
        </Slider>
      </div>
    </>
  )
}
