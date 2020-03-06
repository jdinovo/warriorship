export interface Question {
  id: number;
  question: string;
  answers: string[];
  selectedAnswer?: number;
}
