package com.ayushi.course.Service;

import com.ayushi.course.Entity.Courses;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public interface CourseService {

    public List<Courses> getCourses();

    public Courses getCourse(long courseId);

    public Courses addCourse(Courses course);

    public Courses updateCourse(Courses course);

    public void deleteCourse(long l);
}
