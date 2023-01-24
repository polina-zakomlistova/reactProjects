import courses from '../data/courses';
import { Link, useLocation } from 'react-router-dom';
import queryString from 'querystring';
import { useState } from 'react';

const Courses = () => {
    const location = useLocation();
    const query = queryString.parse(location.search);
    const [filteredCourses, setFilteredCourses] = useState(courses);

    const [filterKey, setFilterKey] = useState(query.filter);

    console.log(location.search);
    console.log(query);

    console.log(filterKey);
    console.log(query.sort);

    return (
        <div>
            <h1>Courses</h1>
            <ul>
                {courses.map((course) => {
                    return (
                        <li key={course.id}>
                            <Link to={course.slug}>{course.title}</Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Courses;
