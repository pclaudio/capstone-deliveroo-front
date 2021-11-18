import styled from "styled-components";

export const FormPayment = styled.form`
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    color: var(--error);
  }

  input {
    margin: 0;
    padding: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  input:active + .drinkcard-cc {
    opacity: 0.9;
  }

  input:checked + .drinkcard-cc {
    -webkit-filter: none;
    -moz-filter: none;
    filter: none;
  }

  .paypal {
    background-image: url("https://imgur.com/gwOJ7MZ.png");
  }

  .visa {
    background-image: url("https://imgur.com/donIj7U.png");
  }

  .payonner {
    background-image: url("https://imgur.com/s66p1KA.png");
  }

  .drinkcard-cc {
    background-position: center;
    margin-bottom: 6px;
    cursor: pointer;
    border-radius: 10px;
    border: 2px solid var(--hover-color-50);
    background-size: contain;
    background-repeat: no-repeat;
    display: inline-block;
    width: 280px;
    height: 50px;
    -webkit-transition: all 100ms ease-in;
    -moz-transition: all 100ms ease-in;
    transition: all 100ms ease-in;
    -webkit-filter: brightness(1.8) grayscale(1) opacity(0.7);
    -moz-filter: brightness(1.8) grayscale(1) opacity(0.7);
    filter: brightness(1.8) grayscale(1) opacity(0.7);
  }

  .drinkcard-cc:hover {
    -webkit-filter: brightness(1.2) grayscale(0.5) opacity(0.9);
    -moz-filter: brightness(1.2) grayscale(0.5) opacity(0.9);
    filter: brightness(1.2) grayscale(0.5) opacity(0.9);
  }
`;
