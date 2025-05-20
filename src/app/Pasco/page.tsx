export default function WasscePastQuestionsPage() {
  return (
    <div className="min-h-screen bg-base-200">
          <main className="container mx-auto px-4 py-8">
        

        <h1 className="text-4xl font-bold mb-8">WASSCE Past Questions</h1>

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

            <button className="btn btn-warning w-fit">
              Apply Filters
            </button>
          </div>
        </div>

        {/* Questions List */}
        <div className="space-y-6">
          {/* Mathematics Question */}
          <div className="card bg-base-100 shadow-sm">
            <div className="card-body">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="card-title">
                  Mathematics • 2023 • Question 1
                </h3>
              </div>
              <p className="mb-4">If f(x) = 2x² - 3x + 1 and g(x) = x + 2, find: a) f • g(x) b) The value of x for which f(g(x)) = 21</p>
              <div className="card-actions">
                <button className="btn btn-warning">
                  View Solution
                </button>
              </div>
            </div>
          </div>

          {/* Biology Question */}
          <div className="card bg-base-100 shadow-sm">
            <div className="card-body">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="card-title">
                  Mathematics • 2023 • Question 2
                </h3>                
              </div>
              <p className="mb-4">Factor the polynomial 5x - 15. </p>
              <div className="card-actions">
                <button className="btn btn-warning">
                  View Solution
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

 