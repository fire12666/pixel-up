import { styled, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { APP_TITLE } from '../../../../utils/constants';

export const AppTitle = () => {
  const navigate = useNavigate()

  function handleClick() {
    navigate('/')
  }

  return (
    <StyledAppTitle variant="h6" noWrap onClick={handleClick}>
      {APP_TITLE}
    </StyledAppTitle>
  )
};

const StyledAppTitle = styled(Typography)`
  display: {
    xs: none;
    sm: block;
  }
  cursor: pointer;
`;