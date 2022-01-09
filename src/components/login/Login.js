import React from 'react'
import { LoginButton, LoginContainer, LoginContent, LoginImage, LoginTitle, LoginBg } from './LoginElements'
import Image1 from '../../assets/image/login.jpg'
import { useFormik } from 'formik'
import * as yup from 'yup';
import Input from '../../common/Input';
import { AiOutlineUser, AiOutlineKey } from 'react-icons/ai'
import { UseAuthActions } from '../../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';

const initialValues = {
    username: '',
    password: ''
}

const inputData = [
    { id: 1, name: "username", label: <AiOutlineUser />, value: initialValues.username },
    { id: 2, name: "password", label: <AiOutlineKey />, value: initialValues.password },
]

function Login() {

    const { handleLogin } = UseAuthActions()
    const navigate = useNavigate()

    const onSubmit = (values) => {
        console.log(values);
        handleLogin(values.username)
        navigate("/")
    }

    const validationSchema = () => yup.object({
        username: yup.string().required("User Name is required"),
        password: yup.string().required("Password is required").min(8, 'Password is too short - should be 8 chars minimum.'),
    })


    const formik = useFormik({
        initialValues,
        validateOnMount: true,
        onSubmit,
        validationSchema
    })


    return (
        <LoginContainer onSubmit={formik.handleSubmit}>
            <LoginBg src={Image1} />
            <LoginContent>
                <LoginTitle>Login</LoginTitle>
                {inputData.map(item => (
                    <Input
                        formik={formik}
                        id={item.id}
                        label={item.label}
                        value={item.value}
                        name={item.name}
                        key={item.id}
                    />
                ))}
                <LoginButton to="" type='submit'>Login</LoginButton>
            </LoginContent>
            <LoginImage
                src={Image1}
                loading='lazy'
                alt='login'
            />
        </LoginContainer >
    )
}

export default Login
