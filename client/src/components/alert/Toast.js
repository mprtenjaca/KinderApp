import React from 'react'

const Toast = ({msg, handleShow, bgColor}) => {
    return (
        <div id="toast" className={`toast show position-fixed text-light ${bgColor}`}
            style={{top: '5px', right: '5px', minWidth: '150px', zIndex: 50}}
            role="alert" aria-live="assertive" aria-atomic="true">

            <div className={`toast-header text-light ${bgColor}`}>
                <strong className="me-auto">{msg.title}</strong>
                <button type="button" className="btn-close text-light" data-bs-dismiss="toast" aria-label="Close" onClick={handleShow}></button>
            </div>
            <div className="toast-body">
                {msg.body}
            </div>
        </div>
    )
}

export default Toast
