import { useState } from 'react';
import Snackbar from '../components/ui/SnackBar';
import { buttonVariants } from '../components/ui/button';
function Home() {
  const [snackbar, setSnackbar] = useState({ show: false, message: '', type: '' });

  const showSnackbar = (message, type) => {
    setSnackbar({ show: true, message, type });
    setTimeout(() => {
      setSnackbar({ show: false, message: '', type: '' });
    }, 4000); 
  };
  return (
    <section className="">
      <button className={buttonVariants("outline","small")} onClick={() => showSnackbar('This is a success message!', 'success')}>
        Show Success Snackbar
      </button>
      <button className={buttonVariants("outline", "small")} onClick={() => showSnackbar('This is an error message!', 'error')}>
        Show Error Snackbar
      </button>

      <Snackbar
        message={snackbar.message}
        type={snackbar.type}
        show={snackbar.show}
        onClose={() => setSnackbar({ ...snackbar, show: false })}
      />
      
      
    </section>
  )
}

export default Home
