import Section from "./Section";
import Title from "./Title";

//Компонент отвечает за стилизацию блока с расписанием транспорта
export default function Map(props) {
  return (
    <Section class="footer__item">
      <Title class="title" text="Карта Германии" />
      <a href={props.link}>Расписание</a>
    </Section>
  );
}