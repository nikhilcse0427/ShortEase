import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {PulseLoader} from 'react-spinners'
import Error from './error'
import {useState, useEffect} from "react"
import * as Yup from 'yup'
import useFetch from '@/hooks/use-fetch'
import { login } from '@/db/apiAuth'
const Login = () => {
  const [formData, setFormData] = useState({
    email:"",
    password:""
  })

  const [errors, setErrors] = useState({});
  const handleInputChange = (e)=>{
    const {name, value} = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const {data, error, loading, fn:fnLogin} = useFetch(login, formData)


  useEffect(()=>{
    console.log(data)
  },[data,error]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrors({});
    try {
      const schema = Yup.object().shape({
        email: Yup.string().email("Invalid email").required("Email required"),
        password: Yup.string().min(8, "Password must contain minimum 8 characters").required("Password is required"),
      });
      await schema.validate(formData, { abortEarly: false });
      await fnLogin(); // API Call
    } catch (error) {
      const newErrors = {};
      error?.inner?.forEach((err) => {
        newErrors[err.path] = err.message;
      });
      setErrors(newErrors);
    }
  };

  return (
    <Card className="mt-5">
      <CardHeader>
        <CardTitle className="font-extrabold text-2xl">Login</CardTitle>
        <CardDescription>to your account if you already have account</CardDescription>
      </CardHeader>
      <CardContent className='space-y-2'>
        <div className='space-y-1'>
          <Input type="email" name="email" placeholder="Enter email..." onChange={handleInputChange} />
          {errors.email && <Error message={errors.email} />}
        </div>
        <div className='space-y-2'>
          <Input type="password" name="password" placeholder="Enter password..." onChange={handleInputChange} />
          {errors.password && <Error message={errors.password} />}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="bg-white text-black font-bold space-y-4" onClick={handleLogin}>{loading?<PulseLoader color="blue"/>:"Login"}</Button>
      </CardFooter>
    </Card>
  )
}

export default Login
