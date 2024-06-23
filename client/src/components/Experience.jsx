import React from 'react'

const Expierence = ({formData, setFormData}) => {
  // exp1_org: "",
  // exp1_pos: "",
  // exp1_desc: "",
  // exp1_dur: "",
  // exp2_org: "",
  // exp2_pos: "",
  // exp2_des: "",
  // exp2_dur: "",
  return (
    <div className='container'>
      <form className="row g-3">
        <div className="col-md-6">
          <label for="name" className="form-label">
            Enter your first Company name you worked for
            </label>
          <input type="text" className="form-control" id="name"
          value={formData.exp1_org} 
          onChange={(e)=>{
            setFormData({...formData, exp1_org:e.target.value})
          }} />
        </div>
        
        <div className="col-md-6">
          <label for="exp1_pos" className="form-label">what is your designation?</label>
          <input type="text" className="form-control" id="exp1_pos" 
          value={formData.exp1_pos} 
          onChange={(e)=>{
            setFormData({...formData, exp1_pos:e.target.value})
          }}/>
        </div>
        <div className="col-md-6">
          <label for="exp1_dur" className="form-label">How many years you worked there for?</label>
          <input type="email" className="form-control" id="exp1_pos" 
          value={formData.exp1_dur} 
          onChange={(e)=>{
            setFormData({...formData, exp1_dur:e.target.value})
          }}/>
        </div>
       
        <div className="col-12">
          <label for="exp1_desc" className="form-label">Tell us about your Job description</label>
          <input type="text" className="form-control" id="exp1_desc"  
          value={formData.exp1_desc} 
          onChange={(e)=>{
            setFormData({...formData, exp1_desc:e.target.value})
          }}/>
        </div>
        <hr/>
        <div className="col-md-6">
          <label for="name" className="form-label">
            Enter your Second company name 
            </label>
          <input type="text" className="form-control" id="name"
          value={formData.exp2_org} 
          onChange={(e)=>{
            setFormData({...formData, exp2_org:e.target.value})
          }} />
        </div>
        <div className="col-md-6">
          <label for="exp2_pos" className="form-label">What was your designation?</label>
          <input type="email" className="form-control" id="exp2_pos" 
          value={formData.exp2_pos} 
          onChange={(e)=>{
            setFormData({...formData, exp2_pos:e.target.value})
          }}/>
        </div>
        <div className="col-md-6">
          <label for="exp2_dur" className="form-label">How many years you worked there?</label>
          <input type="text" className="form-control" id="exp2_dur" 
          value={formData.exp2_dur} 
          onChange={(e)=>{
            setFormData({...formData, exp2_dur:e.target.value})
          }}/>
        </div>
       
        <div className="col-12">
          <label for="exp2_desc" className="form-label">Tell us about your job decription</label>
          <input type="text" className="form-control" id="exp2_desc" 
          
          value={formData.exp2_desc} 
          onChange={(e)=>{
            setFormData({...formData, exp2_desc:e.target.value})
          }}/>
        </div>
       
      </form>
      </div>
  )
}

export default Expierence