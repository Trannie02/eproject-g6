import Product from "./Product";
import ds from './Data.json';
export default function Antique(){
    return(
        <div>
            {
                ds.map(itemp => (
                    <div className="col-md-10 col-sm-5">
                        <Product category={itemp.category} name={itemp.name} image={itemp.image} />
                         <p><button className="btn btn-outline" >Read more</button></p>
                    </div>
                ))
            }
        </div>
    );
}