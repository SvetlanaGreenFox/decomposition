import Section from "./Section";
import Title from "./Title";

//Компонент отвечает за стилизацию блока ТВ-программы

export default function TVProgramm(props) {
  return (
    <Section class="footer__item">
      <Title class="title" text="Телепрограмма" />
      <ul className="visited__list">
        {props.data.map((item) => {
          return (
            <li>
              {item.time} {item.name} {item.channel}
            </li>
          );
        })}
      </ul>
    </Section>
  );
}