import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const notify = () => toast.success("On click function success")
  const notifyRight = () => toast.info("This toastify is implemented in the function, not as a prop",{
    position: "top-right",
    theme:"colored",
    pauseOnHover: false,
    autoClose: 6000,
    hideProgressBar: false
  })
  return (
    <>
      <h1>Toast Notifications With React</h1>
      <button onClick={notify}>Show Notification</button>
      <button onClick={notifyRight}>Notify props in function, not as props on element</button>
      <ToastContainer />
    </>
  )
}

export default App
