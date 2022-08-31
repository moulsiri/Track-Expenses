import {useState} from 'react'
import Model from './Model';

const ExpenseList = ({expenses,categories,type}) => {
  let [tHeads,setHeads]=useState(["#","Name","Amount","Date","Category","Type"])
  let [toggle,setToggle]=useState(false);
  let tH=tHeads.map((elm,i)=><th key={i} scope="col">{elm}</th>)
  let tR=expenses.map((elm,i)=>(<tr key={i}>
  <th scope="row">{i+1}</th>
  <td>{elm.name}</td>
  <td>{elm.amount}</td>
  <td>{elm.date}</td>
  <td>{elm.category}</td>
  <td>{elm.type}</td>
</tr>))
  return (
    <> 
    <div className='w-50 d-flex flex-column justify-content-between' style={{height:"60vh",overflow:"auto"}}>
     <table className="table">
    <thead>
      <tr>
        {tH}
      </tr>
    </thead>
    <tbody>
      {tR}
    </tbody>
  </table>
  
    </div>
    <button className='btn btn-outline-secondary' onClick={()=>{setToggle(!toggle)}}>Get Total</button>
  {(toggle)?<Model setToggle={setToggle} toggle={toggle} categories={categories} type={type} expenses={expenses}/>:""}
    </>
   
    
  )
}

export default ExpenseList