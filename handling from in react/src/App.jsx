import { useState } from 'react'
import { useForm } from "react-hook-form";

import './App.css'

function App() {
  const { register, handleSubmit,setError,watch, formState: { errors,isSubmitting } } = useForm();
  const delay = (d) =>{
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve()
      },d*1000);
    })
  }
  const onSubmit = async(data) =>
    { 
      // await delay(2)
      let r = await fetch("http://localhost:3000/",{method: "POST"})
      let res = r.text();

      console.log(data.res);
      if(data.username!=="subam")
      {
        setError("myform")
      }
    } 

  return (
    <>
    {isSubmitting && <div>loding...</div>}
      <div className="Container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input  {...register("username",{ required: {value: true, message: "min bhai name to dalo"},minLength: {value: 3, message: "min lenght is 3"}})} type="text" placeholder='enter the nmae'  />
          {errors.username && <div>{errors.username.message}</div>}
          
          <br />
          <input {...register("password",{ required: true })}  type="password"  placeholder='enter the pass'  />
          <br />
          <input disabled= {isSubmitting} type="submit" value="submit" />
        </form>
      </div>
    </>
  )
}

export default App
