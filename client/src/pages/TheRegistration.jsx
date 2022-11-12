import React, {useState} from 'react';
import {useHttp} from "../hooks/http.hook.js";

const TheRegistration = () => {
    const [form, setForm] = useState({
        username: "",
        password: "",
        passwordCopy: "",
    })

    const {loading, error, request} = useHttp()


    const registration = async () => {
        try{
            if(form.password === form.passwordCopy){
                const data = await request("/api/register", 'POST', {...form} )
            } else {
                console.log("Пароли не совпадают...")
            }
        }
        catch (e){}
    }

    function changeUsername(){
            setForm(form.username)
    }

    function changePassword(){
        setForm(form.password)
    }

    function changePasswordCopy(){
        setForm(form.passwordCopy)
    }

    return (
        <div className="container">
            <div className="row">

                <h1 className="title">Регистрация</h1>

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
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword2" className="form-label">Повтор пароля</label>
                        <input type="password"  placeholder="Повторите пароль"  className="form-control" id="exampleInputPassword2"
                            onChange={changePasswordCopy}
                        />
                    </div>

                    <button type="submit" className="btn btn-success fw-bolder">Зарегистрироваться</button>
                    <button onClick={(e) => {
                        e.preventDefault()
                        window.location.href="/login"
                    }}  type="submit" className="btn btn-danger fw-bolder">Войти</button>

                </form>
            </div>
        </div>
    );
};

export default TheRegistration;
