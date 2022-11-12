import React from 'react';
import {useParams} from "react-router";

const TheTheme = () => {

    const { id } = useParams()
    return (
        <div>
            <button onClick={() => {
                window.history.go(-1)
            }} className="d-flex justify-content-end btn btn-close"></button>
            <div className="theme">
                <div>
                        <h2 className="title text-start"> {id}. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
                            rerum?</h2>
                </div>
            </div>

            <div className="messages">
                <div className="message">
                    <h2 className="theme__author">Lorem ipsum.</h2>
                    <h2 className="theme__date">20.04.2003 :</h2>

                    <p className="message__text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam animi atque aut culpa cumque delectus eos, error est et eveniet facilis in ipsa laudantium magnam nulla odio quas quisquam quod ratione reiciendis vel!
                    </p>
                </div>
                <div className="message">
                    <h2 className="theme__author">Lorem ipsum.</h2>
                    <h2 className="theme__date">20.04.2003 :</h2>

                    <p className="message__text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam animi atque aut culpa cumque delectus eos, error est et eveniet facilis in ipsa laudantium magnam nulla odio quas quisquam quod ratione reiciendis vel!
                    </p>
                </div>
                <div className="message">
                    <h2 className="theme__author">Lorem ipsum.</h2>
                    <h2 className="theme__date">20.04.2003 :</h2>

                    <p className="message__text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam animi atque aut culpa cumque delectus eos, error est et eveniet facilis in ipsa laudantium magnam nulla odio quas quisquam quod ratione reiciendis vel!
                    </p>
                </div>
                <div className="message">
                    <h2 className="theme__author">Lorem ipsum.</h2>
                    <h2 className="theme__date">20.04.2003 :</h2>

                    <p className="message__text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam animi atque aut culpa cumque delectus eos, error est et eveniet facilis in ipsa laudantium magnam nulla odio quas quisquam quod ratione reiciendis vel!
                    </p>
                </div>
            </div>


            <div className="form-group">
                <b>
                    <label htmlFor="exampleFormControlInput2">Новое сообщение</label>
                </b>
                <textarea  className="form-control" id="exampleFormControlInput2"
                           placeholder="Введите сообщение"/>
            </div>
        </div>
    );
};

export default TheTheme;
