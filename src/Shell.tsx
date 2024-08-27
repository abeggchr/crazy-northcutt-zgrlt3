import "./App.css";
import { Outlet } from "react-router-dom";

export function Shell() {
    return (
        <>
            <button type='button'>Shell</button>
            <br />
            <br />
            <Outlet />
        </>);
}