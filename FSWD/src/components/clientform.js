import React from 'react'
import axios from 'axios'
import {DisplayData} from './AppDisplay'
export class FormData extends React.Component{
    constructor(){
        super()
        this.state={
            empno:'',
            empname:'',
            dept:''
        }
    }

    submit=(e)=>{
        var d=this.state
        axios.post("http://127.0.0.1:5000/insert",d)

    }
change=(e)=>{
    this.setState({[e.target.name]:e.target.value})
}

    render(){
        return(
            <div>

          
            <form onSubmit={this.submit}>
                Empno: <input type="text" name="empno" onChange={this.change} /> <br></br>
                EmpName: <input type="text" name="empname" onChange={this.change} /><br></br>
                Dept: <input type="text" name="dept" onChange={this.change} /><br></br>
<button>submit</button>
            </form>
            <DisplayData />
            </div>
        )
    }

}

