"use client";

import React, { useState, useCallback } from "react";

interface ModalProps {
  header?: React.ReactNode;
  content: React.ReactNode;
  footer?: React.ReactNode;
  onClose: () => void;
}

const useModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [modalProps, setModalProps] = useState<ModalProps | null>(null);

  const openModal = useCallback((props: ModalProps) => {
    setIsVisible(true);
    setModalProps(props);
  }, []);

  const closeModal = useCallback(() => {
    setIsVisible(false);
    setModalProps(null);
  }, []);

  const Modal =
    isVisible && modalProps ? (
      <div className='fixed inset-0 flex items-center justify-center z-40 shadow-2xl'>
        <div className='fixed inset-0 bg-black opacity-70'></div>
        <div className='bg-white p-4 rounded shadow-lg z-50 mx-5'>
          {modalProps.header && <div className='p-2'>{modalProps.header}</div>}
          <div className='p-2'>{modalProps.content}</div>
          {modalProps.footer && <div className=' p-2'>{modalProps.footer}</div>}
        </div>
      </div>
    ) : null;

  return { Modal, openModal, closeModal };
};

export default useModal;
