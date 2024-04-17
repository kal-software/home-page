import Navbar from "./Navbar"
//import { BrowserRouter as Router,Route,Routes, Link, RouterProvider } from "react-router-dom"
import { CiSearch } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { RxCountdownTimer } from "react-icons/rx";
import { FaRegBookmark } from "react-icons/fa6";
import { FaCcVisa } from "react-icons/fa";
import { BsChatSquareText } from "react-icons/bs";
import { LuGlobe2 } from "react-icons/lu";


function Home(){
    return(
        <>
        <Navbar/>
         <div className="body-container">
        <p className="job-search">Job Search Companies</p>
              <div className="inner-div">
<div className="key-container">
    <p className="keywords">KEYWORDS</p>
    <p className="lokking">What are you looking for?</p>
</div>
<div>
    <p className="job-category">JOB CATEGORY</p>
    <p className="identity">Choose an identity</p>
</div>
<div>
<p className="job-location">JOB LOCATION</p>
    <p className="what-do-you-want">What do you want to work?</p>
</div>
<div>
    <button className="search-button"> <CiSearch className="search"/>Search</button>
</div>
            </div>
            <div className="time-container">
                <div className="full-time">
                    <IoMdTime className="time-icon"/>
                    <p className="full-timep">Full Time</p>
                </div>

                <div className="part-time">
                    < RxCountdownTimer className="time-icon"/>
                    <p className="full-timep">Part Time</p>
                </div>

                <div className="book-time">
                    < FaRegBookmark  className="time-icon"/>
                    <p className="full-timep">Bookmarked</p>
                </div>

                <div className="visa-time">
                    <FaCcVisa className="time-icon"/>
                    <p className="full-timep">Visa Offered</p>
                </div>

                <div className="no-time">
                    <BsChatSquareText className="time-icon"/>
                    <p className="full-timep">No Nihongo</p>
                </div>

                <div className="over-time">
                    <LuGlobe2 className="time-icon"/>
                    <p className="full-timep">Overseas Ok</p>
                </div>
            </div>
         </div>
        </>
    )

}
export default Home