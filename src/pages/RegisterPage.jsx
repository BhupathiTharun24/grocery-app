import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {useFormik} from 'formik';
import * as Yup from 'yup'

const RegisterPage = () => {
    const initialValues = {
        
            firstName : 'bhu',
            email : '',
            mobile : '',
            password : ''
        }

        

        const onSubmit = (values) => {
            console.log(values)
        }

        const validationSchema = Yup.object({
            firstName : Yup.string().required('first name is required'),
            email : Yup.string().required ('email is required').email('email should be valid'),
            mobile : Yup.string().required('mobile is required'),
            password : Yup.string().required ('password is required').min(6, "password must be 6 characters")
        })

        const formik = useFormik ({
            initialValues,
            onSubmit,
            // validate,
            validationSchema,
            validateOnMount : true
        })
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className="wrapper">
                        <h1> {formik.values.firstName}</h1>
                        
                        <h2>Register</h2>
                        <hr />
                        <form onSubmit={formik.handleSubmit}>
                            <div className="form-group">
                                <label>First Name</label>
                                <input type="text" name="firstName" className="form-control" value={formik.values.firstName} 
                                onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                {formik.errors.firstName && formik.touched.firstName ? (
                                    <small className='text-danger'>{formik.errors.firstName}</small>
                                ): null}
                            </div>

                            <div className="form-group">
                                <label>Email</label>
                                <input type="text" name='email' value={formik.values.email} onChange={formik.handleChange}
                                     className="form-control" onBlur={formik.handleBlur}/>
                                     {formik.errors.email ? (
                                        <small className='text-danger'>{formik.errors.email}</small>
                                     ): null}
                            </div>

                            <div className="form-group">
                                <label>Mobile</label>
                                <input type="text" name='mobile' value={formik.values.mobile} onChange={formik.handleChange}
                                 className="form-control" onBlur={formik.handleBlur} />

                                 {formik.errors.mobile ? (
                                    <small className='text-danger'>{formik.errors.mobile}</small>
                                 ): null}
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" name='password' value={formik.values.password}
                                    onChange={formik.handleChange} onBlur={formik.handleBlur} 
                                    className="form-control" />

                                    {formik.errors.password ? (
                                        <small className='text-danger'> {formik.errors.password}</small>
                                    ): null}
                            </div>

                            <input type="submit" value="Register" disabled={!formik.isValid}className="btn btn-primary btn-block" />
                        </form>
                        <br />
                        <p className="text-center">
                            Already Registerd? <Link to="/login">Click Here</Link>
                        </p>
                    </div>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    )
}
export default RegisterPage;