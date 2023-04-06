const ImageSlider = () => {
    return (
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active position-relative">
            <img
              src="https://fablanka-website.s3.ap-southeast-1.amazonaws.com/images/image-slider/IMG_9796-1.jpg"
              className="d-block w-100 img-fluid rounded-3"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Drones</h5>
              {/* <p>Some representative placeholder content for the first slide.</p> */}
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://fablanka-website.s3.ap-southeast-1.amazonaws.com/images/image-slider/IMG_9720-1.jpg"
              className="d-block w-100 img-fluid rounded-3"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>3D Printing And Additive Manufacturing</h5>
              {/* <p>Some representative placeholder content for the second slide.</p> */}
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://fablanka-website.s3.ap-southeast-1.amazonaws.com/images/image-slider/IMG_9615-1.jpg"
              className="d-block w-100 img-fluid rounded-3"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Microcontrollers and AI in Robotics</h5>
              {/* <p>Some representative placeholder content for the third slide.</p> */}
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
  };
  
  export default ImageSlider;
  