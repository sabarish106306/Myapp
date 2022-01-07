import React from 'react'
import { useState } from 'react/cjs/react.development'
import "./content.css"

function Content() {
    const [studentData,setstudent]=useState({
        name:"",
        address:"",
        regno:"",
        rollnum:"",
        genter:"",
        year:"",
        email:"",
        password:""
    })
    const [totaldata,setdata]=useState()
    const handlechange=(e)=>{
        setstudent({...studentData,[e.target.name]:e.target.value})
        console.log(studentData);
    }
    const handleclick=()=>{
        setdata(studentData)
        console.log(totaldata);
    }
    return (
        <div className='form_container' >
            <div className='form_subcontainer' >
                <div className='Field_name' >name</div>
                <div className='input_container'>
                    <input 
                     placeholder='Enter your name'
                     name='name' onChange={handlechange} 
                     className='input' 
                     />
                     </div>
                <div className='Field_name' >address</div>
                <div className='input_container'>
                    <input 
                    placeholder='Enter the address' 
                    name='address' 
                    onChange={handlechange} 
                    className='input'
                    />
                    </div>
                <div className='Field_name' >register number</div>
                <div className='input_container'>
                    <input 
                    placeholder='Enter the RegisterNumber' 
                    name='regno' 
                    onChange={handlechange} 
                    className='input'
                    />
                    </div>
                <div className='Field_name' >roll number</div>
                <div className='input_container'>
                    <input 
                    placeholder='Enter the RollNumber' 
                    name='rollnum' 
                    onChange={handlechange} 
                    className='input'
                    />
                    </div>
                <div className='Field_name' >genter</div>
                <div className='input_container'>
                    <input 
                    type="radio" 
                    name='genter' 
                    onChange={handlechange} 
                    value="male"
                    />Male 
                    <input 
                    type="radio" 
                    name='genter' 
                    onChange={handlechange} 
                    value="female" 
                    /> female 
                    </div>
                <div className='Field_name' >year</div>
                <div className='input_container'>
                    <div>
                        <input 
                        type="radio" 
                        name='year' 
                        onChange={handlechange}
                        value="1st year"
                        />First 
                        <input 
                        type="radio"  
                        name='year' 
                        onChange={handlechange} 
                        value="2nd year" 
                        /> Second 
                        <input 
                        type="radio" 
                        name='year' 
                        onChange={handlechange} 
                        value="3rd year" /> third 
                        <input 
                        type="radio"  
                        name='year' 
                        onChange={handlechange} 
                        value="4th year" 
                        /> fourth  
                        </div>
                </div>
                <div className='Field_name' >email</div>
                <div className='input_container'>
                    <input 
                    placeholder='Enter the Email' 
                    name='email' 
                    onChange={handlechange} 
                    className='input'
                    />
                    </div>
                <div className='Field_name' >password</div>
                <div className='input_container'>
                    <input 
                    placeholder='Enter the password' 
                    name='password' 
                    onChange={handlechange} 
                    className='input'
                    />
                    </div>
                <div className='input_container'>
                    <input 
                    type="submit" 
                    onClick={handleclick} 
                    className='submit_btn'
                    />
                    </div>



            </div>
        </div>
    )
}

export default Content
