import {
  HeaderContainer,
  HeaderContent,
  NewTransactionButton,
} from './Header.styles'
import * as Dialog from '@radix-ui/react-dialog'

import logo from '../../assets/Logo.svg'
import { NewTransactionModal } from '../NewTransactionModal/NewTransactionModal'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
