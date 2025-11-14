import React from 'react'
import './App.css'
import { useState } from 'react'
import BasicForm from './components/LoginForm.jsx'
import { Button } from 'react-bootstrap'
import SignupForm from './components/SignupForm.jsx'

function App() {
  let [type, setType] = useState("login")
  
  return (
    <div className='container'>
      <div className="row justify-content-center">
        {type === "login" ?
          <div className="col-6 p-5">
            <h1 className='h1'>Login</h1>
            <BasicForm />
            <Button variant='link' onClick={() => {setType("signup")}}>
              signup
            </Button>
          </div>
          :
          <div className="col-6 p-5">
            <h1 className='h1'>SignUp</h1>
            <SignupForm />
            <Button variant='link' onClick={() => {setType("login")}}>
              Login
            </Button>
          </div>
        }
      </div>
    </div>
  )
}

export default App

























// import React, { useState } from 'react';
// import { Form, Input, Button, Checkbox, message } from 'antd';
// import { 
//   UserOutlined, 
//   LockOutlined, 
//   MailOutlined,
//   EyeInvisibleOutlined,
//   EyeTwoTone 
// } from '@ant-design/icons';
// import './App.css';

// const App = () => {
//   const [activeTab, setActiveTab] = useState('login');
//   const [loading, setLoading] = useState(false);

//   const onLogin = async (values) => {
//     setLoading(true);
//     try {
//       console.log('Login values:', values);
//       await new Promise(resolve => setTimeout(resolve, 1000));
//       message.success('Login successful!');
//     } catch (error) {
//       message.error('Login failed!');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const onSignup = async (values) => {
//     setLoading(true);
//     try {
//       console.log('Signup values:', values);
//       await new Promise(resolve => setTimeout(resolve, 1000));
//       message.success('Account created successfully!');
//       setActiveTab('login');
//     } catch (error) {
//       message.error('Signup failed!');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="container">
//       {/* Sirf Form Section - Left illustration hat gaya */}
//       <div className="form-section">
//         <div className="form-container">
//           {/* <div className="logo">
//             <i className="fas fa-user-graduate"></i>
//           </div> */}

//           {/* <div className="welcome-text">
//             <h2>Welcome to Student Portal</h2>
//             <p>Join thousands of students achieving their academic goals</p>
//           </div> */}

//           {/* Tabs */}
//           <div className="tabs">
//             <div 
//               className={`tab ${activeTab === 'login' ? 'active' : ''}`} 
//               onClick={() => setActiveTab('login')}
//             >
//               Login
//             </div>
//             <div 
//               className={`tab ${activeTab === 'signup' ? 'active' : ''}`} 
//               onClick={() => setActiveTab('signup')}
//             >
//               Sign Up
//             </div>
//           </div>

//           {/* Login Form */}
//           <div className={`form ${activeTab === 'login' ? 'active' : ''}`}>
//             <h2 className="form-title">Welcome Back</h2>

//             <Form onFinish={onLogin} className="custom-form">
//               <div className="input-group">
//                 <i className="fas fa-envelope"></i>
//                 <Form.Item name="email" rules={[{ required: true, message: '' }]}>
//                   <Input placeholder="Email Address" />
//                 </Form.Item>
//               </div>

//               <div className="input-group">
//                 <i className="fas fa-lock"></i>
//                 <Form.Item name="password" rules={[{ required: true, message: '' }]}>
//                   <Input.Password
//                     placeholder="Password"
//                     iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
//                   />
//                 </Form.Item>
//               </div>

//               <div className="remember-forgot">
//                 <div className="remember">
//                   <Form.Item name="remember" valuePropName="checked" noStyle>
//                     <Checkbox>Remember me</Checkbox>
//                   </Form.Item>
//                 </div>
//                 <a href="#" className="forgot-password">Forgot Password?</a>
//               </div>

//               <Form.Item>
//                 <Button 
//                   htmlType="submit" 
//                   className="todo-btn"
//                   loading={loading}
//                   block
//                 >
//                   Login
//                 </Button>
//               </Form.Item>
//             </Form>

//             <div className="divider">
//               <span>Or continue with</span>
//             </div>

//             <div className="social-login">
//               <div className="social-btn facebook">
//                 <i className="fab fa-facebook-f"></i>
//               </div>
//               <div className="social-btn google">
//                 <i className="fab fa-google"></i>
//               </div>
//               <div className="social-btn twitter">
//                 <i className="fab fa-twitter"></i>
//               </div>
//             </div>

//             <div className="switch-text">
//               Don't have an account? <a onClick={() => setActiveTab('signup')}>Sign Up</a>
//             </div>
//           </div>

//           {/* Signup Form */}
//           <div className={`form ${activeTab === 'signup' ? 'active' : ''}`}>
//             <h2 className="form-title">Create Account</h2>

//             <Form onFinish={onSignup} className="custom-form">
//               <div className="input-group">
//                 <i className="fas fa-user"></i>
//                 <Form.Item name="fullName" rules={[{ required: true, message: '' }]}>
//                   <Input placeholder="Full Name" />
//                 </Form.Item>
//               </div>

//               <div className="input-group">
//                 <i className="fas fa-envelope"></i>
//                 <Form.Item name="email" rules={[{ required: true, type: 'email', message: '' }]}>
//                   <Input placeholder="Email Address" />
//                 </Form.Item>
//               </div>

//               <div className="input-group">
//                 <i className="fas fa-lock"></i>
//                 <Form.Item name="password" rules={[{ required: true, min: 6, message: '' }]}>
//                   <Input.Password
//                     placeholder="Password"
//                     iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
//                   />
//                 </Form.Item>
//               </div>

//               <div className="input-group">
//                 <i className="fas fa-lock"></i>
//                 <Form.Item 
//                   name="confirmPassword"
//                   dependencies={['password']}
//                   rules={[
//                     { required: true, message: '' },
//                     ({ getFieldValue }) => ({
//                       validator(_, value) {
//                         if (!value || getFieldValue('password') === value) {
//                           return Promise.resolve();
//                         }
//                         return Promise.reject(new Error('Passwords do not match!'));
//                       },
//                     }),
//                   ]}
//                 >
//                   <Input.Password
//                     placeholder="Confirm Password"
//                     iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
//                   />
//                 </Form.Item>
//               </div>

//               <Form.Item>
//                 <Button 
//                   htmlType="submit" 
//                   className="todo-btn"
//                   loading={loading}
//                   block
//                 >
//                   Sign Up
//                 </Button>
//               </Form.Item>
//             </Form>

//             {/* <div className="divider">
//               <span>Or continue with</span>
//             </div>

//             <div className="social-login">
//               <div className="social-btn facebook">
//                 <i className="fab fa-facebook-f"></i>
//               </div>
//               <div className="social-btn google">
//                 <i className="fab fa-google"></i>
//               </div>
//               <div className="social-btn twitter">
//                 <i className="fab fa-twitter"></i>
//               </div>
//             </div> */}

//             <div className="switch-text">
//               Already have an account? <a onClick={() => setActiveTab('login')}>Login</a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;