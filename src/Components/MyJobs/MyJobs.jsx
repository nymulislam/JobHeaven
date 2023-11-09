/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const MyJobs = ({title}) => {
    const location = useLocation();
    useEffect(() => {
        document.title = `Job Heaven | ${title}`
    }, [location.pathname, title])
    
    return (
        <div>
            This is MyJobs Section.
        </div>
    );
};

export default MyJobs;