import { Outlet } from 'react-router-dom';
import HeaderBar from './HeaderBar';

const Layout = () => (
  <>
    <HeaderBar />
    <div className="wrapper">
      <Outlet />
    </div>
  </>
);

export default Layout;
