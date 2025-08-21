
import type { SVGProps, ReactNode } from 'react';

export interface Lesson {
  title: string;
  analogy: string;
}

export interface Chapter {
  title: string;
  lessons: Lesson[];
}

export interface Role {
  title: string;
  description: string;
  icon: (props: SVGProps<SVGSVGElement>) => ReactNode;
  chapters: Chapter[];
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export enum AppView {
  LANDING,
  ROLE_SELECTION,
  LEARNING,
  QUIZ,
}
