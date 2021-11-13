import { useAuthentication } from "../../../providers/Authentication";
import { useSign } from "../../../providers/SignUpProvider";

const RegisterTheme = () => {
  const { nextStep } = useAuthentication();
  const { addTheme } = useSign();

  function onChangeValue(event: any) {
    addTheme(event.target.value);
    nextStep();
  }

  return (
    <>
      <h3>Escolhendo Tema d Aplicação</h3>
      <div onChange={(evt) => onChangeValue(evt)}>
        <span>Light</span>
        <input type="radio" value="#999 light" name="theme" />

        <span>Dark</span>
        <input type="radio" value="#000 dark" name="theme" />
      </div>
      <button onClick={onChangeValue}>Proximo Passo</button>
    </>
  );
};
export default RegisterTheme;
