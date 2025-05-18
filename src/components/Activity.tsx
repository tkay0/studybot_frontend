export default function Activity() {
  return(
    <div className="p-10">
      <table className="table text-xl">
        <thead className="text-xl">
          <tr>
            <th>Recent Activity</th>
            <th className="text-right">Time</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bgbase-200">
            <td>Completed Mathematics 2022 Past Questions</td>
            <td className="text-right">Today, 2:30</td>
          </tr>

          <tr className="bgbase-200">
            <td>Scored 92% on Biology Quiz</td>
            <td className="text-right">Yesterday, 4:15 PM</td>
          </tr>

          <tr className="bgbase-200">
            <td>Completed Physics 2023 Past Questions</td>
            <td className="text-right">Today, 09:00</td>
          </tr>
        </tbody>
      </table>
    </div>
    
  );
}