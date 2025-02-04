(Due to technical issues, the search service is temporarily unavailable.)

Here's a simplified React.js project structure with Redux (vanilla) and login/signup functionality:

### 1. Project Setup
```bash
npx create-react-app auth-redux-app
cd auth-redux-app
npm install redux react-redux react-router-dom
```

### 2. Folder Structure
```
src/
├── actions/
│   └── authActions.js
├── reducers/
│   ├── authReducer.js
│   └── index.js
├── components/
│   ├── Login.js
│   ├── Signup.js
│   ├── Dashboard.js
│   └── Navbar.js
├── store.js
├── App.js
└── index.js
```

### 3. Redux Setup

**store.js**
```javascript
import { createStore, combineReducers } from 'redux';
import authReducer from './reducers/authReducer';

const rootReducer = combineReducers({
  auth: authReducer
});

const store = createStore(rootReducer);

export default store;
```

**actions/authActions.js**
```javascript
export const loginSuccess = (user) => ({
  type: 'LOGIN_SUCCESS',
  payload: user
});

export const signupSuccess = (user) => ({
  type: 'SIGNUP_SUCCESS',
  payload: user
});

export const logout = () => ({
  type: 'LOGOUT'
});

// Async action for login
export const login = (credentials) => (dispatch) => {
  // Mock API call
  return new Promise((resolve) => {
    setTimeout(() => {
      dispatch(loginSuccess({
        token: 'fake-jwt-token',
        user: { email: credentials.email }
      }));
      resolve();
    }, 1000);
  });
};
```

**reducers/authReducer.js**
```javascript
const initialState = {
  isAuthenticated: false,
  user: null,
  token: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
    case 'SIGNUP_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token
      };
    case 'LOGOUT':
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
```

### 4. Components

**components/Login.js**
```javascript
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../actions/authActions';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(login({ email, password }));
    navigate('/dashboard');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
```

**components/Signup.js** (similar structure to Login)

**components/Dashboard.js**
```javascript
import React from 'react';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const { user } = useSelector(state => state.auth);

  return (
    <div>
      <h1>Welcome {user?.email}</h1>
      {/* Protected content */}
    </div>
  );
};

export default Dashboard;
```

### 5. App Routing

**App.js**
```javascript
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import PrivateRoute from './PrivateRoute';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
```

**PrivateRoute.js**
```javascript
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useSelector(state => state.auth);

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
```

### 6. Run the Application
```bash
npm start
```

### Key Features:
1. Redux state management for authentication
2. Protected routes using React Router
3. Mock API calls for login/signup
4. Basic form handling
5. Authentication state persistence (add localStorage if needed)

To enhance this project:
1. Add form validation
2. Implement real API integration
3. Add error handling
4. Store JWT in localStorage/cookies
5. Add loading states
6. Style with CSS framework

This provides a foundation for building authentication flows with React and vanilla Redux. For production, consider using Redux Toolkit for better maintainability.
