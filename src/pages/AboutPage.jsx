import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

const AboutPage = (props) => {
  return (
    <div>
      <Hero title={props.title} />
      <Content>
        <p>
          Hello my name is Darrel, I am a highly motivated Full Stack developer
          looking for a company that I am able to contribute to and learn from.
        </p>
        <p>
          I am eager to continue expanding my knowledge and being challenged in
          a field that is constantly evolving in order to better myself and the
          company in which I work for.
        </p>
      </Content>
    </div>
  );
};
export default AboutPage;
