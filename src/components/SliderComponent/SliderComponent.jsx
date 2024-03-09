import React from 'react'
import Slider from 'react-slick'
import {Image} from 'antd'

const SliderComponent = ({arrImage}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      };

  return (
    <div> 
        <Slider {...settings}>
            {arrImage.map((image)=>{
                return(
                    <Image src={image} alt="slider" preview={false} width="100%" height="300px" />
                )
            })}
        </Slider>
    </div>
  )
}

export default SliderComponent