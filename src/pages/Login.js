import { Navigate, useNavigate } from 'react-router-dom';
import './Login.css'

export default function Login() {
    const navigate = useNavigate("");
    return (
        <div>
            <form className="login">
                <h2>LOGIN</h2>
                <div class="mb-3">
                    <label for="Email" class="form-label">Email </label>
                    <input type="email" class="form-control" id="Email" aria-describedby="emailHelp"/>
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="Password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="Password"/>
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-outline-success" onClick={(ev) => navigate(`/home`)}>Login</button>
            </form>
        </div>
    );
} 