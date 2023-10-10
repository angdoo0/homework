import './App.css';
import LogIn  from './component/LogIn';
import Title from './component/Title';
import Logo from './component/Logo';
import Menu from './component/Menu';
import MenuList from './component/MenuList';


const App = () => {
  return (
    <div>
      <Logo />
      <Title>로그인</Title>
      <LogIn />
      <Menu MenuList={MenuList} />
    </div>
  )
};

export default App;
