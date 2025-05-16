export default function Feedback({ feedbackText, sender, initials }: {feedbackText: string, sender: string, initials: string}) {
  return (
    <div className="px-4">
      <div className="card max-w-7xl bg-white shadow-sm mx-auto py-5">
        <div className="card-body">
          <p>"{feedbackText}"</p>
          <div className="font-medium flex flex-row items-center">
            <div className="mr-1 bg-warning rounded-full h-8 w-8 flex justify-center items-center">{initials}</div>
            <div className="italic">
              {sender}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}