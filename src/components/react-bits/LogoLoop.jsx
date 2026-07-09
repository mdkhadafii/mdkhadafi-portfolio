export default function LogoLoop({ items }) {
  const loopItems = [...items, ...items];

  return (
    <div className="logo-loop" aria-label="Technology stack">
      <div className="logo-loop__track">
        {loopItems.map((item, index) => (
          <div className="logo-loop__item" key={`${item.name}-${index}`}>
            <span className="logo-loop__mark">
              {item.image ? <img src={item.image} alt="" loading="lazy" /> : item.mark}
            </span>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
