import {useState} from 'react'

const Model = ({setToggle,toggle,categories,type,expenses}) => {

  let categoryList=categories.map((ctg,i)=><option key={i} value={ctg} name="category">{ctg}</option>)
  let typeList=type.map((t,i)=><option key={i} value={t} name="type">{t}</option>)
  let [total,setTotal]=useState(0)
  const submitionHandler=(e)=>{

    // e.preventDefault();
    let ctg=(e.target[2].value==="Category")?null:e.target[2].value;
    let type=(e.target[3].value==="Type of method")?null:e.target[3].value;
    if(e.target[0].value && e.target[1].value && ctg && type){
      let d1=new Date(e.target[0].value);
      let d2=new Date(e.target[1].value);
      let g=expenses.filter((e)=>{
        let d=new Date(e.date);
        return (d>=d1 && d<=d2 && e.category===ctg && e.type===type)
      });
      return (g.reduce((acc,e)=>acc+Number(e.amount),0));
    }
    else{
      if(ctg && type){
        return (expenses.filter((e)=>(e.category===ctg && e.type===type)).reduce((acc,e)=>acc+Number(e.amount),0))
      }if(ctg){
        return (expenses.filter((e)=>(e.category===ctg)).reduce((acc,e)=>acc+Number(e.amount),0))
      }if(type){
        return (expenses.filter((e)=>(e.type===type)).reduce((acc,e)=>acc+Number(e.amount),0))
      }else{
        return (expenses.reduce((acc,e)=>acc+Number(e.amount),0));
      }
    }
   

  }
  let util=(e)=>{
    e.preventDefault();
    // console.log(submitionHandler({target:e.target}))
    setTotal(submitionHandler({target:e.target}));
  }
  let s={width:"100vw",height:"100vh",backgroundColor:"#fff"};
  let closeBtn={
    position:"absolute",
    top:"10%",
    right:"10%",
    cursor:"pointer",
    fontSize:"2em"
  }
  return (
   <div className="d-flex justify-content-center align-items-center position-absolute top-0 start-0" style={s}>
    <i className="ri-close-circle-fill" style={closeBtn} onClick={()=>{setToggle(!toggle)}}></i>
     <div className="w-50 p-4 shadow bottom-0 end-0">
          <form onSubmit={util}>
            <div className='d-flex justify-content-between align-items-center mb-3'>
              <div className='d-flex justify-content-around align-items-center w-50'>
              <label>From: </label>
                <input type="date" className='form-control w-75'/>
              </div>
              <div className="d-flex justify-content-around align-items-center w-50">
              <label>To: </label>
                <input type="date" className='form-control w-75'/>
              </div>
            </div>
           
            
            <select className="form-select mb-3" aria-label="Default select example">
              <option defaultValue>Category</option>
              {categoryList}
         </select>
         <select className="form-select mb-3" aria-label="Default select example">
              <option defaultValue>Type of method</option>
              {typeList}
         </select>
         <button type="submit" className="btn btn-primary">Submit</button>

          </form>
          <div className='d-flex justify-content-around align-items-center w-25'>
          <h6 className="mt-2">Total Expenses:</h6>
          <p>{total}{" "}Rs</p>
          </div>
    

     </div>
   </div>
      


    
  )
}

export default Model
