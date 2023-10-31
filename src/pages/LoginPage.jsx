import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from 'yup'
const Loginpage = () => {
    const initialValues={
        email:"",
        password:""
    }
    const onSubmit=(event)=>{
        console.log(event)
    }
    const validate=(values)=>{
        let errors={}
        if(!values.email)
        {
            errors.email = "email is required"
        }
        if(!values.password)
        {
            errors.password="password is required"
        }
        return errors;
    }
    const validationSchema=Yup.object({
        email:Yup.string().required("email is required").email("email should be valid"),
        password:Yup.string().required("password is required").min(6,"password should be atleadt 6 characters")
    })
    const formik=useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className="wrapper">
                        <h1 className="text-center">Login</h1>
                        <form onSubmit={formik.handleSubmit}>
                            <div className="form-group">
                                <label>email</label>
                                <input type="email"  name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}
                                className={formik.touched.email&&formik.errors.email?'form-control is-invalid':'form-control' } />
                                {
                                    formik.errors.email&&formik.touched.email? (<small className='text-danger'>{formik.errors.email}</small>) : null
                                }
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}
                                className={formik.touched.password&&formik.errors.password?'form-control is-invalid':'form-control' } />
                                                                
                                {
                                    formik.errors.password&&formik.touched.password? (<small className='text-danger'>{formik.errors.password}</small>) : null
                                }
                            </div><br />
                            <input type="submit" disabled={!formik.isValid} value="Login" className="btn btn-primary "/>

                        </form><br />
                        <p className="text-center">Don't Have an account?<Link to ="/register">Sign up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Loginpage;