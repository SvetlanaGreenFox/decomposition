import Title from "./Title";

//Компонент отвечает за стилизацию дополнительного блока контента

export default function Aside() {
  return (
    <aside className="aside-block">
      <img alt='cat'
        className="img"
        src="https://bugaga.ru/uploads/posts/2017-03/1489052030_kotik-hosiko-12.jpg"
      />
      <Title class="title" text="Работа над ошибками" />
    </aside>
  );
}
