import { useGoogleLogin } from "@react-oauth/google";
import { useAuthStore } from "../../store/todo-list";
import { Button } from "../../components/ui/button";

const Login = () => {
    const setAccessToken = useAuthStore((state) => state.setAccessToken);

    const login = useGoogleLogin({
        scope: "https://www.googleapis.com/auth/gmail.readonly",
        onSuccess: (res) => {
            setAccessToken(res.access_token);
        },
        onError: () => alert("Google login failed.")
    })

    return(
        <div>
            <Button
            onClick={login}>
                Login
            </Button>
        </div>
    )
}

export default Login;