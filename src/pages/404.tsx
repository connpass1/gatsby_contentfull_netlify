import React from 'react'
import { Helmet } from 'react-helmet'
 
class ErrorPage extends React.Component {

    render() {     
      return (     
          <div style={{ background: '#fff' }}>
            <Helmet title="error 404" />            
            <div className="wrapper">              
             <h1>404</h1>
            </div>
          </div>
       
      )
    }
  }
  
  export default ErrorPage