
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function BlogHome() {
    const navigate = useNavigate();
    return (
        <div>
            <p className="title">BLOG</p>


        <div className="blog-home">

            <div className="row ">
                <div className="col-12 col-md-7" onClick={(ev) => navigate(`/blog`)} style={{ cursor: "pointer" }}>
                    <img src="/images/blog.jpeg" style={{width:"29rem",height:"20rem"}}/>
                    <div className="d-flex flex-column">
                        <span className="blog-title">Rare early medieval ivory carving acquired for £2m by V&amp;A</span>
                        <div className="blog-read-more my-2">
                        <a href="/blog">Read more&nbsp;&nbsp;<FaLongArrowAltRight/></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row ">
                <div className="col-12 col-md-7" onClick={(ev) => navigate(`/blogrome`)} style={{ cursor: "pointer" }}>
                    <img src="/images/blogRome.jpeg" style={{width:"30rem",height:"20rem"}} />
                    <div className="d-flex flex-column">
                        <span className="blog-title">A magnificent ancient Rome sculpture exhibition at the Musée du Louvre, June 26 to November 11, 2024.</span>
                        <div className="blog-read-more my-2">
                        <a href="/blogrome">Read more&nbsp;&nbsp;<FaLongArrowAltRight/></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row ">
                <div className="col-12 col-md-7" onClick={(ev) => navigate(`/bloggogh`)} style={{ cursor: "pointer" }}>
                    <img src="/images/blogGogh.jpg" style={{width:"24.5rem",height:"20rem"}}/>
                    <div className="d-flex flex-column">
                        <span className="blog-title">New Acquisition in The Van Gogh Museum: ‘Clovis Sleeping’ by Paul Gauguin</span>
                        <div className="blog-read-more my-2">
                        <a href="/bloggogh">Read more&nbsp;&nbsp;<FaLongArrowAltRight/></a>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
        </div>
    );
}