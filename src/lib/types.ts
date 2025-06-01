export interface User {
  id: string;                    
  email: string;                 
  firstName: string;             
  lastName: string;              
  educationalLevel?: string;     
  school: string;
  program: string;               
  phone: string;                
  profilePicture?: string;       
  createdAt: string;           
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  educationalLevel: string;
  program: string;
  school: string;
  phone: string;
}

export interface AuthResponse {
  user: User;
  token: string;
  refreshToken?: string;
}

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export interface Quiz {
  id: string;                    
  title: string;                 
  description: string;           
  questions: Question[];         
  timeLimit?: number;            
  difficulty: 'easy' | 'medium' | 'hard';  
  category: string;              
  createdAt: string;
}

export interface QuizAttempt {
  id: string;                    
  quizId: string;                
  userId: string;                 
  answers: number[];              
  score: number;                 
  totalQuestions: number;      
  completedAt: string;            
  timeSpent: number;              
}

export interface UserProgress {
  totalQuizzesTaken: number;   
  averageScore: number;          
  totalTimeSpent: number;        
  favoriteCategory: string;      
  recentAttempts: QuizAttempt[]; 
  streak: number;                
}

export interface ApiResponse<T> {
  success: boolean;             
  data: T;                       
  message?: string;              
}

export interface ApiError {
  success: false;                
  message: string;               
  errors?: Record<string, string[]>; 
}