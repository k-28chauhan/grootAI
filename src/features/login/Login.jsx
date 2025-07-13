import { useGoogleLogin } from "@react-oauth/google";
import { useAuthStore } from "../../store/todo-list";
import { Button } from "../../components/ui/button";

const Login = () => {
    const setAccessToken = useAuthStore((state) => state.setAccessToken);
    const setUserProfile = useAuthStore((state) => state.setUserProfile);
    const setUnreadMails = useAuthStore((state) => state.setUnreadMails);

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
            setUserProfile(profile);

            const mails = await fetch("https://www.googleapis.com/gmail/v1/users/me/labels/INBOX",
                {
                    headers: {
                        Authorization: `Bearer ${res.access_token}`
                    }
                }
            );
            const unreadMails = await mails.json();
            setUnreadMails(unreadMails);
            console.log(unreadMails);

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