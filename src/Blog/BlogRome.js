import { FaLongArrowAltLeft } from 'react-icons/fa';
import './Blog.css'
export default function BlogRome(){
    return(
        <div className="blog-item">
             <div class="row my-5 justify-content-center">
                <img src="/images/blogRome.jpeg" />
            </div>

            <div class="row blog-content-center">
                <h2>A magnificent ancient Rome sculpture exhibition at the Musée du Louvre, June 26 to November 11, 2024.</h2>
            </div>

            <div class="row my-5 blog-content">
                <p>A magnificent ancient Rome sculpture exhibition at the Musée du Louvre, June 26 to November 11, 2024. &nbsp;</p>

                <p>Come and admire the treasures of ancient Rome, with a visit to the "Masterpieces from the Torlonia Collection" exhibition, at the Musée du Louvre, from June 26 to November 11, 2024.&nbsp;</p>

                <p>The largest ever private collection of ancient Roman sculptures, assembled throughout the 19thcentury by the Torlonia princes in Rome,
                    is being shown to the public for the first time since the mid-20th century in a series of special exhibitions.
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    Showcasing masterpieces of ancient sculpture, the exhibition will present some truly exquisite treasures of Roman art and explore the origins of museums in Europe during the Enlightenment and the 19th
                    century.
                    The Louvre will have the privilege of hosting the Torlonia marbles for their first showing outside Italy, in the renovated summer apartments of Anne of Austria – home to the museum’s permanent collection of ancient sculpture since its creation in the late 18th century.</p>

                <p>Source:&nbsp;<a href="https://www.louvre.fr/en/exhibitions-and-events/exhibitions/masterpieces-from-the-torlonia-collection">louvre.fr</a></p>
            </div>
            <div class="my-4 row">
                <div class="col-12 d-flex justify-content-center">
                    <a class="btn btn-antique-default" href="/bloghome"><FaLongArrowAltLeft/>&nbsp;&nbsp;Return</a>
                </div>
            </div>


        </div>
    );
}