import React, { useState } from 'react';
import LoginScreen from './components/LoginScreen';
import RegisterScreen from './components/RegisterScreen';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  const switchToRegister = () => {
    setIsLogin(false);
  };

  const switchToLogin = () => {
    setIsLogin(true);
  };

  return (
    <div className="App">
      {isLogin ? (
        <LoginScreen switchToSignup={switchToRegister} />
      ) : (
        <RegisterScreen switchToLogin={switchToLogin} />
      )}
    </div>
  
  );
}

export default App;
