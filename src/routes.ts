import { IndexEntry } from 'ui/organisms/IndexEntry';

export const routes = [
  // prettier-ignore
  { name: 'IndexEntry', path: '/', exact: true, component: IndexEntry },

  /* Public Pages */
  { name: 'SessionsPage', path: '/public', component: SessionsPage, exact: true },
  { name: 'SignInPage', path: '/public/sign-in', component: SignInPage },
  { name: 'SignUpPage', path: '/public/sign-up', component: SignUpPage },
];
