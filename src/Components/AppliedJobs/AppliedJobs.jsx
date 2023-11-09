/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const AppliedJobs = ({title}) => {
    const location = useLocation();
    useEffect(() => {
        document.title = `Job Heaven | ${title}`
    },[location.pathname, title])
    
    return (
        <div>
            This is Applied Jobs Section.
        </div>
    );
};

export default AppliedJobs;