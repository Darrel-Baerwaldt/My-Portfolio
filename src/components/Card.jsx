import CardInfo from './CardInfo';

const Card = (props) => {
  const item = props.item;
  console.log(66666, item.selected);

  return (
    <div
      className="d-inline-block g-card"
      //////////////////////  WORKING ON THIS ///////////////////////////////////////
      // onClick={(e) => {
      //   console.log('hello', item.id);
      //   props.click(item.id);
      // }}
      ////////////////////////////////////////////////////////////////////////////////
    >
      <img className="g-card-image" src={item.imageSrc} alt={item.imageSrc} />
      {
        // item.selected &&
        <CardInfo
          title={item.title}
          subTitle={item.subTitle}
          link={item.link}
        />
      }
    </div>
  );
};

export default Card;
