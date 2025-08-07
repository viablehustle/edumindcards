import { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Shuffle, GraduationCap, Settings, HelpCircle } from "lucide-react";
import Flashcard from "@/components/flashcard";
import SubjectFilter from "@/components/subject-filter";
import ProgressIndicator from "@/components/progress-indicator";
import { getAllFlashcards, getFlashcardsBySubject } from "@/data/flashcards";
import type { Flashcard as FlashcardType } from "@shared/schema";

export default function Home() {
  const [selectedSubject, setSelectedSubject] = useState("all");
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [completedCards, setCompletedCards] = useState(new Set<string>());

  const flashcards = useMemo(() => {
    if (selectedSubject === "all") {
      return getAllFlashcards();
    }
    return getFlashcardsBySubject(selectedSubject);
  }, [selectedSubject]);

  // Reset current card index when subject changes
  useEffect(() => {
    setCurrentCardIndex(0);
  }, [selectedSubject]);

  const handleSubjectChange = (subject: string) => {
    setSelectedSubject(subject);
  };

  const handleCardComplete = () => {
    if (flashcards && flashcards[currentCardIndex]) {
      setCompletedCards(prev => new Set([...prev, flashcards[currentCardIndex].id]));
    }
  };

  const handleNextCard = () => {
    if (flashcards && currentCardIndex < flashcards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    }
  };

  const handlePreviousCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
    }
  };

  const handleShuffle = () => {
    if (flashcards && flashcards.length > 1) {
      let newIndex;
      do {
        newIndex = Math.floor(Math.random() * flashcards.length);
      } while (newIndex === currentCardIndex);
      setCurrentCardIndex(newIndex);
    }
  };


  if (!flashcards || flashcards.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="w-full max-w-md mx-4">
          <CardContent className="pt-6 text-center">
            <p className="text-gray-600 dark:text-gray-400">No flashcards found for the selected subject.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const currentCard = flashcards[currentCardIndex];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white dark:bg-card shadow-sm border-b border-gray-200 dark:border-border">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-edu-primary rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-semibold" data-testid="text-app-title">
                  Grade 8 Study Cards
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">Interactive Learning Platform</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-600 dark:text-gray-400" data-testid="text-card-counter">
                Card {currentCardIndex + 1} of {flashcards.length}
              </div>
              <div className="bg-edu-secondary/10 px-3 py-1 rounded-full">
                <span className="text-edu-secondary text-sm font-medium">Study Mode</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Subject Filter */}
        <div className="mb-8">
          <SubjectFilter selectedSubject={selectedSubject} onSubjectChange={handleSubjectChange} />
        </div>

        {/* Main Card */}
        <div className="max-w-4xl mx-auto mb-8">
          <Flashcard flashcard={currentCard} onComplete={handleCardComplete} />
        </div>

        {/* Navigation Controls */}
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <Button
              onClick={handlePreviousCard}
              disabled={currentCardIndex === 0}
              variant="outline"
              className="flex items-center space-x-2"
              data-testid="button-previous-card"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </Button>

            <div className="flex items-center space-x-4">
              <Button
                onClick={handleShuffle}
                variant="outline"
                size="sm"
                data-testid="button-shuffle"
              >
                <Shuffle className="w-4 h-4 mr-2" />
                Shuffle
              </Button>
            </div>

            <Button
              onClick={handleNextCard}
              disabled={currentCardIndex === flashcards.length - 1}
              className="flex items-center space-x-2 bg-edu-primary hover:bg-blue-600"
              data-testid="button-next-card"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="max-w-4xl mx-auto">
          <ProgressIndicator
            currentCard={currentCardIndex + 1}
            totalCards={flashcards.length}
            completedCards={completedCards.size}
          />
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col space-y-3">
        <Button
          size="icon"
          variant="outline"
          className="w-12 h-12 bg-white dark:bg-card shadow-lg rounded-full"
          data-testid="button-settings"
        >
          <Settings className="w-5 h-5" />
        </Button>
        <Button
          size="icon"
          className="w-12 h-12 bg-edu-primary shadow-lg rounded-full text-white hover:bg-blue-600"
          data-testid="button-help"
        >
          <HelpCircle className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}
