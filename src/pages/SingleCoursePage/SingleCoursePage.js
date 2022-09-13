import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { DataContext, isFetchedContext } from '../../App';
import NoMatch from '../../components/NoMatch/NoMatch';

function SingleCoursePage() {
    let {id} = useParams();
    const [curCourse, setCurCourse] = useState({});
    const courses = useContext(DataContext);
    const [worngId, setWrongId] = useState(false);

    useEffect(() => {
        const x = courses.courses.find(item => item.id == id);
        if(x !== undefined)
            setCurCourse(x);
        else setWrongId(true);
    }, [])

    return (
        <> 
            {worngId ? <NoMatch/> : curCourse.id}
        </>
    )
}

export default SingleCoursePage