import React, { useContext, useRef, useState, useEffect } from "react";
import ReactDOM from 'react-dom';

import "./EditModal.css";

const EditModalContext = React.createContext();

export function EditModalProvider({ children }) {
    const editModalRef = useRef();
    const [value, setValue] = useState();

    useEffect(() => {
        setValue(editModalRef.current);
    }, [])

    return (
        <>
            <EditModalContext.Provider value={value}>
                {children}
            </EditModalContext.Provider>
            <div ref={editModalRef} />
        </>
    )
}

export function EditModal({ onClose, children }) {
    const modalNode = useContext(EditModalContext);
    if (!modalNode) return null;

    return ReactDOM.createPortal(
      <div id="modal">
        <div id="modal-background" onClick={onClose} />
        <div id="modal-content">
          {children}
        </div>
      </div>,
      modalNode
    );
  }
