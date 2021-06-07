import './App.css';
import AdiaLogo from './AdiaLogo.png';
import Nuralogo from './Nuralogo.png';

import Hudson from './Hudson.svg'
import Picture1 from './Picture1.png';
import Ocean from './Ocean.jpg';
import Logo2 from './Logo2.png';

import React, { useState } from "react";
import axios from 'axios'

//----------------------------------------------------------
//Following Steps from Canvas: 
// 1.) Importing Firebase into App.js File
//----------------------------------------------------------

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';


//----------------------------------------------------------
//2.) Setting up Config: 
// Configure Firebase.
//----------------------------------------------------------

const config = {  
  apiKey: "AIzaSyBM1b1wpI20J2BWg_u2mO7I5WxEo1SA6jo",
  authDomain: "jsfirebaseproject-c8bde.firebaseapp.com",
};
 
 

// Initialize Firebase
if (firebase.apps.length === 0) {
  firebase.initializeApp(config);
}
//----------------------------------------------------------
//3.) A State called "Is Signed in" is definted. "
//----------------------------------------------------------

class SignInScreen extends React.Component 
{
  // The component's Local state.
  state = {
    isSignedIn: false // Local signed-in state.
  };
  
//----------------------------------------------------------
//4.) uiConfig is used to configure firebaseui
//----------------------------------------------------------
  uiConfig = 
    {
      signInFlow: 'popup',
// 4.1  From Canvas instructions, i've changed this to email/password authentication
      signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
      callbacks:  
        {
          // Avoid redirects after sign-in.
          signInSuccessWithAuthResult: () => false
        }
    };


//----------------------------------------------------------
// 5.) A listener is created that listens for changes in sign in state from Firebase, 
// and updates your React component state with the new value
//----------------------------------------------------------
  async componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
        (user) => this.setState({isSignedIn: !!user})
    );

    
     // this.setState({data:token})
                      }
  // async componentDidMount(){

  // }

  //5.1  ^^^^You can additionally save that user object in your React component's state so that you can use it later.
  // Not sure what this means?
  
  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }
 //----------------------------------------------------------
// 5.)   In the render function, <StyledFirebaseAuth /> is added to the signed in view with 2 props
// Q -What are props? 
//----------------------------------------------------------
  //can't do comments in the render function - because inside render is JSX
  //
render() {
    //variable isSignedIn keeps track of sign in status
    // hit command forward slash inside render to auto command
    if (!this.state.isSignedIn) {
      return (
       
        <div style={{ 
          // backgroundImage: `url(${Picture1})`,
         
        }}>
   
     
   <img src = {Nuralogo} width="30%"  />
<br></br>
<br></br>  
<br></br>
<br></br>  
        {/* <h1 style={{textAlign: "center",  color: "Green"}}>Welcome to the Pain Questionaire</h1> */}
          <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
        </div>
      );
    }
    return (
      <div>
        
    

          <SignedInComponent> </SignedInComponent>

      </div>
    );
  }
}


////HOW DO I GET TOKEN? 
// async componentDidMount() {
//   //const token = await firebase.auth().
//   const token = await firebase.auth().currentUser.getIdToken()

  //currentUser.getIdToken()
//this.setState({data: token})
// }
//----------------------------------------------------------


//----------------------------------------------------------
// II. SIGNED IN COMPONENT
//----------------------------------------------------------
 function SignedInComponent() 
{

 
  
  
  return (
    <section className = "section">
      <div className = "Container1">
       

 



{/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSelyZuJFakQZfTxyn_EZ4jDXTJiebOpn0c9oe4Xcdx0kJCUAQ/viewform?embedded=true" width="700" height="520" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
   <img src = {Nuralogo} width="15%"  />

 <br></br>
 <iframe src= "https://cornell.ca1.qualtrics.com/jfe/form/SV_9nSqh9eVd3nTWcu" width="900" height="620" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
 <button onClick={() => firebase.auth().signOut()}>Sign-out</button>
</div>
    </section>



  )
}
// 
export default SignInScreen;
//export default SignedInComponent






