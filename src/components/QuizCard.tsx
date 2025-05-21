export default function QuizCard() {
  return(
    <div className="p-8 flex items-center justify-center">
      <div className="card shadow-sm bg-white w-250">
        <div>
          <div className="card-body">

            {/* Title of the Question Card */}
            <div className="card-title flex-row justify-between">
                <div>Mathematics · Algebra</div>
                <div>20 Questions · 30 Minutes</div>
            </div>
            <h3>Quesiton 1 of 20</h3>
            {/* Question */}
            <div className="font-medium text-base">
              If f(x) = 2x² - 3x + 1 and g(x) = x + 2, find: a) f • g(x) b) The value of x for which f(g(x)) = 21
            </div>

            {/* Answer Options */}
            <fieldset className="fieldset text-base w-64 p-4 font-medium">
              <label className="label border rounded-sm p-3">
                <input type="radio" name = "question1"  className="radio" />
                2(x + 2)² - 3(x + 2) + 1; x = 3
              </label>
              <label className="label border rounded-sm p-3">
                <input type="radio" name = "question1"  className="radio" />
                2(x + 2)² - 3(x + 2) + 1; x = 3
              </label>
              <label className="label border rounded-sm p-3">
                <input type="radio" name = "question1"  className="radio" />
                2(x + 2)² - 3(x + 2) + 1; x = 3
              </label>
              <label className="label border rounded-sm p-3">
                <input type="radio" name = "question1"  className="radio" />
                2(x + 2)² - 3(x + 2) + 1; x = 3
              </label>
            </fieldset>

            <div className="flex flex-row justify-between">
              <button className="btn">
                Previous
              </button>
              <button className="btn btn-warning">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}