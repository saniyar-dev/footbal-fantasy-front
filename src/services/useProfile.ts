import { FormInputTypes } from "@src/helpers/useFormValidator";
import useToast from "@src/helpers/useToast";
import { User } from "@src/types";
import { useEffect, useState } from "react";

type GodInfoType = Omit<User, "isFollowing">;

const useProfile = (): {
  godInfo: GodInfoType;
  editGodInfo: (data: Partial<Record<FormInputTypes, string>>) => Promise<void>;
} => {
  const { addToast } = useToast();
  const [godInfo, setGodInfo] = useState<GodInfoType>({
    name: "asghar baghal",
    userId: "",
    country: "ایران",
    profilePic: undefined,
    username: "asghar",
  });

  const getGodInfo = async (): Promise<GodInfoType> => {
    try {
      return {
        name: "asghar baghal",
        userId: "",
        country: "ایران",
        profilePic: undefined,
        username: "asghar",
      };
    } catch (err) {
      console.log(err);
      addToast({
        _tag: "error",
        message: "یه چیزی رفت رو هوا صفحه رو رفرش کن",
      });
      return {
        name: "asghar",
        userId: "",
        country: "ایران",
        profilePic: undefined,
        username: "asghar",
      };
    }
  };

  const editGodInfo = async (data: Partial<Record<FormInputTypes, string>>) => {
    try {
      // server call for edit
      console.log(data);
    } catch (err) {
      console.log(err);
      addToast({
        _tag: "error",
        message: "یه چیزی رفت رو هوا صفحه رو رفرش کن",
      });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setGodInfo(await getGodInfo());
    };

    fetchData().catch((err) => {
      console.log(err);
      addToast({
        _tag: "error",
        message: "یه چیزی رفت رو هوا صفحه رو رفرش کن",
      });
    });
  }, []);

  return {
    godInfo,
    editGodInfo,
  };
};

export default useProfile;
