import Section from "./Section";
import Title from "./Title";

export default function InEther(props) {
  return (
    <Section class="footer__item">
      <Title class="title" text="Эфир" />
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