import { User } from "@src/types";
import { useEffect, useState } from "react";

const useFriends = (): {
  followersList: Array<User>;
  followingsList: Array<User>;
} => {
  const [followersList, setFollowersList] = useState<Array<User>>([]);
  const [followingsList, setFollowingsList] = useState<Array<User>>([]);

  const formatFollowingUsers = (data: Array<User>): Array<User> => {
    return data.reduce<Array<User>>((prev, curr) => {
      return [
        ...prev,
        {
          userId: curr!.userId,
          username: curr!.username,
          country: curr!.country,
          name: curr!.name,
          profilePic: curr!.profilePic,
          isFollowing: true,
        },
      ];
    }, []);
  };

  const formatFollowerUsers = (data: Array<User>): Array<User> => {
    return data.reduce<Array<User>>((prev, curr) => {
      return [
        ...prev,
        {
          userId: curr!.userId,
          username: curr!.username,
          country: curr!.country,
          name: curr!.name,
          profilePic: curr!.profilePic,
          isFollowing: false,
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
      isFollowing: false,
    },
    {
      userId: "1",
      username: "ali",
      country: "قم",
      name: "ali",
      profilePic: "",
      isFollowing: false,
    },
  ];

  const mockFollowings: Array<User> = [
    {
      userId: "0",
      username: "sasan",
      country: "قم",
      name: "saniyar",
      profilePic: "",
      isFollowing: true,
    },
    {
      userId: "1",
      username: "ali",
      country: "قم",
      name: "ray",
      profilePic: "",
      isFollowing: true,
    },
  ];

  const getFollowers = async (): Promise<Array<User>> => {
    try {
      const res = mockFollowers;
      return formatFollowerUsers(res);
    } catch (err) {
      console.log(err);
      return [];
    }
  };

  const getFollowings = async (): Promise<Array<User>> => {
    try {
      const res = mockFollowings;
      return formatFollowingUsers(res);
    } catch (err) {
      console.log(err);
      return [];
    }
  };

  const followUser = async () => {};

  useEffect(() => {
    const fetchData = async () => {
      setFollowersList(await getFollowers());
      setFollowingsList(await getFollowings());
    };

    fetchData().catch((err) => console.log(err));
  }, []);

  return {
    followersList,
    followingsList,
  };
};

export default useFriends;
