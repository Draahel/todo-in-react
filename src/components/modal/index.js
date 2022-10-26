import ReactDOM from 'react-dom';
import './modal.css'
export function Modal({ children }) {
    return ReactDOM.createPortal(
        <div className='modal-back'>
            {children}
        </div>,
        document.getElementById('modal')
    );
}