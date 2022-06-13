import styled from '@emotion/styled';
import React, { FunctionComponent } from 'react';
import ReactDOM from 'react-dom';
import { CloseRounded } from '@material-ui/icons'
import './index.css'
import { Icon, useTheme } from '@mui/material';
import { DARK_MODE_THEME } from '../../../utils/constants';

// Code inspired by https://nainacodes.com/blog/create-an-accessible-and-reusable-react-modal
export interface PopupProps {
  isShown: boolean;
  hide: () => void;
  modalContent: JSX.Element;
  headerText: string;
}


export const Popup: FunctionComponent<PopupProps> = ({
  isShown,
  hide,
  modalContent,
  headerText,
}) => {
  const theme = useTheme();


  function onHidePopup() {
    hide();
    const div = document.getElementById('popup-wrapper') as HTMLDivElement;
    div.setAttribute('class', 'fade-out');
  }

  const popup = (
    <React.Fragment>
      <Backdrop />
      <div id='popup-wrapper' className='fade-in'>
        <StyledModal style={{ 'backgroundColor': theme.palette.background.default, 'border': theme.palette.mode === DARK_MODE_THEME ? 'solid 1px' : '' }}>
          <Header>
            <HeaderText>{headerText}</HeaderText>
            <CloseButton onClick={onHidePopup}>
              <Icon component={CloseRounded} />
            </CloseButton>
          </Header>
          <Content>{modalContent}</Content>
        </StyledModal>
      </div>
    </React.Fragment>
  );

  const root = document.getElementById('root') as HTMLElement;
  return isShown ? ReactDOM.createPortal(popup, root) : null;
};


const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 500;
`;


const StyledModal = styled.div`
  z-index: 100;
  position: relative;
  margin: auto;
  border-radius: 8px;
`;


const Header = styled.div`
  font-weight: bold;
  border-radius: 8px 8px 0 0;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;


const HeaderText = styled.div`
  align-self: center;
`;


const CloseButton = styled.button`
  font-size: 0.8rem;
  border: none;
  border-radius: 3px;
  margin-left: 0.5rem;
  :hover {
    cursor: pointer;
  }
  background-color: inherit;
  color: inherit;
`;


const Content = styled.div`
  padding: 10px;
  max-height: 30rem;
  overflow-x: hidden;
  overflow-y: auto;
`;
