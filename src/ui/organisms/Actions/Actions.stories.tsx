import * as React from 'react';
import { Actions } from './Actions';

export default {
  title: 'Actions',
  component: Actions,
};

export const regular = (): React.ReactNode => <Actions onDelete={(): null => null} onEdit={(): null => null} />;
