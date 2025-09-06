'use client';

import { useState } from 'react';
import BookingModal from './BookingModal';

interface BookCallButtonProps {
  className?: string;
  children: React.ReactNode;
}

export default function BookCallButton({ className, children }: BookCallButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
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
