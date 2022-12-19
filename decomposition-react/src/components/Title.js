//Компонент отвечает за стилизацию заголовков

export default function Title(props) {
  return <p className={props.class}>{props.text}</p>;
}
