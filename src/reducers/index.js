import { combineReducers } from "redux";

// import auth from "./data/auth";
import errors from "./errors";
import friends from "./data/friends";
import routes from "./data/routes";
import runs from "./data/runs";

import mapping from "./ui/mapping";

export default combineReducers({
    // Data Reducers
    // auth,
    errors,
    friends,
    routes,
    runs,

    // UI Reducers
    mapping
});