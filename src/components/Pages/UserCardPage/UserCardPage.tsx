import styled from "styled-components";
import UserCard from "./components/UserCard";
import { IUserInformation } from "@/interfaces/user";
import { useState, useEffect } from "react";
import axios from "axios";
import Button from "@/components/Shares/Button";
import GenderFilter from "./components/GenderFilter";
import { EUserSex } from "@/constants/user";
import { isEmpty } from "lodash";
import {
  EGenderOptions,
  USER_GENDER_FILTER,
} from "@/constants/userGenderFilter";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 0;
  gap: 60px;
`;

const CardsContainer = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: row;
  gap: 50px;
  flex-flow: wrap;
`;

const FunctionGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
`;

const UserCardPage: React.FC = () => {
  const [userInformation, setUserInformation] = useState<IUserInformation[]>([
    {
      picture: { large: "", medium: "", thumbnail: "" },
      name: { title: "", first: "", last: "" },
      email: "",
      gender: "",
    },
  ]);

  const [filteredUserInformation, setFilteredUserInformation] =
    useState<IUserInformation[]>(userInformation);

  const [selectedFilter, setSelectedFilter] = useState<number>(2);

  const request = () => {
    axios.get(`https://randomuser.me/api/?results=12`).then((res) => {
      setUserInformation(res.data.results);
    });
  };

  useEffect(() => {
    request();
  }, []);

  useEffect(() => {
    setFilteredUserInformation(userInformation);
  }, [userInformation]);

  useEffect(() => {
    handleFilter(userInformation);
  }),
    [userInformation];

  const handleClick = () => {
    request();
  };

  const getMaleUserList = (userInformation: IUserInformation[]) => {
    const maleUserList: IUserInformation[] = userInformation.filter(
      (user) => user.gender === EUserSex.MALE
    );
    return maleUserList;
  };

  const getFemaleUserList = (userInformation: IUserInformation[]) => {
    const femaleUserList: IUserInformation[] = userInformation.filter(
      (user) => user.gender === EUserSex.FEMALE
    );
    return femaleUserList;
  };

  const handleFilter = (userInformation: IUserInformation[]) => {
    if (!isEmpty(userInformation)) {
      switch (USER_GENDER_FILTER[selectedFilter]) {
        case EGenderOptions.MALE:
          setFilteredUserInformation(getMaleUserList(userInformation));
          break;
        case EGenderOptions.FEMALE:
          setFilteredUserInformation(getFemaleUserList(userInformation));
          break;
        case EGenderOptions.ALL:
          setFilteredUserInformation(userInformation);
          break;
        default:
          setFilteredUserInformation(userInformation);
          break;
      }
    }
  };

  return (
    <Layout>
      <FunctionGroup>
        <GenderFilter setSelectedFilter={setSelectedFilter} />
        <Button onClick={handleClick}>Reload</Button>
      </FunctionGroup>
      <CardsContainer>
        {filteredUserInformation?.map(({ picture, name, email }) => (
          <UserCard
            key={email}
            picture={picture.large}
            name={`${name.first} ${name.last}`}
            email={email}
          />
        ))}
      </CardsContainer>
    </Layout>
  );
};

export default UserCardPage;
