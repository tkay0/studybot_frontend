export default function InfoCard({title, info} : {title: string, info: string}) {
  return (
    <div className="card w-90 bg-white shadow-sm">
        <div className="card-body">
          <div className="card-title">{title}</div>
          <p>{info}</p>
        </div>
      </div>
  );
}