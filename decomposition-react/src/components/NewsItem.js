//Компонент отвечает за стилизацию элемента новость

export default function NewsItem(props) {
  const { news } = props;
  return (
    <li>
      <img alt='description' src={news.logo} />
      <a href={news.link} className="news__description">
        {news.text}
      </a>
    </li>
  );
}
