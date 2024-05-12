import React, { use, useState }  from 'react'
import axios from 'axios';
import PropTypes from 'prop-types';
import { Input, Button } from "@nextui-org/react";
import useToken from "@/hooks/useToken";

async function loginUser(credentials:any) {
    try {
      const response = await axios.post("http://127.0.0.1:5000/auth/login", credentials, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      return response.data; 
    } catch (error) {
      console.error('Login error:', error);
      throw error; 
    }
  }

  const SignInLayout: React.FC = ({ setToken }:any) => {
    const [email, setEmail] = useState('');
    const [passcode, setPasscode] = useState('');
    const [emailEntered, setEmailEntered] = useState(false);
  
    const sendPasscode = async () => {
      try {
        const response = await axios.post('http://127.0.0.1:5000/auth/send_passcode', {
          email: email,
        });
        console.log('Passcode sent!', response.data);
      } catch (error) {
        console.error('Passcode error:', error);
      }
    };
  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
      e.preventDefault();
      if (!emailEntered && email !== '') {
        setEmailEntered(true);
        await sendPasscode();
      } else if (emailEntered && passcode !== '') {
        try {
          const response = await loginUser({ email, passcode });
          setToken(response);     
        } catch (error) {
          console.error('Login error:', error);
        }
      }
    };
  
    const onUsernameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
      const username = e.target.value;
      setEmail(username);
    };
  
    const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
      const password = e.target.value;
      setPasscode(password);
    };

    // console.log(token);
    
  
    return (
      <main className="VStack min-h-screen items-center">
        <div className="VStack gap-5 items-center pt-24">
          <p className="font-semibold text-3xl">FacePass Developer Account</p>
          <p>Manage your FacePass account</p>
          <div className="w-full">
            <form onSubmit={handleSubmit} className="VStack gap-5">
              <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                <Input
                  type="email"
                  label="Email"
                  value={email}
                  onChange={onUsernameChange}
                  disabled={emailEntered}
                />
              </div>
              {emailEntered && (
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                  <Input
                    type="password"
                    label="Passcode"
                    value={passcode}
                    onChange={onPasswordChange}
                  />
                </div>
              )}
              <div className="section-break"></div>
              <div className="w-full VStack items-center justify-center">
                <p className="text-xs text-blue-600 text-center HStack items-center">
                  Forgotten your passcode?
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-3 h-3"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </p>
              </div>
              <Button color="primary" type="submit">
                {emailEntered ? 'Sign In' : 'Continue'}
              </Button>
            </form>
          </div>
        </div>
      </main>
    );
  };
  
  SignInLayout.propTypes = {
    setToken: PropTypes.func.isRequired,
  };
  
  export default SignInLayout;
  