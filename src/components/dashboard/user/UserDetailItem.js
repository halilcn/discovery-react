import { NavLink } from 'react-router-dom';

//todo: link yapıları iyileştirme

export const UserDetailItem = (params) => {
  return (
    <div className="bg-red-50 m-4">
      <NavLink className="underline" to="/users/1">
        {params.user.username}
      </NavLink>
      <div className="">
        delete
      </div>
    </div>
  );
};
