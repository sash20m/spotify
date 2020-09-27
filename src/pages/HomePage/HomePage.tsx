import React from 'react';
import { Header } from 'ui/molecules';
import { Layout } from '../../ui/organisms';
import { ReactComponent as PlayIcon } from './icons/play-button.svg';

import './HomePage.scss';

export const HomePage = (): React.ReactElement => {
  // useEffect(() => {
  //   const getData = async () => {
  //     const data = await playlist.get('37i9dQZF1E35lz662Js0C2');
  //     console.log(data, 'dd');
  //   };
  //   getData();
  // }, []);

  return (
    <Layout>
      <div className="playlist">
        <Header />
        <div className="song-list">
          <div className="song-list__header-bg"></div>
          <div className="song-list__content">
            <div className="song-list__content__playBtn">
              <PlayIcon />
            </div>
            <div className="song-list__content__list">
              <p>qwe</p>
              <p>qwe</p>
              <p>qwe</p>
              <p>qwe</p>
              <p>qwe</p>
              <p>qwe</p>
              <p>qwe</p>
              <p>qwe</p>
              <p>qwe</p>
              <p>qwe</p>
              <p>qwe</p>
              <p>qwe</p>
              <p>qwe</p>
              <p>qwe</p>
              <p>qwe</p>
              <p>qwe</p>
              <p>qwe</p>
              <p>qwe</p>
              <p>qwe</p>
              <p>qwe</p>
              <p>qwe</p>
              <p>qwe</p>
              <p>qwe</p>
              <p>qwe</p>
              <p>qwe</p>
              <p>qwe</p>
              <p>qwe</p>
              <p>qwe</p>
              <p>qwe</p>
              <p>qwe</p>
              <p>qwe</p>
              <p>qwe</p>
              <p>qwe</p>
              <p>qwe</p>
              <p>qwe</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
