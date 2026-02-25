import React, { useState } from "react";

const LoginForm = ({ setIsLoggedIn }) => {

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  return (
    <form onSubmit={handleLogin}>
      <div style={{ marginBottom: "10px" }}>
        <label>Username: </label>
        <input type="text" />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label>Password: </label>
        <input type="password" />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};


// Parent component
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h1>Parent Component</h1>
      {/*Conditional rendering based on isLoggedIn state */}
      {isLoggedIn ? (
        <p>You are logged in!</p>
      ) : (
        <LoginForm setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  )
}

export default App;