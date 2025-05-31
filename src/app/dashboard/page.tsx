import Activity from "@/components/Activity";
import ProgressBar from "@/components/ProgressBar";
import StatCard from "@/components/StatCard"

export default function Dashboard() {
  return(
    <>
      <div className="p-8">

        <h1 className="text-4xl font-bold mb-10">Welcome, Eastwood</h1>

        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            stat = "75%"
            title = "Overall Progress."
          />
          <StatCard
            stat = "42"
            title = "Quizes Completed."
          />
          <StatCard
            stat = "8"
            title = "Subjects."
          />
          <StatCard
            stat = "180"
            title = "Hours Studied."
          />
        </div>

      </div>

      <Activity />

      
      <div className="flex justify-center my-5 text-4xl font-bold">Overall Progress</div>

      <ProgressBar />


    </>
  );
}