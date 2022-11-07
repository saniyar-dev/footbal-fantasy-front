import { User } from "@src/types";

const useFriends = (): {
  getFollowers: () => Promise<Array<User>>;
  getFollowings: () => Promise<Array<User>>;
} => {
  const formatUsers = (data: Array<User>): Array<User> => {
    return data.reduce<Array<User>>((prev, curr) => {
      return [
        ...prev,
        {
          userId: curr!.userId,
          username: curr!.username,
          country: curr!.country,
          name: curr!.name,
          profilePic: curr!.profilePic,
        },
      ];
    }, []);
  };

  const mockFollowers: Array<User> = [
    {
      userId: "0",
      username: "sasan",
      country: "قم",
      name: "sasan",
      profilePic: "",
    },
    {
      userId: "1",
      username: "ali",
      country: "قم",
      name: "ali",
      profilePic: "",
    },
  ];

  const mockFollowings: Array<User> = [
    {
      userId: "0",
      username: "sasan",
      country: "قم",
      name: "saniyar",
      profilePic: "",
    },
    {
      userId: "1",
      username: "ali",
      country: "قم",
      name: "ray",
      profilePic: "",
    },
  ];

  const getFollowers = async (): Promise<Array<User>> => {
    try {
      const res = mockFollowers;
      return formatUsers(res);
    } catch (err) {
      console.log(err);
      return [];
    }
  };

  const getFollowings = async (): Promise<Array<User>> => {
    try {
      const res = mockFollowings;
      return formatUsers(res);
    } catch (err) {
      console.log(err);
      return [];
    }
  };

  return {
    getFollowers,
    getFollowings,
  };
};

export default useFriends;
