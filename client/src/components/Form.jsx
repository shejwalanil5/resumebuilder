import React from 'react'
import Education from "./Education";
import Experience from "./Experience";
import PersonalDetails from "./PersonalDetails";
import Project from "./Project";
import Extras from "./Extras";
import axios from "axios";
import { useState } from "react";
import { saveAs } from "file-saver"

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    skills: "",

    exp1_org: "",
    exp1_pos: "",
    exp1_desc: "",
    exp1_dur: "",
    exp2_org: "",
    exp2_pos: "",
    exp2_des: "",
    exp2_dur: "",

    proj1_title: "",
    proj1_link: "",
    proj1_desc: "",
    proj2_title: "",
    proj2_link: "",
    proj2_desc: "",

    edu1_school: "",
    edu1_year: "",
    edu1_qualification: "",
    edu1_desc: "",
    edu2_school: "",
    edu2_year: "",
    edu2_qualification: "",
    edu2_desc: "",

    extra_1: "",
    extra_2: "",
  });
  const [page, setPage] = useState(0);

  const FormTitle = [
    "Personal Details",
    "Education",
    "Experience",
    "Projects",
    "Extras",
  ];

  const PageDisplay = () => {
    if (page === 0) {
      return <PersonalDetails formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <Education formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <Experience formData={formData} setFormData={setFormData} />;
    } else if (page === 3) {
      return <Project formData={formData} setFormData={setFormData} />;
    } else {
      return <Extras formData={formData} setFormData={setFormData} />;
    }
  };
  return (
    <div>
      
      <div className='d-flex justify-content-center'>
        <h1 className='text-center'>{FormTitle[page]}</h1> 
      </div>
      <div className='progressbar '>
        <div style={{
          width:
          page===0 ? "20%" : page ===1 ? "40%" : page ===2 ? "60%" : page===3 ? "80%"
          : "100%"
        }}></div>
      </div>
      <div>{PageDisplay()}</div>
      <div className='d-flex justify-content-center p-5 gap-3'>
        <button
          className='btn btn-dark'
          disabled={page === 0}
          onClick={() => {
            setPage((currPage) => currPage - 1);
          }}
        >Prev</button>
        <button
          className='btn btn-primary'
          //disabled={page === 4}
          onClick={() => {
            if(page === FormTitle.length-1){
              axios.post('http://localhost:3000/create-pdf',formData)
              .then(()=>axios.get('http://localhost:3000/fetch-pdf',
                {responseType:'blob'}
              )).then((res)=>{
                const pdfblob = new Blob([res.data],{
                  type: 'application/pdf'
                })
                saveAs(pdfblob, "Resume.pdf")
              })
            }else{
               setPage((currPage) => currPage + 1);
            }

           
          }}
        >
          {page === FormTitle.length - 1 ? "Download Pdf": "Next"}
        </button>
      </div>
    </div>
  )
}

export default Form