import { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Life from '../assets/images/Life.png';
import FaceShot from '../assets/images/pro-face-shot.jpg';
import Card from './Card';
const Carousel = (props) => {
  const [userInfo, setUserInfo] = useState({
    items: [
      {
        id: 0,
        title: 'Darrel Baerwaldt',
        subTitle: 'Fullstack Developer',
        imageSrc: Life,
        link: 'https://media-exp1.licdn.com/dms/image/C5603AQHjSt5vionBZA/profile-displayphoto-shrink_200_200/0/1622228294700?e=1659571200&v=beta&t=rwgei-Wv2u52VQZl-p4-n3gNUt6obJA9tSke18f_2WY',
        selected: false,
      },
      {
        id: 1,
        title: 'Eliza Thomas',
        subTitle: 'Fullstack Developer',
        imageSrc: FaceShot,
        link: '',
        selected: false,
      },
    ],
  });

  useEffect(() => {});

  let handleCardClick = (id, e) => {
    console.log(999999, id);
    let items = userInfo.items;

    items[id].selected = items[id].selected ? false : true;

    // items.forEach((item) => {
    //   if (item.id !== id) {
    //     item.selected = false;
    //   }
    // });

    setUserInfo(items);
  };

  console.log(77777, userInfo);
  let makeItems = (userInfo) => {
    return userInfo.map((item) => {
      return (
        <Card
          item={item}
          click={(e) => handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };

  return (
    <Container fluid={true}>
      <Row className={'justify-content-around'}>
        {makeItems(userInfo.items)}
      </Row>
    </Container>
  );
};

export default Carousel;
