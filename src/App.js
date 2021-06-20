/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import { Fragment } from 'react';
import SignUpForm from './components/signupform';
import Nav from './components/nav';


export default function App() {

  
  return (
    <Fragment>
      <Nav/>
     <SignUpForm/>
    </Fragment>
     
  )
}