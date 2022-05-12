/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components/macro'
import { DialogOverlay, DialogContent } from '@reach/dialog'

import UnstyledButton from '../UnstyledButton'
import Icon from '../Icon'
import VisuallyHidden from '../VisuallyHidden'

const MobileMenu = ({ title, isOpen, onDismiss }) => {
  if (!isOpen) {
    return null
  }

  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label={title}>
        <ButtonWrapper>
          <UnstyledButton>
            <Icon id='close' strokeWidth={2} onClick={onDismiss} />
          </UnstyledButton>
        </ButtonWrapper>
        <VisuallyHidden>Dismiss modal</VisuallyHidden>
        <Nav>
          <Link href='/sale'>Sale</Link>
          <Link href='/new'>New&nbsp;Releases</Link>
          <Link href='/men'>Men</Link>
          <Link href='/women'>Women</Link>
          <Link href='/kids'>Kids</Link>
          <Link href='/collections'>Collections</Link>
        </Nav>
        <Footer>
          <Link href='/terms'>Terms and Conditions</Link>
          <Link href='/privacy'>Privacy Policy</Link>
          <Link href='/contact'>Contact Us</Link>
        </Footer>
      </Content>
    </Overlay>
  )
}

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-backdrop);
  display: flex;
  justify-content: flex-end;
`

const Content = styled(DialogContent)`
  position: relative;
  right: 0px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 80%;
  padding: 32px 22px 32px 32px;

  background: var(--color-white);
`

const ButtonWrapper = styled.div`
  align-self: flex-end;
`

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 7px;

  font-size: calc(18 / 16 * 1rem);

  a {
    color: var(--color-gray-900);
    font-weight: var(--font-weight-medium);
    text-transform: uppercase;
  }
`

const Footer = styled.footer`
  font-size: calc(14 / 16 * 1rem);

  a {
    color: var(--color-gray-700);
    font-weight: var(--font-weight-normal);
  }
`

const Link = styled.a`
  display: block;
  text-decoration: none;
  line-height: 2;
`

export default MobileMenu
