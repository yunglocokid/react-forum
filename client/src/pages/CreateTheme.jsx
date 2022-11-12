import React from 'react';

const CreateTheme = () => {
    return (
        <div>
            <h1 className="title">Создать тему</h1>

            <div className="form-group">
                <b>
                    <label htmlFor="exampleFormControlInput1">Тема</label>
                </b>
                <input type="text" className="form-control" id="exampleFormControlInput1"
                       placeholder="Название темы"/>
            </div>

            <div className="form-group">
                <b>
                    <label htmlFor="exampleFormControlInput2">Первое Сообщение</label>
                </b>
                <textarea  className="form-control" id="exampleFormControlInput2"
                       placeholder="Название темы"/>
            </div>

            <div className="d-flex justify-content-end m-2">
                <button onClick={() => {
                    window.history.go(-1)
                }} className="btn btn-danger m-2">Отмена</button>
                <button className="btn btn-success m-2">Создать</button>
            </div>
        </div>
    );
};

export default CreateTheme;
