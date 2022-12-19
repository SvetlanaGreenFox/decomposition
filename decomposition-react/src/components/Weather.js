import Section from "./Section";
import Title from "./Title";

//Компонент отвечает за стилизацию блока Погода

export default function Weather(props) {
  return (
    <Section class="weather footer__item">
      <Title class="title" text="Погода" />
      <a href={props}>Прогноз погоды </a>
    </Section>
  );
}
