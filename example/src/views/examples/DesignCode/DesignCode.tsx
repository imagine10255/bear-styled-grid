import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import Navbar from './layout/Navbar';
import Header from './layout/Header';
import WaveWrapper1 from './layout/WaveWrapper';
import CourseSection from './layout/CourseSection';

import WaveWrapper2 from '@/views/examples/DesignCode/layout/WaveWrapper/WaveWrapper2';
import TutorialSection from '@/views/examples/DesignCode/layout/TutorialSection';
import Profile from '@/views/examples/DesignCode/layout/Profile/Profile';
import AppDownload from '@/views/examples/DesignCode/layout/AppDownload/AppDownload';
import Discounts from '@/views/examples/DesignCode/layout/Discounts';
import Trusted from '@/views/examples/DesignCode/layout/Trusred';
import WaveWrapper3 from './layout/WaveWrapper/WaveWrapper3';
import CompanyList from './layout/CompanyList';
import Instructors from '@/views/examples/DesignCode/layout/Instructors/Instructors';
import Price from './layout/Price/Price';
import WaveWrapper4 from './layout/WaveWrapper/WaveWrapper4';
import Footer from './layout/Footer';


const DesignCode = () => {

    return <>
        <WaveWrapper1/>
        <Wrapper>
            <Navbar className="mb-5"/>
            <Header/>
        </Wrapper>

        <CourseSection className="mb-5"/>

        <Wrapper2>
            <TutorialSection/>
            <WaveWrapper2/>
        </Wrapper2>

        <Profile/>

        <AppDownload/>

        <Discounts/>

        <Wrapper3>
            <Trusted/>
            <CompanyList/>
            <Instructors/>

            <WaveWrapper3/>
        </Wrapper3>

        <Price/>

        <Wrapper4>
            <WaveWrapper4/>
            <Footer/>
        </Wrapper4>


    </>;

};

export default DesignCode;


const Wrapper3 = styled.div`
  position: relative;
`;

const Wrapper4 = styled.div`
    position: relative;
`;

const Wrapper2 = styled.div`
    min-height: 800px;
    position: relative;
    padding-top: 250px;
    margin-bottom: 100px;
`;


const Wrapper = styled.div`
    height: 890px;
    min-height: 100vh;
    position: relative;
    padding-top: 50px;
    overflow: hidden;

    :before{
        content: '';
        background: linear-gradient(189.16deg, rgb(67, 22, 219) 13.57%, rgb(144, 118, 231) 98.38%);
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        z-index: -2;
        height: 100%;
    }
`;


const GlobalCSS = createGlobalStyle`
    body{
        background: rgb(31, 31, 71);
        color: #fff;
    }
`;