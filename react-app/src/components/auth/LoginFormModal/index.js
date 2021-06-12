// import LoginForm from './LoginForm';

// export default LoginForm;

import React, {useState} from "react";
import { UserModal } from '../../../context/UserModal' ;
import LoginForm from "./LoginForm";



const UserLoginModal = () => {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <button onClick={() => setShowModal(true)}>LOGIN</button>
            {showModal && (
                <UserModal onClose={() => setShowModal(false)}>
                    <LoginForm />
                </UserModal>
            )}
        </>
    )
}

export default UserLoginModal;
