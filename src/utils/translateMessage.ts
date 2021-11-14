const translateMessage = (message: string): string => {
  switch (message) {
    case "Cannot find user":
      return "Usuário não foi localizado";

    case "Incorrect password":
      return "Senha incorreta";

    default:
      return message;
  }
};

export default translateMessage;
