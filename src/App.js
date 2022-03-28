import './App.css';

import React, { Component } from 'react' 
import Navbar from './Components/Navbar';
import News from  './Components/News'; 
import {
  BrowserRouter,
  Routes, 
  Route,  } from "react-router-dom";
  import LoadingBar from 'react-top-loading-bar'
import Footer from './Components/Footer';

export default class App extends Component {      //rcc react class based component
  pageSize=12;
  apiKey="  "
  state ={
    progress:0
  }
  
  setProgress =(progress) =>
  {
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        
         <BrowserRouter> 
        
          <Navbar />
 
          <LoadingBar color='#f11946' height={4}
          progress={this.state.progress}
         
         />
      

              <Routes>
                   
                    <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="in" category="general"/>}/> 
                    <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.pageSize} country="in" category="business"/>}/> 
                    <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"/>}/>  
                    <Route exact path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="in" category="general"/>}/> 
                    <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.pageSize} country="in" category="health"/>}/> 
                    <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.pageSize} country="in" category="science"/>}/> 
                    <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.pageSize} country="in" category="sports"/>}/>
                    <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.pageSize} country="in" category="technology"/>}/>

              </Routes> 
              {/* <Routes>
                    <Route exact path="//ae" element={<News setProgress={setProgress} key="ae" pageSize={this.pageSize} country="ae" category="general"/>}/> 
                    <Route exact path="/ae" element={<News setProgress={setProgress} key="ae" pageSize={this.pageSize} country="ae" category="business"/>}/> 
                    <Route exact path="/ae" element={<News setProgress={setProgress} key="ae" pageSize={this.pageSize} country="ae" category="entertainment"/>}/>  
                    <Route exact path="/ae" element={<News setProgress={setProgress} key="ae" pageSize={this.pageSize} country="ae" category="general"/>}/> 
                    <Route exact path="/ae" element={<News setProgress={setProgress} key="ae" pageSize={this.pageSize} country="ae" category="health"/>}/> 
                    <Route exact path="/ae" element={<News setProgress={setProgress} key="ae" pageSize={this.pageSize} country="ae" category="science"/>}/> 
                    <Route exact path="/ae" element={<News setProgress={setProgress} key="ae" pageSize={this.pageSize} country="ae" category="sports"/>}/>
                    <Route exact path="/ae" element={<News setProgress={setProgress} key="ae" pageSize={this.pageSize} country="ae" category="technology"/>}/>
              </Routes>
         */}
        </BrowserRouter>
         
         <Footer/>

       </div>
    )
  }
}
