import React from 'react'
import {Routes , Route, Navigate} from 'react-router'
import MainPage from "./pages/MainPage";
import CreateTheme from "./pages/CreateTheme";
import TheTheme from "./pages/TheTheme";
import {LoginPage} from "./pages/LoginPage";
import TheRegistration from "./pages/TheRegistration";

export const useRoutes = (isAuth) => {
    if (isAuth){
        return (
            <Routes>
                <Route path="/" exact element={<MainPage/>}></Route>
                <Route path="/create" exact element={<CreateTheme/>}></Route>
                <Route path="/themes/:id" element={<TheTheme/>}></Route>
                {/*<Navigate  to="/" element={<MainPage/>}></Navigate >*/}
                <Route
                    path="*"
                    element={<Navigate to="/" replace />}
                />
            </Routes>
         )
    } else {
        return (
            <Routes>
                <Route path='/login' element={<LoginPage/>}></Route>
                <Route path='/login/registration' element={<TheRegistration/>}></Route>
                {/*<Navigate  to="/" element={<LoginPage/>}></Navigate >*/}
                <Route
                    path="*"
                    element={<Navigate to="/login" replace />}
                />
            </Routes>
        )
    }
}
