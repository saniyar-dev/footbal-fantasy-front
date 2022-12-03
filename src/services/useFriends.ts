import { SERVER, USER } from "@src/helpers/useAxios";
import useToast from "@src/helpers/useToast";
import { _followersList, _followingsList } from "@src/state/friends";
import { User } from "@src/types";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

type BackendUser = {
  id: string;
  firstName: string;
  lastName: string;
  userName: string;
  email: { value: string };
};

const useFriends = (): {
  followersList: Array<User>;
  followingsList: Array<User>;
  followUser: (userId: string) => Promise<void>;
  searchUser: (str: String) => Promise<Array<User>>;
} => {
  const { addToast } = useToast();
  const [followersList, setFollowersList] =
    useRecoilState<Array<User>>(_followersList);
  const [followingsList, setFollowingsList] =
    useRecoilState<Array<User>>(_followingsList);

  const formatFollowingUsers = (data: Array<BackendUser>): Array<User> => {
    return data.reduce<Array<User>>((prev, curr) => {
      return [
        ...prev,
        {
          userId: curr!.id,
          username: curr!.userName,
          country: "ایران",
          name: curr!.firstName.concat(" ", curr!.lastName),
          profilePic: undefined,
          isFollowing: true,
        },
      ];
    }, []);
  };

  const formatFollowerUsers = (data: Array<BackendUser>): Array<User> => {
    return data.reduce<Array<User>>((prev, curr) => {
      return [
        ...prev,
        {
          userId: curr!.id,
          username: curr!.userName,
          country: "ایران",
          name: curr!.firstName.concat(" ", curr!.lastName),
          profilePic: undefined,
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
      const res = await USER.get("followers");
      return formatFollowerUsers(res.data);
    } catch (err) {
      addToast({
        _tag: "error",
        //@ts-ignore
        message: err.response.data.errors[0].message,
      });
      console.log(err);
      return [];
    }
  };

  const getFollowings = async (): Promise<Array<User>> => {
    try {
      // const res = mockFollowings;
      const res = await USER.get("followings");
      return formatFollowingUsers(res.data);
    } catch (err) {
      addToast({
        _tag: "error",
        //@ts-ignore
        message: err.response.data.errors[0].message,
      });
      console.log(err);
      return [];
    }
  };

  const followUser = async (userId: string) => {
    try {
      const res = await USER.post("follow", {
        userId,
      });
      fetchData().catch((err) => {
        addToast({
          _tag: "error",
          //@ts-ignore
          message: err.response.data.errors[0].message,
        });
      });
    } catch (err) {
      addToast({
        _tag: "error",
        //@ts-ignore
        message: err.response.data.errors[0].message,
      });
      console.log(err);
    }
  };

  const mockUsers = [
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

  const formatUsers = (data: Array<BackendUser>): Array<User> => {
    return data
      .reduce<Array<User>>((prev, curr) => {
        return [
          ...prev,
          {
            userId: curr.id,
            username: curr.userName,
            country: "ایران",
            name: curr.firstName.concat(" ", curr.lastName),
            profilePic: undefined,
            isFollowing: true,
          },
        ];
      }, [])
      .slice(0, 3);
  };
  const searchUser = async (str: String): Promise<Array<User>> => {
    if (str === "") return [];
    try {
      const res = await USER.get("users", {
        params: { search: str },
      });
      return formatUsers(res.data as unknown as Array<BackendUser>);
    } catch (err) {
      addToast({
        _tag: "error",
        //@ts-ignore
        message: err.response.data.errors[0].message,
      });
      console.log(err);
      return [];
    }
  };
  const fetchData = async () => {
    setFollowersList(await getFollowers());
    setFollowingsList(await getFollowings());
  };

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
    followUser,
    searchUser,
  };
};

export default useFriends;
