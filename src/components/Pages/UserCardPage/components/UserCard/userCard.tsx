import styled from "styled-components";
import { color, devices } from "@/styles/variables";

const { textColor, lightTextColor, shadowColor, floatShadow } = color;

interface UserCardProps {
  picture: string;
  name: string;
  email: string;
}

const CardContainer = styled.div`
  padding: 30px 50px;
  width: 350px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 30px;
  box-shadow: 0 0 0 2px ${shadowColor};

  &:hover {
    box-shadow: -16px 16px 32px 0 ${floatShadow};
    transform: translate(5px, -5px);
    transition-duration: 0.4s;
  }
`;

const ImageContainer = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 16px 32px 0 ${floatShadow};
`;

const Name = styled.p`
  color: ${textColor};
  font-size: 16px;

  @media ${devices.mobile} {
    font-size: 18px;
  }

  @media ${devices.laptop} {
    font-size: 20px;
  }
`;

const Email = styled.p`
  color: ${lightTextColor};
  font-size: 14px;

  @media ${devices.mobile} {
    font-size: 16px;
  }

  @media ${devices.laptop} {
    font-size: 18px;
  }
`;

const UserCard: React.FC<UserCardProps> = (props) => {
  const { picture, name, email } = props;
  return (
    <CardContainer>
      <ImageContainer>
        <img src={`${picture}`} alt="" width={100} height={100} />
      </ImageContainer>
      <Name>{name}</Name>
      <Email>{email}</Email>
    </CardContainer>
  );
};

export default UserCard;
