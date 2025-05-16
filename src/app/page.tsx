import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import InfoCard from "@/components/InfoCard";
import Feedback from "@/components/Feedback";
import Advert from "@/components/WhatsappTelegramAd";

export default function Home() {
  return (
  <>
    <HeroSection />
    
    <div className="flex justify-center my-20 text-4xl font-bold">Why Study Bot?</div>

    <div className="mx-auto mb-20 grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-screen-xl px-4">
      <InfoCard
        title = "Practice Questions"
        info = "Monitor your study streak, quiz scores, and overall progress to stay motivated and focused."
      />
      <InfoCard
        title = "Track Progress"
        info = "Access thousands of practice questions across various subjects to test your knowledge and improve understanding."
      />
      <InfoCard
        title = "Personalized Learning"
        info = "Get recommendations based on your performance and focus more on areas that need improvement."
      />
    </div>

    <div className="flex justify-center my-20 text-4xl font-bold">What Our Users Say</div>

    <div className="grid grid-cols-1 gap-4">
      <Feedback
      feedbackText="StudyBot helped me raise my GPA from 3.2 to 3.8 in just one semester. The personalized study plans and AI assistance made all the difference."
      sender="James kofie"
      initials="JK"

     />
     <Feedback
      feedbackText="As a teacher, I've seen remarkable improvement in student engagement since introducing StudyBot in my classroom. It adapts to each student's needs perfectly."
      sender="Maria R."
      initials="MR"

     />
     <Feedback
      feedbackText="The quiz generator and progress tracking features have revolutionized how I prepare for exams. I feel more confident and less stressed."
      sender="Elton Koomson"
      initials="EK"
     />
    </div>
    

    <div className="flex justify-center my-20 text-4xl font-bold">Takek StudyBot Anywhere</div>


    <Advert />



  </>  
);
}
