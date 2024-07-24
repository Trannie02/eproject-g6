import { useNavigate } from 'react-router-dom';
import './Register.css'
export default function Register(){
    const navigate = useNavigate("");
    return(
        <div>
              <form className="register">
                <h2>REGISTER</h2>
              <div class="mb-3">
                    <label for="Name" class="form-label">Name </label>
                    <input type="text" class="form-control" id="name"/>
                </div>
                <div class="mb-3">
                    <label for="Email" class="form-label">Email </label>
                    <input type="email" class="form-control" id="Email" aria-describedby="emailHelp"/>
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="Password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="Password"/>
                </div>
               
                <button type="submit" class="btn btn-outline-success" onClick={(ev) => navigate(`/home`)}>Register</button>
            </form>
        </div>
    );
}