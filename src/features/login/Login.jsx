import { useGoogleLogin } from "@react-oauth/google";
import { useAuthStore } from "../../store/todo-list";
import { Button } from "../../components/ui/button";

const Login = () => {
    const setAccessToken = useAuthStore((state) => state.setAccessToken);
    const setUserProfile = useAuthStore((state) => state.setUserProfile);

    const login = useGoogleLogin({
        scope: "https://www.googleapis.com/auth/gmail.readonly https://www.googleapis.com/auth/userinfo.profile",
        onSuccess:async (res) => {
            setAccessToken(res.access_token);

            const profileRes = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
                headers: {
                    Authorization: `Bearer ${res.access_token}`
                }
            });
            const profile = await profileRes.json();
            console.log(profile);
            setUserProfile(profile);
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