import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Col, Container, Row } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import Home from './components/Home';
import Course from './components/Course';
import AllCourses from './components/AllCourses';
import AddCourse from './components/AddCourse';
import Header from './components/Header';
import Menus from './components/Menus';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  const btnHandle = () =>{
    // toast("This is my first toast")
    toast.success("Done",{
      position: "top-center",
    });
  };

  return (
    <div>
      <Router>
      <ToastContainer />
      <Container>
        <Header />
        <Row>
          <Col md={4}>
            <Menus />
            {/* <h2>This is menu side</h2> */}
          </Col>
          <Col md={8}>
            <Routes>
            <Route path='/' Component={Home} exact />
            <Route path='/add-course' Component={AddCourse} exact />
            <Route path='/view-courses' Component={AllCourses} exact />
            </Routes>
            {/* <Home /> */}
          {/* <h2>This is content side</h2> */}
          </Col>
        </Row>
      </Container>
      </Router>
    </div>
  
);
}

export default App;
// function App() {
//   return (
//     <div>
//       <Header name = "Ayushi Gupta"  desig = "Java Dev with GenAI" />
//       <hr/>
//       <Header name = "Akshay Srivastava" desig = "Java Dev with AWS" />
//       <hr/>
//       <h1>This is my first React Application</h1>
//       <p>Lorem ipsum paragraph</p>
//       <p>Aise hi randomly koi line</p>
//       <hr />
//       <Header name = "Vinayak Gupta" desig = "MCH surgeon" />
//       <hr/>
//     </div>
  
// );
// }

// <h1>Simple Application for Bootstrap component</h1>
//       <Button color='success' outline onClick={btnHandle}>First react Button</Button>
//       <hr />
//       <Button color="info" outline>Button 2</Button>
//       <hr />
//       <Button color='primary'>Button 3</Button>


// {/* <Course course={{title:"Java Course", description:"Java for beginners"}} />
//       <Course course={{title:"C++ Course", description:"C++ for beginners"}} /> */}

//       // <Home />
      // <AllCourses />
      // <AddCourse />
      // <hr />