export default function Questions() {
  return(
    <div className="px-10">
      <div className="join join-vertical bg-base-100 mx-auto">
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio"/>
          <div className="collapse-title font-semibold">What is StudyBot?</div>
          <div className="collapse-content text-sm">The Study Bot is a platform that aims to facilitate learning through easy access to past questions, 
          quizzes, study reminders, and educational resources across multiple platforms including 
          WhatsApp, Telegram, and a dedicated web application.</div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio"/>
          <div className="collapse-title font-semibold">How do I create an account?</div>
          <div className="collapse-content text-sm">Click the "Log in" button in the top right corner and follow the registration process.</div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio"/>
          <div className="collapse-title font-semibold">What platforms can I use StudyBot on?</div>
          <div className="collapse-content text-sm">StudyBot is available on the web, Telegram, and WhatsApp. This means you can study wherever you are, whether you're on your laptop or chatting on your phone.</div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio"/>
          <div className="collapse-title font-semibold">Can I track my progress over time?</div>
          <div className="collapse-content text-sm">Absolutely. StudyBot helps you monitor quiz scores, study streaks, and areas for improvement so you can stay on track with your goals.</div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio"/>
          <div className="collapse-title font-semibold">Who is StudyBot for?</div>
          <div className="collapse-content text-sm">StudyBot is designed to assist Senior High School (SHS) Students, Teachers and educators, Educational content creators, and Educational Institutions.</div>
        </div>
      </div>
    </div>
  );
} 