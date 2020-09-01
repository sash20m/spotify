import * as React from 'react';
import { Public } from 'features/public/organisms';
import { Login } from 'features/public/templates';
import { Content } from 'features/public/atoms';

export default (): React.ReactElement => {
  return (
    <Public>
      <Content className="container mini">
        <Login />
      </Content>
    </Public>
  );
};
