import Section from "./Section";
import Title from "./Title";

export default function Visited(props) {
  return (
    <Section class="visited footer__item">
      <Title class="title" text="Посещаемое" />
      <ul className="visited__list">
        {props.data.map((item) => {
          return (
            <li>
              {item.name} - {item.description}
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
