export default function Search() {
    return (
        <div>
            <form className="d-flex" style={{ width: "40%", marginLeft: "30%" }}>
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit" >Search</button>
            </form>
        </div>
    );
}