import React, { Fragment } from 'react';

const About = () => {
  return (
    <Fragment>
      <div className='about-container'>
        <h1>このアプリについて</h1>
        <p>近所のラーメン屋さんを検索するためのシンプルなWebアプリです。</p>
        <p>ぐるなびのWeb APIを使用しています。</p>
        <br />
        <p>
          ぐるなびを例としたWeb APIの使い方は
          <a
            href='https://x-hack.connpass.com/'
            title='X-HACK東京 - connpass'
            target='_blank'
            rel='noopener noreferrer'
          >
            X-HACK（クロスハック）のセミナー
          </a>
          で勉強させていただきました。
        </p>
        <p>松田さんの解説はとてもわかりやすいのでお勧めです。</p>
        <br />
        <p>
          アイコンやファビコンを作ってくれたともらさんのYouTubeチャンネルは以下です。
        </p>
        <iframe
          title='About'
          width='560'
          height='315'
          src='https://www.youtube.com/embed/4e9PS8PYrHo'
          frameborder='0'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
        <p>
          Created by{' '}
          <a
            href='https://twitter.com/pitang1965'
            title='@pitang1965 - Twitter'
            target='_blank'
            rel='noopener noreferrer'
          >
            Pitang1965
          </a>
        </p>
      </div>
    </Fragment>
  );
};

export default About;
