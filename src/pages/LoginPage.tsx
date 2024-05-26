import {useAuthContext} from "../context/authContext";
import LoginForm from "../components/forms/LoginForm";
import {NavLink, useNavigate} from "react-router-dom";

const serverPort = process.env.REACT_APP_SERVER_PORT
const serverAddress = `//localhost:${serverPort}`

interface LoginObjectInterface {
    email: string,
    password: string,
}

export default function LoginPage () {
    const {login} = useAuthContext();
    const navigate = useNavigate();

    const loginHandler = async ({email, password}: LoginObjectInterface) => {
        const payload = {email, password};

        try {
            const response = await fetch(`${serverAddress}/auth/login`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(payload),
            })
            const {id, email} = await response.json()

            login({id, email}, () => {
                navigate("/home")
            })

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <h1>Вход</h1>

            <LoginForm
                submitHandler={loginHandler}
            />

            <NavLink to={'/registration'}>Регистрация</NavLink>
        </>
    );
}