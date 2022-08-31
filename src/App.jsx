
import {useState} from 'react';
import 'remixicon/fonts/remixicon.css'
import './style.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import GetInput from './component/GetInput';
import ExpenseList from './component/ExpenseList';
function App() {
  const [expenses,setExpenses]=useState([]);
  let [categories,setCategories]=useState(["Rent","Grocery","Travelling","Fees","Others"]);
  let [type,setType]=useState(["cash","UPI","paytm"])
  return (
    <>
      <h1 className="text-center mt-3">Track Expenses 📓</h1>
     <div className="frontBox d-flex justify-content-around p-5">
      <GetInput expenses={expenses} setExpenses={setExpenses} categories={categories} type={type} />
      <ExpenseList expenses={expenses} categories={categories} type={type} />
    </div>
    </>
   
  );
}

export default App;
