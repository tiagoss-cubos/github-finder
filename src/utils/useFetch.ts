import { useState, useEffect } from "react";
import { UserProps } from "../types/user";
import axios from "axios";

const useFetch = (userName: UserProps) => {
  const [user, setUser] = useState<UserProps | null>(null);

  useEffect(() => {
    axios.get(`http://api.github.com/users/${userName}`).then((response) => {
      const { avatar_url, login, location, followers, following }: any =
        response;

      const userData: UserProps = {
        avatar_url,
        login,
        location,
        followers,
        following,
      };

      setUser(userData);
    });
  }, [userName]);

  return user;
};

export default useFetch;
