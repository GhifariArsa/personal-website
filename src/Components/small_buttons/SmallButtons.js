import "./smallbuttons.css"

export default function SmallButtons({ list }) {
  return (
    <div className="buttons-list">
      {list.map((item) => {
        return <button className="small-button">{item}</button>;
      })}
    </div>
  );
}
