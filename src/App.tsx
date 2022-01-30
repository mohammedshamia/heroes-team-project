import { Suspense, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Helpers/Theme/index";
import { GlobalStyles } from "./Helpers/globalStyle";
import { Routes, Route, Navigate } from "react-router";
import SppinerLoading from "./Components/Elements/SppinerLoading/index";
import Header from "./Components/Header";
import useThemeMode from "./Hook/UseThemeMode";

//React Tostify
import { ToastContainer } from "react-toastify";
import { showToast } from "./Helpers/tools";
import "react-toastify/dist/ReactToastify.css";
import { clearSuccessErrorNotification } from "./Store/Slices/notifications";

import { RootState, useAppDispatch } from "./Store/configureStore";
import { useSelector } from "react-redux";

import routes from "./Helpers/Router";

//for Stripe
import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

function App() {
  const dispatch = useAppDispatch();
  const notifications = useSelector(
    (state: RootState) => state.entities.notifications
  );
  const [rule, setRule] = useState("");
  const { theme, ToggelTheme } = useThemeMode();
  let [stripePromise, setStripePromise] = useState<any>(null);
  const [ready, setReady] = useState(false);

  let data = useSelector((state: RootState) => state.entities.user);
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  useEffect(() => {
    const _rule = localStorage.getItem("rule");
    _rule && setRule(_rule as string);
    _rule && setReady(true);
  }, [ready, data.auth, data.data?.isAdmin]);

  useEffect(() => {
    if (ready) {
      if (data.auth && data.data?.isAdmin) {
        localStorage.setItem("rule", "admin");
        setRule("admin");
      }
      if (data.auth && !data.data?.isAdmin) {
        localStorage.setItem("rule", "customer");
        setRule("customer");
      }
    }

    axios
      .get(`${process.env.REACT_APP_DOMAINURL}config/stripe-key`)
      .then((response) => {
        setStripePromise(loadStripe(response.data.publishableKey));
      });
  }, [data, ready, rule]);

  useEffect(() => {
    if (notifications && notifications.error === true) {
      const msg = notifications.msg ? notifications.msg : "Error";
      showToast("ERROR", msg);
      dispatch(clearSuccessErrorNotification());
    }

    if (notifications && notifications.success === true) {
      const msg = notifications.msg ? notifications.msg : "Done!!!!";
      showToast("SUCCESS", msg);
      dispatch(clearSuccessErrorNotification());
    }
  }, [dispatch, notifications]);

  return (
    <div className="App">
      <ThemeProvider theme={themeMode}>
        <GlobalStyles {...themeMode} />
        {/* add header  */}
        <Header ToggelTheme={ToggelTheme} />
        <Elements stripe={stripePromise}>
          <Suspense fallback={<SppinerLoading />}>
            {/* pages */}
            {ready && (
              <Routes>
                {routes.map((route) =>
                  route?.ruleShouldBe?.includes(rule) ? (
                    <Route
                      path={route.route}
                      element={route.component}
                      key={route.name}
                    />
                  ) : (
                    <Route
                      path={route.route}
                      element={<Navigate to={route.to} />}
                      // element={route.component}
                      key={route.name}
                    />
                  )
                )}
              </Routes>
            )}
          </Suspense>
        </Elements>
      </ThemeProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
