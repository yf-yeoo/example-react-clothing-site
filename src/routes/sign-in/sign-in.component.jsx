import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import { FirebaseAuthException } from "firebase/app";
function SignIn() {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
    };

    return(
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>
                Sign In With Google Popup
            </button>
        </div>
    );
};

export default SignIn;