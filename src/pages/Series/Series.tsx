import './Series.css';
import IndexContent from '../../components/IndexContent/IndexContent';

const Series: React.FC = () => {

  const name = window.location.pathname.split('/')[1];
  const type = name.toLocaleLowerCase();

  return (
    <IndexContent name={name} type={type} />
  );
};

export default Series;
