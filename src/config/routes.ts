import {
    Home as HomeIcon,
    CollectionsOutlined as GalleryIcon,
    CodeOutlined as CodeIcon,
    GitHub as GitHubIcon,
    Public as PublicIcon,
    AccountBoxRounded as UserIcon,
    SettingsOutlined as SettingsIcon,
    ListAlt as ListIcon,
    CreditCard as BillingIcon,
  } from '@material-ui/icons';
  
  import { Home } from '../pages/Home';
  import { Route } from '../types/Route';
  
  const routes: Array<Route> = [
    {
      key: 'router-home',
      title: 'Home',
      description: 'Home',
      component: Home,
      path: '/',
      isEnabled: true,
      icon: HomeIcon,
      appendDivider: true,
    },
    {
      key: 'router-gallery',
      title: 'Gallery',
      description: 'Gallery',
      path: '/gallery',
      isEnabled: true,
      icon: GalleryIcon,
    },
    {
      key: 'router-gh',
      title: 'GitHub',
      description: 'GitHub',
      isEnabled: true,
      icon: GitHubIcon,
      subRoutes: [
        {
          key: 'router-gh-public',
          title: 'Public Repos',
          description: 'Public Repos',
          path: '/gh/public',
          isEnabled: true,
          icon: PublicIcon,
        },
        {
          key: 'router-gh-private',
          title: 'Private Repos',
          description: 'Private Repos',
          path: '/gh/private',
          isEnabled: false,
          icon: PublicIcon,
        },
      ],
    },
    {
      key: 'router-code',
      title: 'Code Editor',
      description: 'Code Editor',
      path: '/code-editor',
      isEnabled: true,
      icon: CodeIcon,
      appendDivider: true,
    },
    {
      key: 'router-my-account',
      title: 'My Account',
      description: 'My Account',
      path: '/account',
      isEnabled: true,
      icon: UserIcon,
      subRoutes: [
        {
          key: 'router-settings',
          title: 'Settings',
          description: 'Account Settings',
          path: '/account/settings',
          isEnabled: true,
          icon: SettingsIcon,
        },
        {
          key: 'router-preferences',
          title: 'Preferences',
          description: 'Account Preferences',
          path: '/account/preferences',
          isEnabled: true,
          icon: ListIcon,
        },
        {
          key: 'router-billing',
          title: 'Billing',
          description: 'Account Billing',
          path: '/account/billing',
          isEnabled: true,
          icon: BillingIcon,
        },
      ],
    },
  ];
  
  export default routes;