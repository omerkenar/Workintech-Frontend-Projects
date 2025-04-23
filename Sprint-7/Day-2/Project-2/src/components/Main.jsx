import FormContainer from './FormContainer';

export default function Main(props) {
  const { setUsers } = props;

  return (
    <div className="products-container">
      <FormContainer setUsers={setUsers}/>
    </div>
  );
}
