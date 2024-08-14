import {useState} from 'react';
import { useDispatch } from 'react-redux';
import FormInput from '../form-input/form-input.component';

import { signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';

import './sign-in-form.styles.scss';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button-component'
import { googleSignInStart, emailSignInStart } from '../../store/user/user.action'

const defaultFormFields = {
    email: '',
    password: '',
};

const SignInForm = () => {
    const dispatch = useDispatch();
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    console.log(formFields);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
      dispatch(googleSignInStart());
    };

    const handleSubmit = async (event) => {
      event.preventDefault();

      try{
        dispatch(emailSignInStart(email, password));
        resetFormFields();
      } catch(error) {
        switch (error.code) {
          case 'auth/wrong-password':
            alert('incorrect password for email');
            break;
          case 'auth/user-not-found':
            alert('no user associated with this email');
            break;
          default:
            console.log(error);
            break;
        }
      }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value})
    };

    return (
        <div className='sign-in-container'>
            <h2>Already have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label={"Email"} type="email" required onChange={handleChange} name="email" value={email}/>
                <FormInput label={"Password"} type="password" required onChange={handleChange} name="password" value={password}/>
                <div className="buttons-container">
                  <Button type="submit">Sign In</Button>
                  <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>Google sign in</Button>
                </div>
            </form>
        </div>
    )
} 

export default SignInForm;