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
        <CloseButton onClick={onDismiss}>
          <Icon id='close' strokeWidth={2} />
          <VisuallyHidden>Dismiss modal</VisuallyHidden>
        </CloseButton>
        <Filler />
        <Nav>
          <NavLink href='/sale'>Sale</NavLink>
          <NavLink href='/new'>New&nbsp;Releases</NavLink>
          <NavLink href='/men'>Men</NavLink>
          <NavLink href='/women'>Women</NavLink>
          <NavLink href='/kids'>Kids</NavLink>
          <NavLink href='/collections'>Collections</NavLink>
        </Nav>
        <Footer>
          <a href='/terms'>Terms and Conditions</a>
          <a href='/privacy'>Privacy Policy</a>
          <a href='/contact'>Contact Us</a>
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
  width: 300px;
  padding: 32px;

  background: var(--color-white);
`

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0px;
  padding: 16px;
`

const Filler = styled.div`
  flex: 1;
`

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 7px;

  font-size: calc(18 / 16 * 1rem);
`

const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 2px;

  font-size: calc(14 / 16 * 1rem);

  a {
    display: block;
    text-decoration: none;
    line-height: 2;

    color: var(--color-gray-700);
    font-weight: var(--font-weight-normal);
  }
`

const NavLink = styled.a`
  display: block;
  text-decoration: none;
  line-height: 2;

  color: var(--color-gray-900);
  font-weight: var(--font-weight-medium);
  text-transform: uppercase;

  &:first-of-type {
    color: var(--color-secondary);
  }
`

export default MobileMenu
