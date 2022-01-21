import { NavLink } from 'react-router-dom';

export const Test2 = (props) => {
  return (
    <div>
      test 2 sayfası
      <NavLink
        to={`/invoices/1`}
        key={1}
        activeClassName="selected"
      >
        asdasdasd
      </NavLink>
    </div>
  );
};
