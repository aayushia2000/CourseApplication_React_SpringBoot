import axios from "axios";
import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardFooter, Button, Container} from "reactstrap";
import base_url from "./../api/bootapi";
import { toast } from "react-toastify";
const Course =({course, update})=>{
    const deleteCourse=(id)=>{
        axios.delete(`${base_url}/courses/${id}`).then(
            (response)=>{
                    toast.success("Data ka game baja diya");
                    update(id);
            },
            (error)=>{
                    toast.error("Sorry bhai");
            }
        );
    };
    return (
        <Card className="text-center">
            <CardBody>
                <CardSubtitle className="fw-bold"> {course.title}</CardSubtitle>
                <CardText>{course.description}</CardText>
                <Container className="text-center">
                    <Button color="danger" onClick={()=>{
                        deleteCourse(course.id);
                    }}>Delete</Button>
                    <Button color="warning ms-3">Update</Button>
                </Container>
            </CardBody>
        </Card>
    )
}

export default Course;