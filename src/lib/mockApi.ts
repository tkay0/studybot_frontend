import { 
  LoginCredentials, 
  RegisterData, 
  AuthResponse, 
  User, 
  Quiz, 
  QuizAttempt, 
  UserProgress 
} from './types';

// Array of fake users for testing
const MOCK_USERS: User[] = [
  {
    id: 'user-1',
    email: 'eastwoodosei0@gmail.com',
    firstName: 'Eastwood',
    lastName: 'Osei',
    educationalLevel: 'SHS 2',
    program: 'Science',
    school: 'St. Peter\'s SHS',
    phone: '+233533413885',
    createdAt: '2024-01-01T00:00:00Z'
  },
]


// Array of fake quizzes for testing
const MOCK_QUIZZES: Quiz[] = [
  {
    id: 'quiz-1',
    title: 'Basic Mathematics',
    description: 'Test your fundamental math skills',
    difficulty: 'easy',
    category: 'Mathematics',
    timeLimit: 15,
    createdAt: '2024-01-01T00:00:00Z',
    questions: [
      {
        id: 'q1',
        question: 'What is 2 + 2?',
        options: ['3', '4', '5', '6'],
        correctAnswer: 1, // Index 1 = '4'
        explanation: '2 + 2 equals 4'
      },
      {
        id: 'q2',
        question: 'What is 10 ÷ 2?',
        options: ['4', '5', '6', '7'],
        correctAnswer: 1, // Index 1 = '5'
        explanation: '10 divided by 2 equals 5'
      }
    ]
  },
  {
    id: 'quiz-2',
    title: 'English Grammar',
    description: 'Test your English grammar knowledge',
    difficulty: 'medium',
    category: 'English',
    timeLimit: 20,
    createdAt: '2024-01-02T00:00:00Z',
    questions: [
      {
        id: 'q3',
        question: 'Which is correct?',
        options: ['I have went', 'I have gone', 'I has gone', 'I has went'],
        correctAnswer: 1, // 'I have gone'
        explanation: 'The correct past participle of "go" is "gone"'
      }
    ]
  }
];

// Array of fake quiz attempts for testing
const MOCK_ATTEMPTS: QuizAttempt[] = [
  {
    id: 'attempt-1',
    quizId: 'quiz-1',
    userId: 'user-1',
    answers: [1, 1], // They got both questions right
    score: 2,
    totalQuestions: 2,
    completedAt: '2024-01-10T10:30:00Z',
    timeSpent: 180 // 3 minutes in seconds
  }
];

// Helper function to simulate network delay
// This makes our fake API feel more realistic
const delay = (ms: number = 500) => new Promise(resolve => setTimeout(resolve, ms));

// MOCK AUTHENTICATION FUNCTIONS
// These replace real API calls during development

export const mockAuthApi = {
  // This function simulates logging in
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    await delay(); // Wait 500ms to simulate network request
    
    // Look for a user with the provided email
    const user = MOCK_USERS.find(u => u.email === credentials.email);
    
    // Check if user exists and password is correct (we use 'password123' for testing)
    if (!user || credentials.password !== 'password123') {
      throw new Error('Invalid email or password');
    }
    
    // Return successful login response
    return {
      user,
      token: 'mock-jwt-token-' + Date.now(), // Fake token
      refreshToken: 'mock-refresh-token-' + Date.now()
    };
  },

  // This function simulates registering a new user
  register: async (userData: RegisterData): Promise<AuthResponse> => {
    await delay();
    
    // Check if user already exists
    const existingUser = MOCK_USERS.find(u => u.email === userData.email);
    if (existingUser) {
      throw new Error('User with this email already exists');
    }
    
    // Create new user object
    const newUser: User = {
      id: 'user-' + Date.now(), // Generate fake ID
      email: userData.email,
      firstName: userData.firstName,
      lastName: userData.lastName,
      educationalLevel: userData.educationalLevel,
      program: userData.program,
      school: userData.school,
      phone: userData.phone,
      createdAt: new Date().toISOString() // Current time as ISO string
    };
    
    // Add to our fake database
    MOCK_USERS.push(newUser);
    
    // Return successful registration response
    return {
      user: newUser,
      token: 'mock-jwt-token-' + Date.now(),
      refreshToken: 'mock-refresh-token-' + Date.now()
    };
  },

  // This function simulates logging out
  logout: async (): Promise<void> => {
    await delay(200); // Shorter delay for logout
    // In real implementation, this would invalidate the token on the server
  },

  // This function simulates getting current user info
  getCurrentUser: async (): Promise<User> => {
    await delay();
    
    // Get user data from localStorage (where we store it after login)
    const userData = localStorage.getItem('user');
    if (!userData) {
      throw new Error('No authenticated user');
    }
    
    return JSON.parse(userData); // Convert JSON string back to object
  }
};

