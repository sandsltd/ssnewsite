'use client';

import { useState } from 'react';
import BookingModal from './BookingModal';

interface BookCallButtonProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export default function BookCallButton({ className, children, onClick }: BookCallButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    if (onClick) onClick(); // Call additional onClick if provided
  };
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <button
        onClick={openModal}
        className={className}
      >
        {children}
      </button>
      
      <BookingModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </>
  );
}
