import NewsItem from "./NewsItem";

//Компонент отвечает за стилизацию блока с новостями

export default function News(props) {
  return (
    <ul className="news__list">
      {props.items.map((item) => (
        <NewsItem news={item} />
      ))}
    </ul>
  );
}
