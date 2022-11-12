import React from 'react';

const MainPage = () => {
    return (
        <div>
            <h1 className="title">Форум</h1>


            <center>
                <input placeholder="Поиск" className="input" type="text"/>
                <button className="search">🔎</button>
            </center>


            <div>
                <center>
                    <button onClick={() => {
                        window.location = "/create"
                    }} className="btn btn-dark btn-lg">Создать новую тему!</button>
                </center>
            </div>


            <div className="themesList">
                <div className="theme">
                    <div>
                        <a className="link-dark" href="/themes/1">
                            <h2 className="theme__title">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
                                rerum?</h2>
                        </a>
                    </div>
                    <div>
                        <h2 className="theme__author">Lorem ipsum.</h2>
                        <h2 className="theme__date">20.04.2003</h2>
                    </div>
                </div>
                <div className="theme">
                    <div>
                        <a className="link-dark" href="/themes/1">
                            <h2 className="theme__title">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
                                rerum?</h2>
                        </a>
                    </div>
                    <div>
                        <h2 className="theme__author">Lorem ipsum.</h2>
                        <h2 className="theme__date">20.04.2003</h2>
                    </div>
                </div>
                <div className="theme">
                    <div>
                        <a className="link-dark" href="/themes/1">
                            <h2 className="theme__title">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
                                rerum?</h2>
                        </a>
                    </div>
                    <div>
                        <h2 className="theme__author">Lorem ipsum.</h2>
                        <h2 className="theme__date">20.04.2003</h2>
                    </div>
                </div>
                <div className="theme">
                    <div>
                        <a className="link-dark" href="/themes/1">
                            <h2 className="theme__title">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
                                rerum?</h2>
                        </a>
                    </div>
                    <div>
                        <h2 className="theme__author">Lorem ipsum.</h2>
                        <h2 className="theme__date">20.04.2003</h2>
                    </div>
                </div>
                <div className="theme">
                    <div>
                        <a className="link-dark" href="/themes/1">
                            <h2 className="theme__title">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
                                rerum?</h2>
                        </a>
                    </div>
                    <div>
                        <h2 className="theme__author">Lorem ipsum.</h2>
                        <h2 className="theme__date">20.04.2003</h2>
                    </div>
                </div>
                <div className="theme">
                    <div>
                        <a className="link-dark" href="/themes/1">
                            <h2 className="theme__title">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
                                rerum?</h2>
                        </a>
                    </div>
                    <div>
                        <h2 className="theme__author">Lorem ipsum.</h2>
                        <h2 className="theme__date">20.04.2003</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;
