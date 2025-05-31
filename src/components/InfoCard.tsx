export default function InfoCard({title, info} : {title: string, info: string}) {
  return (
    <div className="card w-90 bg-white shadow-sm mx-auto transition-all duration-300 ease-out hover:shadow-lg hover:-translate-y-2 relative group overflow-hidden">
       <div className="absolute top-0 left-0 h-1 bg-gradient-to-r from-yellow-300 to-orange-400 w-0 group-hover:w-full transition-all duration-500 ease-out"></div>
        <div className="card-body text-center">
          <div className="card-title justify-center mx-auto font-bold rounded-full bg-warning w-10 h-10">{getCapitalizedFirstLetter(title)}</div>
          <div className="card-title justify-center font-bold">{title}</div>
          <p>{info}</p>
        </div>
      </div>
  );

  function getCapitalizedFirstLetter(text: string): string {
    if(!text){
      return '';
    }
    return text.charAt(0).toUpperCase();
  }
}