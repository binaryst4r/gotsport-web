import React from "react";
import ReactModal from "react-modal"
import {XCircleIcon} from '@heroicons/react/24/solid'

type Props = {
  children: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>

type ModalProps = {
  variant?: React.ReactNode
  children: React.ReactNode
  isOpen: boolean
  onRequestClose?: () => void
} & React.HTMLAttributes<HTMLDivElement>

export const Container = ({children, ...rest}: Props) => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full" {...rest}>
      <div className="mx-auto max-w-full h-full">
        {children}
      </div>
    </div>
  )
}

export const Well = ({children, ...rest}: Props) => {
  return (
    <div {...rest} className="overflow-hidden rounded-lg bg-mono-white">
      <div className="px-4 py-5 sm:p-6">
        {children}
      </div>
    </div>
  )
}

const modalVariantColors = {
  default: '',
  success: '',
  error: '',
  warning: ''
}
export const Modal = ({children, variant = modalVariantColors['default'], isOpen, onRequestClose}: ModalProps) => {
  const closeIconStyle = {
    width: '32px;',
    height: '32px',
    cursor: 'pointer'
  }

  const overlayStyle = {
    backgroundColor: 'rgba(0,0,0, 0.75)'
  }
  return (
    <ReactModal
      style={{
        overlay: overlayStyle
      }}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick={true}
      isOpen={isOpen}
    >
      <div className="flex justify-end">
        <XCircleIcon style={closeIconStyle} onClick={onRequestClose} />
      </div>
      {children}
    </ReactModal>
  )
}



