import * as React from 'react';
import { load } from 'react-cookies';
import { useHistory } from 'estafette-router';

export const IndexEntry: React.FC = () => {
  const { push } = useHistory();

  React.useEffect(() => {
    push(load('jwt-token') ? 'EventsPage' : 'SessionsPage');
  }, []);

  return <span>Loading ..</span>;
};
