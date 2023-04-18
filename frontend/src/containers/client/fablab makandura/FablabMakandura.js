import React from 'react'
import MakanduraTeam from '../../../components/fablabmakandura.component/MakanduraTeam'
import ProjectMakandura from '../../../components/fablabmakandura.component/ProjectMakandura'

const FablabMakandura=()=> {
  return (
    <>
    <div className="container">
        <div className='grid-rows-2 '>
            <h1 className="text-[45px] text-center font-sans">FabLab Makandura</h1>
            <h2 className="text-[30px] text-center font-normal pt-3">Fablabmakandura Team</h2>
        </div>
        <MakanduraTeam />
        <div className="row pt-50">
          <ProjectMakandura />
        </div>
        <div className="justify-center row pt-10">
          <h1 className="text-[50px] text-center text-[#163B64]">Location</h1>
          <p className="text-center pt-5">
            FabLab Maknadura was started on May 27 th , 2017 and is the first
            Fabrication Laboratory established by FabLanka and also the first of
            its kind in Sri Lanka. FabLab Makandura is located at the Makandura
            Public Library complex,<br></br>
            in Makandura township of Kurunegala district.
          </p>
          <div className="flex justify-center mb-10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.2716748138037!2d79.97793141525179!3d7.323351115378345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2e7622d600a83%3A0xaa493fc1c1d13b3e!2sFabLab%20Makandura!5e0!3m2!1sen!2slk!4v1661173585215!5m2!1sen!2slk"
              width="1200"
              height="600"
              allowFullScreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  )
}

export default FablabMakandura;