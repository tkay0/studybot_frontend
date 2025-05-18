export default function ProgressBar() {
  return(
    <div className="flex justify-center">
      <ul className="steps steps-vertical lg:steps-horizontal">
        <li className="step step-warning">Beginner</li>
        <li className="step step-warning">Intermediate</li>
        <li className="step">Proficient</li>
        <li className="step">Advanced</li>
    </ul>
    </div>
    
  );
}