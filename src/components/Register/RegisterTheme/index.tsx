const RegisterTheme = () => {
  function onChangeValue(event: any) {
    console.log(event.target.value);
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
    </>
  );
};
export default RegisterTheme;
