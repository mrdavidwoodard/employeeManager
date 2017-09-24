/*let s_id = Symbol("id");
let s_firstName = Symbol("firstName");
let s_lastName = Symbol("lastName");
let s_title = Symbol("title");

export default class Employee {
  get id(){return this[s_id]}
  get firstName(){return this[s_firstName]}
  get lastName(){return this[s_lastName]}
  get title(){return this[s_title]}

  constructor(id=0, firstName="David",lastName="Woodard", title="project manager") {
    this[s_id] = id;
    this[s_firstName] = firstName;
    this[s_lastName] = lastName;
    this[s_title] = title;
  }
}

let instance = null;

export class EmployeeCollection {
  get length(){
    return this.employees.length;
  }
  get list(){
    return this.employee
  }
  constructor(){
    if(!instance){
      instance = this;
      this.employees = [];
      console.log("an employee collection was created";)
    }
    return instance;
  {
  add (employee = new Employee())
  }
  this.employees[this.length] = employee;
  console.log("employee: ${employee.firstName} was updated")
  delete (id=-1)
  {
    let index = this.employee.findIndex((employee)=>{return employee.id === id;});
    if(!index)
    {
      throw new Error("you must enter valid id")
    } else {
      console.log("employee: ${this.employee[index].firstName} was deleted");
      this.empoloyee.splice(index, 1);
    }

  }
  filter (filter = (employee) => {return employee.title === "project manager"})
  {
    console.log("employee filter ran");
    return this.employees.filter(filter);
  }
}*/
