import React, { Component } from 'react';  
import Hoc from './HOC';  
import PureComp from './PureComp';
import './App.css'
  
class App extends Component {  
  render() {  
    return (  
      <div>  
        <div className="hoc">
        <h1 className='name'>HIGH ORDER COMPONENTS</h1>
        <h1 className='name2'></h1>  
       
        <h2></h2>
        <ol>
          <li>The Higher-Order component is simply called HOC.</li>
<li>A Higher-Order component is a function that takes a component and returns a new component by adding additional functionalities to the component.
HOC is wrapped in the original component.</li>
<li>Higher-Order component is an advanced technique in ReactJS for reusing component logic.</li>
<li>HOCs are not part of the React API. But, It is a pattern that emerges from React’s compositional nature.</li>    
        </ol> 
        </div>
        <div className='pure'>
          <PureComp about="A React component is considered pure if it renders the same output for the same state and props. For this type of class component, React provides the PureComponent base class. Class components that extend the React.PureComponent class are treated as pure components."/> 
          </div>
         
      </div>  
    )  
  }  
}  
App = Hoc(App);  
export default App;  