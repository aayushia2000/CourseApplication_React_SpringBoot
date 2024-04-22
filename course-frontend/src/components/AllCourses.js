import React, { useState , useEffect} from "react";
import Course from "./Course";
import axios from "axios";

import base_url from "./../api/bootapi";
import { toast } from "react-toastify";

const AllCourses=()=>{
    useEffect(() => {
        document.title = "All Course"
    },[]);

    const getAllCoursesFromServer = () =>{
    axios.get(`${base_url}/courses`).then(
        (response) =>{
                console.log(response.data);
                toast.success("Courses have been loaded");
                setCourses(response.data);
        },
        (error)=>{
            console.log(error);
            toast.error("something went wrong");
        }
    );
};

useEffect(() =>{
    getAllCoursesFromServer();
}, []);
    const [courses,setCourses]  = useState([])
const updateCourses = (id)=>{
    setCourses(courses.filter((c)=> c.id != id));
};
    return (
        <div>
            <h1>All Courses</h1>
            <p>List of courses: </p>
            {
                courses.length>0 ? courses.map((item)=>
                    <Course key={item.id} course={item} update={updateCourses} />)
                    : "No courses"
            }
        </div>
    );
}

export default AllCourses;

// {title:"Java Course", description:"Java for beginners"},
// {title:"C Course", description:"C for beginners"},
// {title:"Python Course", description:"Python for beginners"}