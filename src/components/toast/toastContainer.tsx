import { ToastContainer as Toast } from 'react-toastify';

export default function ToastContainer() {
  return (
    <Toast
      position="top-right"
      autoClose={3000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  );
}
