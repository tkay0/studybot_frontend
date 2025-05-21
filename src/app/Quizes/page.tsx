import Link from "next/link";

export default function QuizesPage() {
  return (
    <>
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-8">Quizes</h1>

         <div className="card bg-base-100 shadow-sm mb-8">
          <div className="card-body">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <select className="select select-bordered w-full">
                <option>All Subjects</option>
                <option>Mathematics</option>
                <option>Biology</option>
                <option>Chemistry</option>
                <option>Physics</option>
                <option>English</option>
              </select>

              <select className="select select-bordered w-full">
                <option>All Years</option>
                <option>2023</option>
                <option>2022</option>
                <option>2021</option>
                <option>2020</option>
                <option>2019</option>
              </select>

              <select className="select select-bordered w-full">
                <option>All Difficulty Levels</option>
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
              </select>
            </div>

            <Link href="/Quizes/startQuiz">
              <button className="btn btn-warning">
              Start Quiz
            </button>
            </Link>
            
          </div>
        </div>

      </div>
    </>
  );
}