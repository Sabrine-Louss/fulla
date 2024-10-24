import React from 'react';
import { useSelector } from 'react-redux';
import CourseCard from '../components/CourseCrad';

const CourseList = () => {
  const courses = useSelector((state) => state.courses.courses); 
  return (
    <div className="course-list">
      {courses.length === 0 ? (
        <p>No courses available at the moment.</p>
      ) : (
        courses.map((course) => <CourseCard key={course.id} course={course} />) 
      )}
    </div>
  );
};

export default CourseList;
