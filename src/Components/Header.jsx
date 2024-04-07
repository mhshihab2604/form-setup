import { Link } from "react-router-dom";
import useAuth from "./useAuth";


const Header = () => {
    const {logout,user} = useAuth()
    console.log(user);
    return (
        <div>
            <div className="flex justify-around items-center mt-5">
                <h1 className="text-3xl font-extrabold">Form-Setup</h1>
                <ul className="flex gap-5">
                    <Link to="/">Home</Link>
                    <Link to="/register">Register</Link>
                    <Link to="/login">Login</Link>
                </ul>
                <button className="btn">Login</button>
                <button onClick={logout} className="btn">Logout</button>
            </div>
        </div>
    );
};

export default Header;