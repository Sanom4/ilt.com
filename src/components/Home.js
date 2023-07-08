import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import { useAuth } from '../components/User/AuthContext';

Modal.setAppElement('#root'); // Set the root element for the modal

const Home = () => {
  const [password, setPassword] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if the password is correct (assuming the answer is "lilac")
    if (password.toLowerCase() === 'lilac') {
      // Redirect the user to a new page (you can replace "/success" with the desired URL)
      login(); // Perform the login action
      navigate('/love');
    } else {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-base font-bold mb-4 Comfortaa p-4">
        I am a flower, vibrant and bright, <br />
        In shades of purple, a lovely sight. <br />
        My scent is sweet, my petals divine, <br />
        Guess my name, it's time to shine. <br />
        <br />
        <p className="text-center bg-black text-lilac Fasthand text-3xl"> What am I?</p>
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          className="border border-gray-300 rounded-md Comfortaa px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Answer in English"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="bg-purple-500 Comfortaa text-white rounded-md px-4 py-2 mt-4 button-lilac"
        >
          Answer
        </button>
      </form>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="modal fixed inset-0 flex items-center justify-center z-50"
        overlayClassName="modal-overlay fixed inset-0 bg-gray-500 bg-opacity-75"
        contentLabel="Incorrect Password"
      >
        <div className="modal-content bg-white p-4 max-w-sm mx-auto rounded shadow">
          <h2 className="text-xl font-bold mb-4 Comfortaa">Its purple and flower the riddle is the answer.</h2>
          <p className='Fasthand'>Your answer is incorrect.</p>
          <button
            className="bg-purple-500 text-white rounded-md px-4 py-2 mt-4 button-lilac Comfortaa"
            onClick={closeModal}
          >
            To the form
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Home;
