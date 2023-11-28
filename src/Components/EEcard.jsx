import React from 'react';

export default function EEcard({ backgroundImage, imageSrc, day, name, location }) {
  return (
    <>
      <div className="col-xxl-3 col-xl-4  col-md-6 col-sm-6 col-xs-12" style={{ height: '410px' }}>
        <div className="card-content rounded-4 d-flex flex-column position-relative p-4" style={{ backgroundImage, backgroundSize: 'cover', height: '100%', width: '100%', backgroundPosition: 'center center', cursor: 'pointer', backgroundColor: 'rgba(0, 0, 0, 0.6)', transition: 'transform 0.2s ease-in-out' }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >

            {imageSrc?<img src={imageSrc} alt="" className='img-fluid rounded-circle position-absolute' style={{ width: '44px', height: '44px', transition: 'transform 0.2s ease-in-out' }} />
              : 
              ""}
          <div className="info d-flex mt-auto text-white align-items-center justify-content-start border-light" style={{ transition: 'transform 0.2s ease-in-out' }}>
            <div className="day pe-3" style={{ fontWeight: '700', fontSize: '20px' }}>
              {day}
            </div>
            <div className="details d-flex flex-column border-start ps-3">
              <div className="name" style={{ fontWeight: '600', fontSize: '16px' }}>{name}</div>
              <div className="location" style={{ fontWeight: '200', fontSize: '15px' }}>{location}</div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}