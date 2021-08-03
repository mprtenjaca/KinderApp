import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Loading from './Loading';
import Toast from './Toast';

const Notify = () => {
    const { notify } = useSelector(state => state)

    console.log(notify)
    return (
        <div>
            {
                notify.error &&
                <Toast msg={{title: 'Error', body: notify.error}}
                handleShow=""
                bgColor="bg-danger" />
            }

            {
                notify.success &&
                <Toast msg={{title: 'Success', body: notify.success}}
                handleShow=""
                bgColor="bg-success" />
            }
        </div>
    )
}

export default Notify;
