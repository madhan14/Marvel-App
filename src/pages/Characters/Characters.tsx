import './Characters.css';
import IndexContent from '../../components/IndexContent/IndexContent';

const Characters: React.FC = () => {

  const name: any = window.location.pathname.split('/')[1];
  const type = name.toLocaleLowerCase();

  return (
    <IndexContent name={name} type={type} />
  );
};

export default Characters;
