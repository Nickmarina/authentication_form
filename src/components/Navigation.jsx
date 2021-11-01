import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="d-flex justify-content-evenly">
      <NavLink
        to='/registration'
        className="link-secondary"
        activeClassName="link-info"
      >
        Registration
      </NavLink>
      <NavLink
        to='/login'
        className="link-secondary"
        activeClassName="link-info"
      >
        Login
      </NavLink>
    </div>
  );
};

export default Navigation;