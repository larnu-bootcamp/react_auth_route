import { useEffect } from 'react';
import LoginForm from './components/LoginForm';
import Welcome from './components/Welcome';
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
} from "react-router-dom";
import './App.css';
import RequireAuth from './components/RequiredAuth';
import AuthProvider from './contexts/AuthContext';

function App() {

  const baseUrl = 'https://ms-discord-upy5mhs63a-rj.a.run.app';


  // async function checkToken() {
  //   const token = localStorage.getItem('token');
  //   if (!token) {
  //     return;
  //   }
  //   axios.get(`${baseUrl}/auth/check`, {
  //     headers: {
  //       Authorization: `Bearer ${token}`
  //     }
  //   }).then(res => {
  //     setLogged(true);
  //   }).catch(err => {
  //     console.log(err);
  //     localStorage.removeItem('token');
  //   });
  // }

  useEffect(()  => {
    // checkear si existe un token en el localStorage
    // si no existe, mostrar formulario de login
    // checkear si ese token es valido (endpoint check)
    // si es valido, setear logged a true
    // si no es valido, eliminar token de localStorage mostrar formulario de login
    // checkToken();
  });

  // function login() {
  //   axios.post(`${baseUrl}/auth/login`, values)
  //     .then(res => res.data.token)
  //     .then(token => {
  //       localStorage.setItem('token', token);
  //       console.log(token)
  //       setLogged(true);
  //     });
  // }


  return (
    <div className="App">
      <AuthProvider>
        {/* {navbar} */}
        <Routes>
          <Route path='/' element={
            <RequireAuth>
              <Welcome />
            </RequireAuth>
          }
          />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}
export default App;


//ejemplo web
// import * as React from "react";
// import {
//   Routes,
//   Route,
//   Link,
//   useNavigate,
//   useLocation,
//   Navigate,
//   Outlet,
// } from "react-router-dom";
// import AuthService from "./services/authService";

// export default function App() {
//   return (
//     <AuthProvider>
//       <h1>Auth Example</h1>

//       <p>
//         This example demonstrates a simple login flow with three pages: a public
//         page, a protected page, and a login page. In order to see the protected
//         page, you must first login. Pretty standard stuff.
//       </p>

//       <p>
//         First, visit the public page. Then, visit the protected page. You're not
//         yet logged in, so you are redirected to the login page. After you login,
//         you are redirected back to the protected page.
//       </p>

//       <p>
//         Notice the URL change each time. If you click the back button at this
//         point, would you expect to go back to the login page? No! You're already
//         logged in. Try it out, and you'll see you go back to the page you
//         visited just *before* logging in, the public page.
//       </p>

//       <Routes>
//         <Route element={<Layout />}>
//           <Route path="/" element={<PublicPage />} />
//           <Route path="/login" element={<LoginPage />} />
//           <Route
//             path="/protected"
//             element={
//               <RequireAuth>
//                 <ProtectedPage />
//               </RequireAuth>
//             }
//           />
//         </Route>
//       </Routes>
//     </AuthProvider>
//   );
// }
// function Layout() {
//   return (
//     <div>
//       <AuthStatus />

//       <ul>
//         <li>
//           <Link to="/">Public Page</Link>
//         </li>
//         <li>
//           <Link to="/protected">Protected Page</Link>
//         </li>
//       </ul>

//       <Outlet />
//     </div>
//   );
// }

// const AuthContext = React.createContext();

// function AuthProvider({ children }) {
//   let [logged, setLogged] = React.useState(false);
//   //const authService = new AuthService();
//   const signin = async (payload, callback) => {
//     setLogged(true);
//   };

//   let signout = (callback) => {
//     localStorage.removeItem('token');
//     setLogged(false);
//     callback();
//   };

//   let value = { logged, signin, signout };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// }

// function useAuth() {
//   return React.useContext(AuthContext);

// }

// function AuthStatus() {
//   let auth = useAuth();
//   let navigate = useNavigate();

//   if (!auth.user) {
//     return <p>You are not logged in.</p>;
//   }

//   return (
//     <p>
//       Welcome {auth.user}!{" "}
//       <button
//         onClick={() => {
//           auth.signout(() => navigate("/"));
//         }}
//       >
//         Sign out
//       </button>
//     </p>
//   );
// }

// function RequireAuth({ children }) {
//   let auth = useAuth();
//   let location = useLocation();

//   if (!auth.user) {
//     // Redirect them to the /login page, but save the current location they were
//     // trying to go to when they were redirected. This allows us to send them
//     // along to that page after they login, which is a nicer user experience
//     // than dropping them off on the home page.
//     return <Navigate to="/login" state={{ from: location }} replace />;
//   }

//   return children;
// }

// function LoginPage() {
//   let navigate = useNavigate();
//   let location = useLocation();
//   let auth = useAuth();

//   let from = location.state?.from?.pathname || "/";

//   function handleSubmit(event) {
//     event.preventDefault();

//     let formData = new FormData(event.currentTarget);
//     let username = formData.get("username");

//     auth.signin(username, () => {
//       // Send them back to the page they tried to visit when they were
//       // redirected to the login page. Use { replace: true } so we don't create
//       // another entry in the history stack for the login page.  This means that
//       // when they get to the protected page and click the back button, they
//       // won't end up back on the login page, which is also really nice for the
//       // user experience.
//       navigate(from, { replace: true });
//     });
//   }

//   return (
//     <div>
//       <p>You must log in to view the page at {from}</p>

//       <form onSubmit={handleSubmit}>
//         <label>
//           Username: <input name="username" type="text" />
//         </label>{" "}
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

// function PublicPage() {
//   return <h3>Public</h3>;
// }

// function ProtectedPage() {
//   return <h3>Protected</h3>;
// }
