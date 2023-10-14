import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "redux/userSlice/selector";

function withAuthRedirect(Component, NavigateTo) {
    return function WithAuthRedirect(props) {
        const isLoggedIn = useSelector(selectIsLoggedIn);
        return isLoggedIn ? <Component {...props} /> : <Navigate to={NavigateTo} />;
    };
}

export default withAuthRedirect;
