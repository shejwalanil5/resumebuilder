import React from 'react'

const Project = ({formData, setFormData}) => {
  // proj1_title: "",
  // proj1_link: "",
  // proj1_desc: "",
  // proj2_title: "",
  // proj2_link: "",
  // proj2_desc: "",
  return (
    <div className='container'>
    <form className="row g-3">
      <div className="col-md-6">
        <label for="name" className="form-label">
          Name of first Project
          </label>
        <input type="text" className="form-control" id="name"
        value={formData.proj1_title} 
        onChange={(e)=>{
          setFormData({...formData, proj1_title:e.target.value})
        }} />
      </div>
      
      <div className="col-md-6">
        <label for="proj1_link" className="form-label">Link to Project</label>
        <input type="text" className="form-control" id="proj1_link" 
        value={formData.proj1_link} 
        onChange={(e)=>{
          setFormData({...formData, proj1_link:e.target.value})
        }}/>
      </div>
     
      <div className="col-12">
        <label for="proj1_desc" className="form-label">Description of Project</label>
        <input type="text" className="form-control" id="proj1_desc"  
        value={formData.proj1_desc} 
        onChange={(e)=>{
          setFormData({...formData, proj1_desc:e.target.value})
        }}/>
      </div>
      <hr/>
      <div className="col-md-6">
        <label for="name" className="form-label">
          Name of Second Project 
          </label>
        <input type="text" className="form-control" id="name"
        value={formData.proj2_title} 
        onChange={(e)=>{
          setFormData({...formData, proj2_title:e.target.value})
        }} />
      </div>
      <div className="col-md-6">
        <label for="proj2_link" className="form-label">Link to Second Project</label>
        <input type="email" className="form-control" id="proj2_link" 
        value={formData.proj2_link} 
        onChange={(e)=>{
          setFormData({...formData, proj2_link:e.target.value})
        }}/>
      </div>
     
      <div className="col-12">
        <label for="proj2_desc" className="form-label">Decription of Second Project</label>
        <input type="text" className="form-control" id="proj2_desc" 
        
        value={formData.proj2_desc} 
        onChange={(e)=>{
          setFormData({...formData, proj2_desc:e.target.value})
        }}/>
      </div>
     
    </form>
    </div>
  )
}

export default Project