package com.ayushi.course.Controller;

import com.ayushi.course.Entity.Courses;
import com.ayushi.course.Service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin
@RestController
public class CourseController {
    @Autowired
    private CourseService courseService;
    @GetMapping("/home")
    public String home(){
        return  "This is home page";
    }
    //get all courses
    @GetMapping("/courses")
    public List<Courses> getCourses(){
        return this.courseService.getCourses();
    }
    //get course by id
    @GetMapping("/courses/{courseId}")
    public Courses getCourseById(@PathVariable String courseId){
        return this.courseService.getCourse(Long.parseLong(courseId));
    }

    //add anew course
    @PostMapping(path = "/courses", consumes = "application/json")
    public Courses addCourse(@RequestBody Courses course){
        return this.courseService.addCourse(course);
    }
    //update course
    @PutMapping("/courses")
    public Courses updateCourse(@RequestBody Courses course){
        return this.courseService.updateCourse(course);
    }

    //delete course
    @DeleteMapping("/courses/{courseId}")
    public ResponseEntity<HttpStatus> deleteCourse(@PathVariable String courseId){
        try{
            this.courseService.deleteCourse(Long.parseLong(courseId));
            return new ResponseEntity<>(HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
