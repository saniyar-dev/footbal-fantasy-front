import useToast from "@src/helpers/useToast";
import { RecentEvent } from "@src/types";
import { useEffect, useState } from "react";
import useFriends from "./useFriends";

const useRecentEvents = (): { friendsRecentEventsList: Array<RecentEvent> } => {
  const { followingsList } = useFriends();
  const [friendsRecentEventsList, setFriendsRecentEventsList] = useState<
    Array<RecentEvent>
  >([]);

  const { addToast } = useToast();
  const formatFriendsRecentEvents = (
    data: Array<RecentEvent>
  ): Array<RecentEvent> => {
    return data.reduce<Array<RecentEvent>>((prev, curr) => {
      return [...prev, { ...curr }];
    }, []);
  };

  const mockData: Array<RecentEvent> = [
    {
      isLiked: false,
      point: 104,
      substitution: [
        {
          playerInName: "sasan",
          playerOutName: "saniyar",
        },
        {
          playerInName: "sasan",
          playerOutName: "saniyar",
        },
        {
          playerInName: "sasan",
          playerOutName: "saniyar",
        },
      ],
      user: {
        userId: "0",
        username: "sasan",
        country: "قم",
        name: "saniyar",
        profilePic: "",
        isFollowing: true,
      },
      week: 5,
    },
    {
      isLiked: false,
      point: 104,
      substitution: [
        {
          playerInName: "sasan",
          playerOutName: "saniyar",
        },
        {
          playerInName: "sasan",
          playerOutName: "saniyar",
        },
        {
          playerInName: "sasan",
          playerOutName: "saniyar",
        },
      ],
      user: {
        userId: "0",
        username: "ray",
        country: "قم",
        name: "ray",
        profilePic: "",
        isFollowing: true,
      },
      week: 5,
    },
    {
      isLiked: false,
      point: 104,
      substitution: [
        {
          playerInName: "sasan",
          playerOutName: "saniyar",
        },
        {
          playerInName: "sasan",
          playerOutName: "saniyar",
        },
        {
          playerInName: "sasan",
          playerOutName: "saniyar",
        },
      ],
      user: {
        userId: "0",
        username: "saniyar",
        country: "قم",
        name: "saniyar",
        profilePic: "",
        isFollowing: true,
      },
      week: 5,
    },
  ];

  const getFriendsRecentEvents = async (): Promise<Array<RecentEvent>> => {
    try {
      const res = mockData;
      return formatFriendsRecentEvents(res);
    } catch (err) {
      console.log(err);
      addToast({
        _tag: "error",
        //@ts-ignore
        message: err.response.data.errors[0].message,
      });
      return [];
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setFriendsRecentEventsList(await getFriendsRecentEvents());
    };

    fetchData().catch((err) => console.log(err));
  }, [followingsList]);

  return { friendsRecentEventsList };
};

export default useRecentEvents;