// MOCK USER FUNCTIONS
export const mockUserApi = {
  // Get user profile (same as getCurrentUser for now)
  getProfile: async (): Promise<User> => {
    await delay();
    const userData = localStorage.getItem('user');
    if (!userData) {
      throw new Error('No authenticated user');
    }
    return JSON.parse(userData);
  },

  // Get user's progress/statistics
  getProgress: async (): Promise<UserProgress> => {
    await delay();
    
    const currentUser = JSON.parse(localStorage.getItem('user') || '{}');
    const userAttempts = MOCK_ATTEMPTS.filter(a => a.userId === currentUser.id);
    
    // Calculate statistics
    const totalQuizzesTaken = userAttempts.length;
    const averageScore = userAttempts.length > 0 
      ? userAttempts.reduce((sum, attempt) => sum + (attempt.score / attempt.totalQuestions * 100), 0) / userAttempts.length
      : 0;
    const totalTimeSpent = userAttempts.reduce((sum, attempt) => sum + attempt.timeSpent, 0) / 60; // Convert to minutes
    
    return {
      totalQuizzesTaken,
      averageScore,
      totalTimeSpent,
      favoriteCategory: 'Mathematics', // Hardcoded for demo
      recentAttempts: userAttempts.slice(0, 5), // Last 5 attempts
      streak: Math.floor(Math.random() * 14) + 1 // Random streak for demo
    };
  }
};

// MOCK QUIZ FUNCTIONS
export const mockQuizApi = {
  // Get all available quizzes
  getAllQuizzes: async (): Promise<Quiz[]> => {
    await delay();
    return MOCK_QUIZZES;
  },

  // Get a specific quiz by ID
  getQuizById: async (id: string): Promise<Quiz> => {
    await delay();
    const quiz = MOCK_QUIZZES.find(q => q.id === id);
    if (!quiz) {
      throw new Error('Quiz not found');
    }
    return quiz;
  },

  // Submit quiz answers and get results
  submitQuiz: async (quizId: string, answers: number[]): Promise<QuizAttempt> => {
    await delay(1000); // Longer delay to simulate processing
    
    const quiz = MOCK_QUIZZES.find(q => q.id === quizId);
    if (!quiz) {
      throw new Error('Quiz not found');
    }
    
    const currentUser = JSON.parse(localStorage.getItem('user') || '{}');
    
    // Calculate score by comparing answers
    let score = 0;
    answers.forEach((answer, index) => {
      if (quiz.questions[index] && quiz.questions[index].correctAnswer === answer) {
        score++;
      }
    });
    
    const attempt: QuizAttempt = {
      id: 'attempt-' + Date.now(),
      quizId,
      userId: currentUser.id,
      answers,
      score,
      totalQuestions: quiz.questions.length,
      completedAt: new Date().toISOString(),
      timeSpent: Math.floor(Math.random() * 300) + 60 // Random time 1-6 minutes
    };
    
    // Add to fake database
    MOCK_ATTEMPTS.push(attempt);
    
    return attempt;
  }
};

// Helper function to handle errors in our mock API
export const handleMockApiError = (error: any): string => {
  if (error.message) {
    return error.message;
  }
  return 'An unexpected error occurred';
};