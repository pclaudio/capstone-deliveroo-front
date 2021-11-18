import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import {
  ButtonContainer,
  Container,
  H66Rate,
  MainContainer,
  MktPhoto,
  StarContainer,
  TextContainer,
} from "./styles";
import PlaceHolder from "../../assets/img/placeholder.png";
import Button from "../Button";
import Input from "../Input";
import EditIcon from "../../assets/img/editIcon.svg";
import { useAvailable } from "../../providers/AvailableProvider";
import { IFeedAvailable } from "../../providers/AvailableProvider/types";

const colors = {
  orange: "#ffba5a",
  grey: "#a9a9a9",
};

export function Rating({ id }: any) {
  const stars = Array(5).fill(0);
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const [inputValue, setInputValue] = useState("");

  const { PostProductComent, windowFeed, setWindowFeed } = useAvailable();

  const handleClick = (value: number) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (value: any) => {
    setHoverValue(value);
  };

  const handleMouseLeaver = () => {
    setHoverValue(undefined);
  };

  const handleSubmit = () => {
    const data: IFeedAvailable = {
      productId: id,
      avaliation: currentValue,
      description: inputValue,
    };
    PostProductComent(data);
  };

  return (
    <MainContainer>
      <div id="box">
        <MktPhoto src={PlaceHolder} />
      </div>
      <TextContainer>
        <h3>Thank You!</h3>
        <h3> Enjoy Your Purchases</h3>
        <H66Rate>Please rate your delivery</H66Rate>
      </TextContainer>
      <StarContainer>
        <Container>
          {stars.map((_, index) => {
            return (
              <FaStar
                key={index}
                color={
                  (hoverValue || currentValue) > index
                    ? colors.orange
                    : colors.grey
                }
                onClick={() => handleClick(index + 1)}
                onMouseOver={() => handleMouseOver(index + 1)}
                onMouseLeave={handleMouseLeaver}
              />
            );
          })}
        </Container>
      </StarContainer>
      <div>
        <Input
          img={EditIcon}
          placeholder="Leave feedback"
          // xl
          name="RateLabel"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <ButtonContainer>
          <Button
            onClick={() => handleSubmit()}
            className="marginButtonBotton"
            type="submit"
          >
            Submit
          </Button>
          <Button
            onClick={() => setWindowFeed(!windowFeed)}
            className="marginButtonBotton"
            type="submit"
          >
            Skip
          </Button>
        </ButtonContainer>
      </div>
    </MainContainer>
  );
}
