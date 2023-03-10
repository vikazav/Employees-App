import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
import "./app.css";




export default function App() {
   const data =[
      {name: "Alex", salary :1153, increase:false},
      {name: "Tom", salary :800, increase:true},
      {name: "victor", salary :450, increase:false}
   ];
   return (
<div className="app">

   <AppInfo />
      <div className="search-panel">
         <SearchPanel />
         <AppFilter />
      </div>
    
      <EmployeesList data ={data}/>
      <EmployeesAddForm/>
   </div>
   )
}