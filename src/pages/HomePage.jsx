import Hero from '../components/Hero';
import Corousel from '../components/Corousel';

const HomePage = (props) => {
  // console.log(111, props);
  return (
    <div>
      <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
      <Corousel state={props} />
    </div>
  );
};
export default HomePage;
