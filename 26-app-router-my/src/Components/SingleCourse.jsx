import { useEffect } from 'react';
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom';
import courses from '../data/courses';

const SingleCourse = (props) => {
    const { slug } = useParams();
    const course = courses.find((el) => el.slug === slug);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (!course) {
            navigate('..', { relative: 'path' });
        }
    }, [course, navigate]);

    return (
        <div>
            <h3>{course?.title}</h3>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
                vitae sint est aperiam eum dicta libero necessitatibus itaque
                asperiores, sunt quam omnis iste architecto provident non
                numquam veritatis magni officia vel aliquid assumenda placeat
                voluptatibus atque? Suscipit debitis consequuntur voluptatum
                facilis, cum perspiciatis, quam fugiat optio, reiciendis nostrum
                architecto itaque sunt laudantium ratione animi sequi aspernatur
                numquam molestiae obcaecati molestias? Numquam, perspiciatis
                dolor reprehenderit officiis voluptatem cumque eos, tempore
                similique aut fugiat soluta, eligendi veritatis aperiam facere
                consequatur! Veritatis reprehenderit modi aut iste, ducimus,
                totam dicta quas, quaerat accusamus porro illo vero! Laudantium
                illum neque eveniet tempore delectus doloremque provident?
            </p>
            <Link to=".." relative="path">
                All courses
            </Link>
        </div>
    );
};

export default SingleCourse;
