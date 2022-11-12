import React, {useState} from 'react'
import {useHttp} from "../hooks/http.hook";

export const LoginPage = () => {

    const {loading, error, request} = useHttp()


    // const [form, setForm] = useState({
    //     username: "",
    //     password: ""
    // })


    const {username, setUsername} = useState("")
    const {password, setPassword} = useState("")

    function changeUsername(){
        if (username !== "") {
            setUsername(username)
            console.log(username)
        }
    }

    function changePassword(){
        setPassword(password)
    }


    const registration = async () => {
        try{
            const data = await request("/api/register", 'POST', {} )
        }
        catch (e){}
    }

    return (
        <div className="container">
            <div className="row">

                <h1 className="title">Авторизация</h1>

                <form className="form col-lg-6">
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1"className="form-label">Имя пользователя</label>
                        <input type="username"  placeholder="Введите имя"  className="form-control" id="exampleInputEmail1"
                               onChange={changeUsername}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Пароль</label>
                        <input type="password"  placeholder="Введите пароль"  className="form-control" id="exampleInputPassword1"
                               onChange={changePassword}
                        />
                        {/*<div  className="form-text">Мин. 6 символов</div>*/}
                    </div>
                    <button onClick={(e) => {
                        e.preventDefault()

                    }} type="submit" className="btn btn-danger fw-bolder">Войти</button>
                    <button onClick={(e) => {
                        e.preventDefault()
                        window.location.href="/login/registration"
                    }} type="submit" className="btn btn-success fw-bolder">Регистрация</button>
                </form>
            </div>
        </div>
    )
}
