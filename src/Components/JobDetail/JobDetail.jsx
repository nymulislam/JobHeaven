/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useLoaderData, useLocation } from "react-router-dom";

const JobDetail = ({title}) => {
    const location = useLocation();
    useEffect(() => {
        document.title = `Job Heaven | ${title}`
    }, [location.pathname, title])

    const job = useLoaderData()
    
    return (
        <div>
            This is Job Detail Page...
        </div>
    );
};

export default JobDetail;