import { useProfile } from "../../../redux/profile";

export const ProfilePage = () => {
  const { profile } = useProfile()

  return (
    <section>
      id: {profile.data?.id}
      username: {profile.data?.username}
      email: {profile.data?.email}
    </section>
  );
};
