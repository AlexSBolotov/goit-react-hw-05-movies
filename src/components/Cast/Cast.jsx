import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  return (
    <div>
      <span>{movieId}: Cast1</span>
      <span>{movieId}: Cast2</span>
      <span>{movieId}: Cast3</span>
    </div>
  );
};

export default Cast;
