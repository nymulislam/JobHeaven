/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const AddJob = ({title}) => {
    const location = useLocation();
    useEffect(() => {
        document.title = `Job Heaven | ${title}`
    }, [location.pathname, title])
    return (
        <div>
            This is Add Job Section
        </div>
    );
};

export default AddJob;