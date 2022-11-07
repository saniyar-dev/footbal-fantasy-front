import { User } from "@src/types";

const formatUsers = (data: Array<User>): Array<User> => {
  return data.reduce<Array<User>>((prev, curr) => {
    return [
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

const mockUsers: Array<User> = [
  {
    userId: "0",
    username: "sasan",
    country: "قم",
    name: "sasan",
    profilePic: "",
  },
  {
    userId: "0",
    username: "sasan",
    country: "قم",
    name: "sasan",
    profilePic: "",
  },
];

export const getFollowers = (): Array<User> => {
  try {
    const res = mockUsers;
    return formatUsers(res);
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const getFollowings = (): Array<User> => {
  try {
    const res = mockUsers;
    return formatUsers(res);
  } catch (err) {
    console.log(err);
    return [];
  }
};
