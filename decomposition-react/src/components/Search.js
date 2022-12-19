import Section from "./Section";

//Компонент отвечает за стилизацию блока поиска

export default function Search() {
  return (
    <Section class="search__wrapper">
      <div>
        <img alt='logotip'
          src="https://avatars.mds.yandex.net/i?id=11ad967c4814ff7b7729ac9597e3bf3e8a0d51a5-5247089-images-thumbs&n=13"
          className="logo"
        />
      </div>
      <form>
        <input type="text" placeholder="Искать здесь..." />
        <button type="submit">Найти</button>
      </form>
    </Section>
  );
}
