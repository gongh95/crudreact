import Footer from './components/footer/footer';
import Form from './components/form/form';
import Header from './components/header/header';
import List from './components/list/list';
import usuarios from './db/users.json';

function App() {
  return (
    <>
      <Header titulo = "Crud ReactJs y Express"/>
      <List users = {usuarios}></List>
      <Form></Form>
      <Footer></Footer>
    </>
  );
}

export default App;
