import styled from "styled-components";

export const FormTheme = styled.form`
  margin: 0;
  width: 100%;
  display: flex;
  align-items: center;

  label {
    .darkBox {
      border: 3px solid white;
      width: 100px;
      text-align: center;
      border-radius: 10px;
      .darkText {
        color: white;
      }
    }
    .lightBox {
      border: 3px solid black;
      width: 100px;
      text-align: center;
      border-radius: 10px;
      .lightText {
        color: black;
      }
    }
  }

  input {
    margin: 0;
    padding: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  input:active + .theme {
    opacity: 0.9;
  }
  input:checked + .theme {
    -webkit-filter: none;
    -moz-filter: none;
    filter: none;
  }

  .light {
    background-image: url("https://imgur.com/YUehYi7.png");
  }
  .dark {
    background-image: url("https://imgur.com/8HY8JmL.png");
  }

  .theme {
    background-position: center;
    margin-bottom: 6px;
    cursor: pointer;
    border-radius: 10px;
    border: 3px solid var(--hover-color-50);
    background-size: cover;
    background-repeat: no-repeat;
    display: inline-block;
    width: 280px;
    height: 360px;
    -webkit-transition: all 100ms ease-in;
    -moz-transition: all 100ms ease-in;
    transition: all 100ms ease-in;
    -webkit-filter: brightness(1.8) grayscale(1) opacity(0.7);
    -moz-filter: brightness(1.8) grayscale(1) opacity(0.7);
    filter: brightness(1.8) grayscale(1) opacity(0.7);
  }
  .theme:hover {
    -webkit-filter: brightness(1.2) grayscale(0.5) opacity(0.9);
    -moz-filter: brightness(1.2) grayscale(0.5) opacity(0.9);
    filter: brightness(1.2) grayscale(0.5) opacity(0.9);
  }
`;

export const Error = styled.p`
  color: var(--error);
`;
