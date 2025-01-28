import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../client';
import './login.css'

const Login = ({ setToken }) => {
    let navigate = useNavigate()

    const [formData, setFormData] = useState({
        email: '', password: ''
    })

    console.log(formData)
    function handleChange(event) {
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: formData.email,
                password: formData.password,
            })

            if (error) throw error
            console.log(data)
            setToken(data)
            navigate('/homepage')

        } catch (error) {
            alert(error)
        }
    }

    return (
        <div className='login-container'>
            <h2>Sign In</h2>
            <label>Email</label>
            <form onSubmit={handleSubmit} className='login-form'>
                <div className='form-group'>

                    <input
                        placeholder='Masukkan Email'
                        type='email'
                        name='email'
                        onChange={handleChange} />
                </div>
            </form>

            <label>Kata Sandi</label>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>

                    <input
                        placeholder='Masukkan Kata Sandi'
                        name='password'
                        type="password"
                        onChange={handleChange} />
                </div>
            </form>

            <Link to='/signup'>Lupa Kata Sandi?</Link>

            <form>
                <button type='submit' className='submit-button'>
                    Masuk Sekarang
                </button></form>
        </div>
    )
}

export default Login