export default function InfoCard({stat, title} : {stat: string, title: string}) {
  return (
    <div className="card w-85 py-4 bg-white shadow-sm mx-auto">
      <div className="card-body text-center">
        <div className="card-title justify-center font-extrabold text-5xl text-yellow-300">{stat}</div>
        <p className="font-medium">{title}</p>
      </div>
    </div>
  );
}