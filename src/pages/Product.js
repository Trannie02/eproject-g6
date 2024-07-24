
export default function Product({category,name,image,page}){

    return(
        <div>
            <p>{category}</p>
            <p>{name}</p>
            <img src={image} alt="" className="img"/>
           <p><button className="btn btn-outline" >{page}</button></p>
        </div>
    );
}