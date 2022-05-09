import { useParams } from 'react-router-dom';

//We use a hook here --> useParams
function ProductScreen() {
  const params = useParams();
  const { slug } = params;
  return (
    <div>
      <h1> {slug} </h1>
    </div>
  );
}
export default ProductScreen;
