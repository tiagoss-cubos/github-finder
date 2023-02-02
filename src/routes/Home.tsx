import Search from "../components/Search";
import { useState } from "react";
import { UserProps } from "../types/user";

type Props = {};

const Home = (props: Props) => {
  const [user, setUser] = useState<UserProps | null>(null);

  const loadUser = async (username: string) => {
    const response = await fetch(`http://api.github.com/users/${username}`);

    const data = await response.json();

    const { avatar_url, login, location, followers, following } = data;

    const userData: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following,
    };

    setUser(userData);
  };
  return (
    <div>
      <Search loadUser={loadUser} />
      {user && <p>{user.login}</p>}
    </div>
  );
};

export default Home;
