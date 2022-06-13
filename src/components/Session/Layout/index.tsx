import { FC, useState } from 'react';
import { styled, Box } from '@mui/material';

import { Navigation } from '../Navigation';
import { Header } from '../Header';

type Props = {
  children: React.ReactNode
}

export const Layout: React.FC<Props> = ({children}: Props) => {
  const [open, setOpen] = useState(false);
  const toggleNavigation = () => setOpen((status) => !status);

  return (
    <LayoutWrapper>
      <ContentWrapper>
        <Box component="header">
          <Header toggleNavigation={toggleNavigation} />
        </Box>
        <Navigation open={open} handleClose={toggleNavigation} />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          {children}
        </Box>
      </ContentWrapper>
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled('div')`
  min-height: 100vh;
`;

const ContentWrapper = styled('div')`
  display: flex;
  min-height: calc(100vh - ${23}px);
`;

const DrawerHeader = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));