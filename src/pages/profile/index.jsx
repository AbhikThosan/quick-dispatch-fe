import { useStore } from "../../store";

const Profile = () => {
  const { userInfo } = useStore();

  return (
    <div>
      Profile
      <div>Email: {userInfo?.email}</div>
    </div>
  );
};

export default Profile;
