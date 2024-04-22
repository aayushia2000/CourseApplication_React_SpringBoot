import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Button, Container, Form,FormGroup, Input } from "reactstrap";
import base_url from "./../api/bootapi";
import { toast } from "react-toastify";
const AddCourse=()=>{
    useEffect(() => {
        document.title = "Add course"
    }, []);

    const [course, setCourse] = useState({});

    const handleForm = (e) => {
        console.log(course);
        e.preventDefault();
    };

    const postDatatoServer=(data)=>{
        axios.post(`${base_url}/courses`, data).then(
            (response)=>{
                        console.log(response);
                        console.log("Bawal cheez hai be!!!");
                        toast.success("Hogya add!!! Chal ab party de...");
            },
            (error)=>{
                console.log(error);
                console.log("Maza nahi aaya!!!");
                toast.error("Sorry bhai!!!");
            }
        );
    };
    return (
        <Fragment>
            <h1 className="text-center my-3">Fill Course Detail</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <label for="userId">Course Id</label>
                    <Input type="text" placeholder="Enter here" name="userId" id="userId" onChange={(e)=>{
                        setCourse({...course, id:e.target.value});
                    }} />
                </FormGroup>
                <FormGroup>
                    <label for="title">Course Title</label>
                    <Input type="text" placeholder="Enter title here" id="title" onChange={(e)=>{
                        setCourse({...course, title:e.target.value});
                    }}/>
                </FormGroup>
                <FormGroup>
                    <label for="description">Course Description</label>
                    <Input type="textarea" placeholder="Enter description here" id="title" style={{height:200}} onChange={(e)=>{
                        setCourse({...course, description:e.target.value});
                    }} />
                </FormGroup>
                <Container className="text-center">
                    <Button type="submit" color="primary">Add Course</Button>
                    <Button type="reset" color="warning ms-3" onClick={()=>{
                        setCourse({});
                    }}>Clear</Button>
                </Container>
            </Form>
        </Fragment>
    )
}


export default AddCourse;