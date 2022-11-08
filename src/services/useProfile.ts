import { SERVER, USER } from "@src/helpers/useAxios";
import { FormInputTypes } from "@src/helpers/useFormValidator";
import useToast from "@src/helpers/useToast";
import { User } from "@src/types";
import { useEffect, useState } from "react";

interface GodInfoType extends Omit<User, "isFollowing"> {
  email: string;
}
type BackGodInfoType = {
  id: string;
  firstName: string;
  lastName: string;
  userName: string;
  email: { value: string };
};

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
    email: "saniyar.dev@gmail.com",
  });

  const formatGodInfo = (data: BackGodInfoType): GodInfoType => {
    return {
      userId: data.id,
      country: "ایران",
      name: data.firstName.concat(" ", data.lastName),
      profilePic: undefined,
      username: data.userName,
      email: data.email.value,
    };
  };

  const getGodInfo = async (): Promise<GodInfoType> => {
    try {
      const res = await USER.get("profile");
      console.log(res.data);
      return formatGodInfo(res.data as unknown as BackGodInfoType);
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
        email: "saniyar.dev@gmail.com",
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
