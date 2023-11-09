/* eslint-disable react/prop-types */
import { useLocation } from "react-router-dom";
import Banner from "../Banner/Banner";
import CareerAdvice from "../CareerAdvice/CareerAdvice";
import Overview from "../Overview/Overview";
import MyTabs from "../Tabs/MyTabs";
import { useEffect } from "react";

const Home = ({title}) => {
    const location = useLocation();
    useEffect(()=> {
        document.title = `Job Heaven | ${title}`
    }, [location.pathname, title])
    return (
        <div>
            <Banner></Banner>
            <MyTabs></MyTabs>
            <CareerAdvice></CareerAdvice>
            <Overview></Overview>
        </div>
    );
};

export default Home;