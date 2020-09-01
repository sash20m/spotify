import * as React from 'react';
import { Roadmap } from 'ui/organisms';
import { AvatarCard, Calendar } from 'ui/atoms';

import './Announcements.scss';

export const Announcements: React.FC = () => (
  <Roadmap
    className="zh-announcement"
    data={[
      {
        target: 'Iunie 2020',
        children: (
          <div className="zh-announcement-items">
            <div className="zh-announcement-calendar">
              <Calendar date="2018-08-17T07:55:59.291461Z" type="date" />
            </div>

            <div className="zh-announcement-right">
              <div className="zh-announcement-item-title">Anunț</div>

              <div className="zh-announcement-item-content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat ... nulla ... pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
                quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
                sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
              </div>

              <div className="zh-announcement-item-addressed">
                <div className="zh-announcement-item-addressed-title">Adresat pentru</div>

                <div className="zh-announcement-item-addressed-items">
                  <AvatarCard alt="Wladimir Zhosan" />
                  <AvatarCard alt="John Doe" />
                </div>
              </div>
            </div>
          </div>
        ),
      },
    ]}
  />
);
