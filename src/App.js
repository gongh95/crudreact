import Form from './components/form/form';
import Header from './components/header/header';
import List from './components/list/list';
import usuarios from './users';

function App() {
  return (
    <>
      <Header titulo = "Crud ReactJs y Express"/>
      <List users = {usuarios}></List>
      <Form></Form>
    </>
  );
}

export default App;
