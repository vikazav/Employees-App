import "./employees-add-form.css";
const EmployeesAddForm = ()=> {
   return (
      <div className="app-add-form">
<h1>Додайте нового працівника</h1>
<form className="add-form d-flex">
   <input 
   className="form-control new-post-label"
   type="text"
   placeholder = "Як його звати"/>
   <input 
   className="form-control new-post-label"
   type="text"
   placeholder = "Зарплата в $?"/>
<button type="submit" className="btn btn-outline-light">Додати</button>
</form>
      </div>
   )
}
export default EmployeesAddForm;