import React from 'react'

const New = () => {
  return (
   <>
    <Slider {...settings}>
            {data.map((d) => (
              <div>
                <div className="flex justify-center items-center ">
                  <img src={d.img} alt=""></img>
                </div>
                <div>
                  <h1 className="  text-white flex justify-center items-center">
                    {d.name}
                  </h1>
                  <p className=" text-white flex justify-center items-center">
                    {d.dis}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
   
   </>
  )
}

export default New