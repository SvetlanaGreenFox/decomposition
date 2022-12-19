export default function Finance({ data }) {
  return (
    <ul className="currency">
      {data.map((item) => {
        return (
          <li>
            <span href="#">{item.name}</span>
            <span href="#">{item.rate}</span>
          </li>
        );
      })}
    </ul>
  );
}
