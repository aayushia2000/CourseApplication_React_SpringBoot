package com.ayushi.course.Service;

import com.ayushi.course.Entity.Courses;
import com.ayushi.course.Repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class CourseServiceImpl implements CourseService{
    @Autowired
    private CourseRepository courseRepository;
//    List<Courses> list;
    public CourseServiceImpl(){
//        list = new ArrayList<>();
//        list.add(new Courses(145, "Java Core Course","this course covers java"));
//        list.add(new Courses(146, "Springboot Course","this course covers springboot"));
    }

    @Override
    public List<Courses> getCourses() {

        return courseRepository.findAll();
    }

    @Override
    public Courses getCourse(long courseId) {
//        Courses c = null;
//        for(Courses course: list){
//            if(course.getId()==courseId){
//                c = course;
//                break;
//            }
//        }

        return courseRepository.getOne(courseId);
    }

    @Override
    public Courses addCourse(Courses course) {
//        list.add(course);
        courseRepository.save(course);
        return course;
    }

    @Override
    public Courses updateCourse(Courses course) {
//        list.forEach(e -> {
//            if(e.getId() == course.getId()){
//                e.setTitle(course.getTitle());
//                e.setDescription(course.getDescription());
//            }
//        });
        courseRepository.save(course);
        return course;
    }

    @Override
    public void deleteCourse(long l) {
//        list = this.list.stream().filter(e->e.getId()!=l).collect(Collectors.toList());
        Courses one = courseRepository.getOne(l);
        courseRepository.delete(one);
    }
}
