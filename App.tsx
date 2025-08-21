
import React, { useState, useEffect, useCallback } from 'react';
import { AppView, Role, Chapter, Lesson, QuizQuestion } from './types';
import { ROLES, APP_NAME } from './constants';
import { generateLessonContent, generateChapterQuiz } from './services/geminiService';
import Header from './components/Header';
import Footer from './components/Footer';
import Loader from './components/Loader';
import Quiz from './components/Quiz';
import MarkdownRenderer from './components/MarkdownRenderer';

const App: React.FC = () => {
    const [view, setView] = useState<AppView>(AppView.LANDING);
    const [selectedRole, setSelectedRole] = useState<Role | null>(null);
    const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);
    const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
    
    const [lessonContent, setLessonContent] = useState<string>('');
    const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[] | null>(null);
    
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [loadingText, setLoadingText] = useState<string>('Loading...');
    const [error, setError] = useState<string | null>(null);

    const handleSelectRole = (role: Role) => {
        setSelectedRole(role);
        setSelectedChapter(role.chapters[0]);
        setSelectedLesson(null);
        setLessonContent('');
        setView(AppView.LEARNING);
    };

    const handleSelectLesson = useCallback(async (lesson: Lesson) => {
        if (!selectedRole || !selectedChapter) return;
        
        setSelectedLesson(lesson);
        setIsLoading(true);
        setLoadingText(`Generating content for "${lesson.title}"...`);
        setError(null);
        try {
            const content = await generateLessonContent(selectedRole, selectedChapter, lesson);
            setLessonContent(content);
        } catch (e) {
            setError('Failed to load lesson content. Please try again.');
        } finally {
            setIsLoading(false);
        }
    }, [selectedRole, selectedChapter]);

    const handleStartQuiz = useCallback(async (chapter: Chapter) => {
        if (!selectedRole) return;

        setSelectedChapter(chapter);
        setIsLoading(true);
        setLoadingText(`Preparing quiz for "${chapter.title}"...`);
        setError(null);
        try {
            const questions = await generateChapterQuiz(selectedRole, chapter);
            setQuizQuestions(questions);
            setView(AppView.QUIZ);
        } catch (e) {
            setError('Failed to generate quiz. Please try again.');
        } finally {
            setIsLoading(false);
        }
    }, [selectedRole]);
    
    const resetToHome = () => {
        setView(AppView.LANDING);
        setSelectedRole(null);
        setSelectedChapter(null);
        setSelectedLesson(null);
        setError(null);
    };

    const renderLandingPage = () => (
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
            <div className="absolute inset-0 -z-10 h-full w-full bg-brand-primary bg-[radial-gradient(#2d305a_1px,transparent_1px)] [background-size:16px_16px]"></div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4">
                Unlock Your Tech Potential.
            </h1>
            <p className="text-lg md:text-xl text-brand-text max-w-3xl mx-auto mb-8">
                {APP_NAME} transforms complex technology into simple stories, guiding you from beginner to pro with our unique, analogy-driven learning paths.
            </p>
            <button 
                onClick={() => setView(AppView.ROLE_SELECTION)}
                className="px-8 py-4 bg-brand-accent text-white font-bold rounded-lg text-lg hover:bg-blue-600 transition-transform transform hover:scale-105 duration-300 shadow-lg shadow-blue-500/30"
            >
                Start Your Journey
            </button>
        </div>
    );

    const renderRoleSelection = () => (
        <div className="container mx-auto px-4 py-12">
            <h2 className="text-4xl font-bold text-center mb-2 text-white">Choose Your Path</h2>
            <p className="text-lg text-center text-brand-text mb-12">Select a role to begin your mastery journey.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {ROLES.map(role => (
                    <div key={role.title} 
                        onClick={() => handleSelectRole(role)}
                        className="bg-brand-secondary rounded-lg p-6 flex flex-col items-start cursor-pointer hover:bg-brand-accent/20 border border-brand-secondary hover:border-brand-accent transition-all duration-300 transform hover:-translate-y-2">
                        <div className="p-3 bg-brand-accent/20 rounded-lg mb-4">
                            <role.icon className="w-8 h-8 text-brand-accent" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{role.title}</h3>
                        <p className="text-brand-text flex-grow">{role.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );

    const renderLearningPage = () => {
        if (!selectedRole || !selectedChapter) return null;
        
        return (
            <div className="container mx-auto px-4 py-8">
                <div className="flex items-center mb-8">
                    <div className="p-3 bg-brand-accent/20 rounded-lg mr-4">
                        <selectedRole.icon className="w-10 h-10 text-brand-accent" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-white">{selectedRole.title}</h2>
                        <p className="text-brand-text">Your learning path to becoming a specialist.</p>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar */}
                    <aside className="w-full lg:w-1/3 xl:w-1/4 flex-shrink-0">
                        <div className="bg-brand-secondary rounded-lg p-4 sticky top-24">
                            <h3 className="text-xl font-bold mb-4 px-2">Curriculum</h3>
                            <div className="space-y-2">
                                {selectedRole.chapters.map(chapter => (
                                    <div key={chapter.title}>
                                        <button 
                                            onClick={() => setSelectedChapter(chapter)}
                                            className={`w-full text-left font-semibold p-2 rounded ${selectedChapter.title === chapter.title ? 'bg-brand-accent/30 text-white' : 'hover:bg-brand-primary'}`}>
                                            {chapter.title}
                                        </button>
                                        {selectedChapter.title === chapter.title && (
                                            <div className="pl-4 mt-2 space-y-1 border-l-2 border-brand-accent/50">
                                                {chapter.lessons.map(lesson => (
                                                    <button key={lesson.title} 
                                                        onClick={() => handleSelectLesson(lesson)}
                                                        className={`w-full text-left p-2 text-sm rounded ${selectedLesson?.title === lesson.title ? 'bg-brand-accent text-white' : 'text-brand-text hover:bg-brand-primary'}`}>
                                                        {lesson.title}
                                                    </button>
                                                ))}
                                                 <button 
                                                        onClick={() => handleStartQuiz(chapter)}
                                                        className="w-full text-left p-2 text-sm rounded font-semibold text-brand-accent hover:bg-brand-primary">
                                                        Take Chapter Quiz &rarr;
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </aside>

                    {/* Content Area */}
                    <main className="w-full lg:w-2/3 xl:w-3/4 bg-brand-secondary rounded-lg p-8 min-h-[60vh]">
                        {error && <div className="text-red-400 bg-red-900/50 p-4 rounded-md">{error}</div>}
                        {!selectedLesson && !lessonContent && (
                            <div className="flex flex-col items-center justify-center h-full text-center">
                                <h3 className="text-2xl font-bold">Welcome to your learning journey!</h3>
                                <p className="text-brand-text mt-2">Select a lesson from the sidebar to get started.</p>
                            </div>
                        )}
                        {selectedLesson && lessonContent && (
                            <article>
                                <h1 className="text-4xl font-bold mb-2 text-white">{selectedLesson.title}</h1>
                                <p className="text-lg text-brand-accent mb-6"><em>Analogy: {selectedLesson.analogy}</em></p>
                                <div className="h-px bg-brand-primary my-6"></div>
                                <MarkdownRenderer content={lessonContent} />
                            </article>
                        )}
                    </main>
                </div>
            </div>
        );
    };

    const renderQuizPage = () => {
        if (!quizQuestions || !selectedChapter) return null;
        return (
            <div className="container mx-auto px-4 py-12">
                 <Quiz 
                    questions={quizQuestions} 
                    chapterTitle={selectedChapter.title}
                    onComplete={() => {
                        setQuizQuestions(null);
                        setView(AppView.LEARNING);
                    }}
                 />
            </div>
        );
    };

    const renderView = () => {
        switch (view) {
            case AppView.LANDING:
                return renderLandingPage();
            case AppView.ROLE_SELECTION:
                return renderRoleSelection();
            case AppView.LEARNING:
                return renderLearningPage();
            case AppView.QUIZ:
                return renderQuizPage();
            default:
                return renderLandingPage();
        }
    };

    return (
        <div className="min-h-screen bg-brand-primary text-brand-text flex flex-col">
            {isLoading && <Loader text={loadingText} />}
            <Header onHomeClick={resetToHome} />
            <main className="flex-grow">
                {renderView()}
            </main>
            <Footer />
        </div>
    );
};

export default App;
