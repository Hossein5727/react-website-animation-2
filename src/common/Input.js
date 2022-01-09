import React from 'react'
import { BoxLabel, LoginTextFiled } from '../components/login/LoginElements'

function Input({ formik, name, id, label, value }) {
    return (
        <div>
            <BoxLabel>{label}</BoxLabel>
            <LoginTextFiled
                key={id}
                name={name}
                value={value}
                {...formik.getFieldProps(name)}
            />
            {formik.errors[name] && formik.touched[name] && (
                <p className='text-red-600'>{formik.errors[name]}</p>
            )}
        </div>
    )
}

export default Input
