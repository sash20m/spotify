import * as React from 'react';
import { Registration } from 'features/public/templates';
import { Public } from 'features/public/organisms';
import { Content } from 'features/public/atoms';

export default (): React.ReactElement => {
  return (
    <Public>
      <Content className="container">
        <Registration />
      </Content>
    </Public>
  );
};
