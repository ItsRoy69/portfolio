import React from "react";
import "./Project.css";
import Project1 from './img/portfolio-1.jpg';
import Project2 from './img/portfolio-2.jpg';
import Project3 from './img/portfolio-3.jpg';
import Project4 from './img/portfolio-4.jpg';
import Project5 from './img/portfolio-5.jpg';
import Project6 from './img/portfolio-6.jpg';

function Project() {
  return (
    <div className="project component__space" id="Portfolio">
      <div className="heading">
        <h1 className="heading">My Projects</h1>
        <p className="heading p__color">
          These are the projects that I have worked on
        </p>
        <p className="heading p__color">
         while learning development.
        </p>
      </div>
       <div className="container">
           <div className="row">

             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project1} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Chat App</h5>
                     <h4 className="project__text">A normal Chat App using React.</h4>
                     <a href="https://chat-app-itsroy69.vercel.app/" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project2} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Facebook Clone</h5>
                     <h4 className="project__text">Facebook clone using FIRE stack.</h4>
                     <a href="https://facebook-clone-617ea.web.app/" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project3} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">MyMovie</h5>
                     <h4 className="project__text">New movies updated with time.</h4>
                     <a href="https://itsroy69.github.io/MyMovie/" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project4} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">MyGameShop</h5>
                     <h4 className="project__text">Just a gamestore website.</h4>
                     <a href="https://itsroy69.github.io/gaming/" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project5} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Milan</h5>
                     <h4 className="project__text">Help meets need.</h4>
                     <a href="https://iamtamal.github.io/Milan/" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project6} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">VestTech</h5>
                     <h4 className="project__text">Innovative platform for smart</h4>
                     <h4 className="project__text">investments .</h4>
                     <a href="https://itsroy69.github.io/VestTech/" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>

             <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
              <form action="https://github.com/ItsRoy69">
                <button className="view__more pointer btn">View more</button>
              </form>
             </div>

           </div>
       </div>
    </div>
  );
}

export default Project;
