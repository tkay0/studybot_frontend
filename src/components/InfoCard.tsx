export default function InfoCard({title, info} : {title: string, info: string}) {
  return (
    <div className="card w-90 bg-white shadow-sm mx-auto">
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