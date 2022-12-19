import Section from "./Section";
import Title from "./Title";

//Компонент отвечает за стилизацию строки-заголовка блока Новости

export default function NewsHeader() {
  return (
    <Section class="newsHeader">
      <Title class="title newsTitle" text="Новости сегодня" />
      <Title class="title newsTitle" text="В Германии" />
      <Title class="title newsTitle" text="Рекомендуем" />
    </Section>
  );
}
