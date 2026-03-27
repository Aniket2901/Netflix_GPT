import {React, useState}from 'react'
import Headers from './Header'

const Login = () => {
  const [signUpForm, setSignUpForm] = useState(false);
  const toggleForm = (e) => {
    e.preventDefault();
    setSignUpForm(!signUpForm);
  };
  return (
    <div >
      <Headers />
      <div className="absolute width-100% height-100vh">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/8cc08720-ac1c-4364-bcbd-9495bf0308cd/web/IN-en-20260323-TRIFECTA-perspective_0b8c8e4e-71ee-48bd-8e16-da74f083a838_large.jpg" alt="Netflix-Banner" />
      </div>
      <div className='absolute w-4/12 p-12 mx-auto my-36 right-0 left-0 h-auto bg-black/75 rounded-lg'>
        <form className=' flex flex-col gap-4 items-center justify-center'>
          <h1 className='text-white text-2xl font-bold'>{signUpForm ? 'Sign Up' : 'Sign In'}</h1>
          {signUpForm && <input className='w-5/6 h-10 p-4 m-2 bg-black/50 text-white placeholder:text-gray-400 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500' type='text' placeholder='First name' />}
          {signUpForm && <input className='w-5/6 h-10 p-4 m-2 bg-black/50 text-white placeholder:text-gray-400 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500' type='text' placeholder='Last name' />}
          {signUpForm && <input className='w-5/6 h-10 p-4 m-2 bg-black/50 text-white placeholder:text-gray-400 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500' type='number' placeholder='Age' />}
          <input className='w-5/6 h-10 p-4 m-2 bg-black/50 text-white placeholder:text-gray-400 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500' type='email' placeholder='Email or phone number' />
          <input className='w-5/6 h-10 p-4 m-2 bg-black/50 text-white placeholder:text-gray-400 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500' type='password' placeholder='Password' />
          {signUpForm && <input className='w-5/6 h-10 p-4 m-2 bg-black/50 text-white placeholder:text-gray-400 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500' type='text' placeholder='Gender' />}
          <button type='button' className='bg-red-600 p-6 m-4 text-white w-2/6 py-2 rounded hover:bg-red-700'>{signUpForm ? 'Sign Up' : 'Sign In'}</button>
          <p className='text-gray-400'><button type='button' onClick={toggleForm} className='text-white hover:underline'>{signUpForm ? 'Already have an account? Sign in' : "Don't have an account? Sign up now"}</button></p>
        </form>
      </div>
    </div>

  )
}

export default Login;