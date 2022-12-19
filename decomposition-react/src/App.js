import './App.css';
import Section from './components/Section';
import NewsHeader from './components/NewsHeader';
import News from './components/News';
import Finance from './components/Finance';
import Aside from './components/Aside';
import Navigator from './components/Navigator';
import Search from './components/Search';
import Commercial from './components/Commercial';
import Weather from './components/Weather';
import Map from './components/Map';
import InEther from './components/InEther';
import Visited from './components/Visited';
import TVProgramm from './components/TVProgramm';
import { news, currency, commercialData, weatherData, mapData, inEtherData, visitedData, tvPropgrammData } from './components/data';



// function Section(props) {
//   return <section className={props.class}>{props.children}</section>;
// }

// function Title(props) {
//   return <p className={props.class}>{props.text}</p>;
// }

// function NewsItem(props) {
//   const { news } = props;
//   return (
//     <li>
//       <img src={news.logo} />
//       <a href={news.link} className="news__description">
//         {news.text}
//       </a>
//     </li>
//   );
// }

// function News(props) {
//   return (
//     <ul className="news__list">
//       {props.items.map((item) => (
//         <NewsItem news={item} />
//       ))}
//     </ul>
//   );
// }

// function NewsHeader() {
//   return (
//     <Section class="newsHeader">
//       <Title class="title newsTitle" text="Новости сегодня" />
//       <Title class="title newsTitle" text="В Германии" />
//       <Title class="title newsTitle" text="Рекомендуем" />
//     </Section>
//   );
// }

// function AsideBlock() {
//   return (
//     <Section class="aside-block">
//       <img alt='cat'
//         className="img"
//         src="https://bugaga.ru/uploads/posts/2017-03/1489052030_kotik-hosiko-12.jpg"
//       />
//       <Title class="title" text="Работа над ошибками" />
//     </Section>
//   );
// }

// function Finance({ data }) {
//   return (
//     <ul className="currency">
//       {data.map((item) => {
//         return (
//           <li>
//             <span href="#">{item.name}</span>
//             <span href="#">{item.rate}</span>
//           </li>
//         );
//       })}
//     </ul>
//   );
// }

// function Navigator() {
//   return (
//     <ul className="menu">
//       <li className="menu__item">
//         <a href="">Видео</a>
//       </li>
//       <li className="menu__item">
//         <a href="">Картинки</a>
//       </li>
//       <li className="menu__item">
//         <a href="">Новости</a>
//       </li>
//     </ul>
//   );
// }

// function Search() {
//   return (
//     <Section class="search__wrapper">
//       <div>
//         <img alt='logotip'
//           src="https://avatars.mds.yandex.net/i?id=11ad967c4814ff7b7729ac9597e3bf3e8a0d51a5-5247089-images-thumbs&n=13"
//           className="logo"
//         />
//       </div>
//       <form>
//         <input type="text" placeholder="Искать здесь..." />
//         <button type="submit">Найти</button>
//       </form>
//     </Section>
//   );
// }

// function Commercial(props) {
//   return (
//     <div className="ad-block">
//       <img alt='banner' className="banner" src={props.link} />
//     </div>
//   );
// }



// function Weather(props) {
//   return (
//     <Section class="weather footer__item">
//       <Title class="title" text="Погода" />
//       <a href={props}>Прогноз погоды </a>
//     </Section>
//   );
// }

// function Visited(props) {
//   console.log(props);
//   return (
//     <Section class="visited footer__item">
//       <Title class="title" text="Посещаемое" />
//       <ul className="visited__list">
//         {props.data.map((item) => {
//           return (
//             <li>
//               {item.name} - {item.description}
//             </li>
//           );
//         })}
//       </ul>
//     </Section>
//   );
// }

// function Map(props) {
//   return (
//     <Section class="footer__item">
//       <Title class="title" text="Карта Германии" />
//       <a href={props.link}>Расписание</a>
//     </Section>
//   );
// }

// function InEther(props) {
//   return (
//     <Section class="footer__item">
//       <Title class="title" text="Эфир" />
//       <ul className="visited__list">
//         {props.data.map((item) => {
//           return (
//             <li>
//               {item.name} - {item.description}
//             </li>
//           );
//         })}
//       </ul>
//     </Section>
//   );
// }

// function TVProgramm(props) {
//   return (
//     <Section class="footer__item">
//       <Title class="title" text="Телепрограмма" />
//       <ul className="visited__list">
//         {props.data.map((item) => {
//           return (
//             <li>
//               {item.time} {item.name} {item.channel}
//             </li>
//           );
//         })}
//       </ul>
//     </Section>
//   );
// }

function App() {
  return (
    <Section class="body">
      <Section class="header">
        <Section class="newsList">
          <NewsHeader />
          <News items={news} />
          <Finance data={currency} />
        </Section>
        <Aside />
      </Section>
      <Section class="main">
        <Navigator />
        <Search class="search" />
        <Commercial link={commercialData} />
      </Section>
      <Section class="footer">
        <Weather data={weatherData} />
        <Map link={mapData} />
        <InEther data={inEtherData} />
        <Visited data={visitedData} />
        <TVProgramm data={tvPropgrammData} />
      </Section>
    </Section>
  );
}

export default App;
