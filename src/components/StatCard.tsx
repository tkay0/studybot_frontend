export default function InfoCard({stat, title} : {stat: string, title: string}) {
  return (
    <div className="card w-85 py-4 bg-white shadow-sm mx-auto relative">
      <div className="absolute top-0 left-0 h-1 bg-gradient-to-r from-yellow-300 to-orange-400 w-full"></div>
      <div className="card-body text-center">
        <div className="card-title justify-center font-extrabold text-5xl text-transparent bg-clip-text bg-gradient-to-r from bg-yellow-400 to-orange-500">{stat}</div>
        <p className="font-medium">{title}</p>
      </div>
    </div>
  );
}