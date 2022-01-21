import { useParams } from "react-router-dom";


export const UserDetail = () => {
  let params = useParams();


  return (
    <div>user detail
    id: {params.userId}
    </div>
  );
};
