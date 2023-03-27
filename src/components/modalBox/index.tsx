import { FC, ReactElement, useEffect } from 'react'
import { useNavigate } from 'react-router'
import {Modal, useModal, Icon, COLORS } from 'web-components'
import { CloseButton } from './styles'

interface ModalProps {
  children: ReactElement
}

const ModalBox: FC<ModalProps> = ({children}) => {
  const { isShowing, toggle } = useModal()
  const navigate = useNavigate()
  useEffect(() => {
    toggle()
  }, [])

  const closeModal = () => {
    navigate('/')
    toggle()
  }
  return (
    <Modal isShowing={isShowing} hide={() => toggle()}>
      <>
        <CloseButton type='button' className='modal-close-button' data-dismiss='modal' aria-label='Close' onClick={() => closeModal()}>
        <Icon width={30} height={30} iconName='xCircle' fill={COLORS.PRIMARY} classes='' />
        </CloseButton>
        {children}
      </>
    </Modal>
  )
}

export default ModalBox
