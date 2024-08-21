import { useAuth } from '../../../redux/auth';
import {useProfile} from '../../../redux/profile'

export const AuthStatus = () => {
    const { auth: {authStatus}, logout } = useAuth()
    const { profile: { data } } = useProfile()

    if (authStatus === "logged-out") {
        return <p style={{fontSize: "30px"}}>You are not logged in.</p>;
    }

    return (
        <div>
            <p style={{fontSize: "30px", margin: 10}}>Welcome {data?.username}!</p>
            <button onClick={() => void logout()}>Log out</button>
        </div>
    );
}