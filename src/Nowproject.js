import react, { useState } from 'react'
import './nowprojects.css'
import Img1 from '../src/image/image1.jpg'
import Img2 from '../src/image/image2.jpg'
import Img3 from '../src/image/image3.jpg'
import Img4 from '../src/image/image4.jpg'
import Img5 from '../src/image/image5.jpg'
import Img6 from '../src/image/image6.jpg'
import Img7 from '../src/image/image7.jpg'
import Img8 from '../src/image/image8.jpg'
import Img9 from '../src/image/image9.jpg'
import { Check } from '@material-ui/icons'

let a;
const Frames = [{ img: Img1 }, { img: Img2 }, { img: Img3 }, { img: Img4 }, { img: Img5 }, { img: Img6 }, { img: Img7 }, { img: Img8 }]

function NowProjects() {

    // var slideIndex = 1;
    // showSlides(slideIndex);

    // function plusSlides(n) {
    //     showSlides(slideIndex += n);
    // }

    // function currentSlide(n) {
    //     showSlides(slideIndex = n);
    // }

    // function showSlides(n) {
    //     var i;
    //     var slides = document.getElementsByClassName("mySlides");
    //     var dots = document.getElementsByClassName("dot");
    //     if (n > slides.length) { slideIndex = 1 }
    //     if (n < 1) { slideIndex = slides.length }
    //     for (i = 0; i < slides.length; i++) {
    //         slides[i].style.display = "none";
    //     }
    //     for (i = 0; i < dots.length; i++) {
    //         dots[i].className = dots[i].className.replace(" active", "");
    //     }
    //     slides[slideIndex - 1].style.display = "block";
    //     dots[slideIndex - 1].className += " active";
    // }

    return (
        // <div>
        //     <div className="mySlides fade"><img src={Img1} /></div>
        //     <div className="mySlides fade"><img src={Img2} /></div>
        //     <div className="mySlides fade"><img src={Img3} /></div>

        //     <div>
        //         <a className="prev" onclick="plusSlides(-1)">&#10094;</a>
        //         <a className="next" onclick="plusSlides(1)">&#10095;</a>

        //     </div>
        //     <div style="text-align:center">
        //         <span className="dot" onclick="currentSlide(1)"></span>
        //         <span className="dot" onclick="currentSlide(2)"></span>
        //         <span className="dot" onclick="currentSlide(3)"></span>
        //     </div>
        // </div>
        <div>
            <div className="Mainimage">
                <img src={Img9} />
            </div>
            <div className="Screensize">

                {Frames.map((data) => {
                    return (
                        <img src={data.img} className="imageView" />
                    )
                })}
            </div>
        </div>
    )
}
export default NowProjects;