import { useState } from 'react'
import logo1 from './assets/logo1.svg'
import {GoogleOAuthProvider, GoogleLogin} from '@react-oauth/google';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Sign() {
    const [inputval,setInputval]=useState('')
    const [password,setPassword]=useState('')
  
    function handleinput(e){
        setInputval(e.target.value)
        console.log(inputval);  
    }

    function handlepassword(e){
        setPassword(e.target.value)
        console.log(password);
    }

    const handleSubmit = async () => {
      try {
        await axios.post('http://localhost:3000/data', {
          email: inputval,
          password: password
        });
        setInputval('');
        setPassword('');

        alert('Data sent successfully!');

      } catch (error) {
        console.error('Error sending data:', error);
        alert('Error sending data.');
      }
    }

    return (
      <GoogleOAuthProvider>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              alt="Your Company"
              src={logo1}
              className="mx-auto h-10 w-auto"
            />
            <h2 className="mt-7 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>

          <div className='flex justify-center pt-6 items-center gap-10'>
            <a href="#" className='px-9 py-2 text-black border border-black rounded-md '> 
              Google
            </a>
            <a href="#" className='px-9 py-2 text-black border border-black rounded-md'>
              facebook
            </a>

          </div>

          <div className='flex justify-center items-center pt-3 w-full mt-4'>
            <span className=' text-black'>OR</span>
          </div>
  
          <div className="mt-1 sm:mx-auto pt-1 sm:w-full sm:max-w-sm">
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    onChange={handleinput}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    onChange={handlepassword}
                    autoComplete="current-password"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={handleSubmit}
                  Link to="dash-board"
                >
                  Sign in
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{' '}
              <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </GoogleOAuthProvider>
    )
  }
  