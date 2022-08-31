import { nanoid } from 'nanoid';
import {useState} from 'react'

const GetInput = ({expenses,setExpenses,categories,type}) => {
  
    

    let categoryList=categories.map((ctg,i)=><option key={i} value={ctg} name="category">{ctg}</option>)
    let typeList=type.map((t,i)=><option key={i} value={t} name="type">{t}</option>)
    let submitHandler=(e)=>{
        e.preventDefault();
        let dTmp={
            id:nanoid(),
            name:e.target[0].value,
            amount:e.target[1].value,
            date:e.target[2].value,
            category:e.target[3].value,
            type:e.target[4].value,
         
        }
        setExpenses([...expenses,dTmp]);

    }
  return (

        <form className="inputLayout w-25 p-4 shadow bg-body rounded" onSubmit={submitHandler}>
        <div className="mb-3">
         <label htmlFor="name" className="form-label">Name</label>
         <input type="text" className="form-control" id="name" aria-describedby="nameHelp" name="name"/>
         <div id="nameHelp" className="form-text">(where you expent (e.g House Rent))</div>
         </div>
         <div className="mb-3">
         <label htmlFor="amount" className="form-label">Amount (in Rs)</label>
         <input type="text" className="form-control" id="amount" name="amount"/>
         </div>
         <div className="mb-3">
            <label htmlFor="when">When</label>
         <input type="date" className="form-control" id="when" name="date"/>
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
    
  )
}

export default GetInput