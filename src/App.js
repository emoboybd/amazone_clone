import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import PageNotFound from "./components/UI/PageNotFound";
import Login from "./components/Login";
import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useStateValue } from "./components/StateProvider";
import Payment from "./components/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const promise = loadStripe(
  "pk_test_51Lx0a1SHhaEGKBwTeLgpDqfuEyskTmWCwKKqR1CKipu2QpC94SccqcD4kJX7yxu8uxj5JwKw3rHOVueA3v0YwTvc00309PBUUa"
);

function App() {
  const [state, dispatch] = useStateValue();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        // authUser is signed in, see docs for a list of available properties
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route
          path="/home"
          element={
            <div>
              <Header />
              <Home />
            </div>
          }
        />
        <Route
          path="/checkout"
          element={
            <div>
              <Header />
              <Checkout />
            </div>
          }
        />
        <Route
          path="/payment"
          element={
            <div>
              <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
