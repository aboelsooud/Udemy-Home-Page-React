import React, { useEffect, useState, useContext, Fragment } from 'react'
import { useParams } from 'react-router-dom'
import { DataContext } from '../../App';
import NoMatch from '../../components/NoMatch/NoMatch';
import SingleCourseHeader from '../../components/SingleCourseHeader/SingleCourseHeader';
import SingleCourseNav from '../../components/SingleCourseNav/SingleCourseNav';

function SingleCoursePage() {
    let {id} = useParams();
    const [curCourse, setCurCourse] = useState({});
    const courses = useContext(DataContext);
    const [worngId, setWrongId] = useState(true);

    useEffect(() => {
        const x = courses.courses.find(item => item.id == id);
        if(x !== undefined){
            setCurCourse(x);
            setWrongId(false);
        }else setWrongId(true);
    }, [])

    return (
        <> 
            {worngId ? <NoMatch/> : 
                <>
                    <SingleCourseNav course={curCourse}/>
                    <SingleCourseHeader course={curCourse}/>
                </>
            }
        </>
    )
}

export default SingleCoursePage