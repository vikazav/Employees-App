import "./employees-list.css";
import EmployeesListItem from "../employees-list-item/employees-list-item";
const EmployeesList = () => {
   return (
   <ul className="app-list list-group">
<EmployeesListItem name = "Alex" surname ="Printon"/>
<EmployeesListItem name = "Tom" surname ="Bricken"/>
<EmployeesListItem name = "Stiven" surname ="Taren"/>
   </ul>
   )
}
export default EmployeesList;