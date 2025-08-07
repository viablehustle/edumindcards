import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, Lock, Lightbulb, Check, Mountain, Calculator, FlaskConical } from "lucide-react";
import type { Flashcard } from "@shared/schema";

interface FlashcardProps {
  flashcard: Flashcard;
  onComplete?: () => void;
}

const getSubjectInfo = (subject: string) => {
  switch (subject) {
    case "geology":
      return {
        name: "Geology",
        icon: Mountain,
        gradientFrom: "geology",
        gradientTo: "geology",
        bgColor: "bg-geology",
        textColor: "geology",
        borderColor: "border-geology"
      };
    case "math":
      return {
        name: "Mathematics",
        icon: Calculator,
        gradientFrom: "math",
        gradientTo: "math", 
        bgColor: "bg-math",
        textColor: "math",
        borderColor: "border-math"
      };
    case "science":
      return {
        name: "Science",
        icon: FlaskConical,
        gradientFrom: "science",
        gradientTo: "science",
        bgColor: "bg-science",
        textColor: "science",
        borderColor: "border-science"
      };
    default:
      return {
        name: "General",
        icon: Mountain,
        gradientFrom: "edu-primary",
        gradientTo: "edu-primary",
        bgColor: "bg-edu-primary",
        textColor: "edu-primary",
        borderColor: "border-edu-primary"
      };
  }
};

export default function Flashcard({ flashcard, onComplete }: FlashcardProps) {
  const [revealedHints, setRevealedHints] = useState<boolean[]>(new Array(5).fill(false));
  const [answerRevealed, setAnswerRevealed] = useState(false);
  
  const subjectInfo = getSubjectInfo(flashcard.subject);
  const Icon = subjectInfo.icon;
  const hintsRevealedCount = revealedHints.filter(revealed => revealed).length;

  const revealHint = (index: number) => {
    if (index <= hintsRevealedCount) {
      const newRevealedHints = [...revealedHints];
      newRevealedHints[index] = true;
      setRevealedHints(newRevealedHints);
    }
  };

  const revealAnswer = () => {
    setAnswerRevealed(true);
    onComplete?.();
  };

  const resetCard = () => {
    setRevealedHints(new Array(5).fill(false));
    setAnswerRevealed(false);
  };

  return (
    <div className="card-container">
      <Card className="bg-white shadow-lg border border-gray-200 overflow-hidden animate-fade-in dark:bg-card dark:border-border">
        {/* Card Header */}
        <div 
          className="p-6 text-white"
          style={{
            background: `linear-gradient(to right, var(--${subjectInfo.gradientFrom}), var(--${subjectInfo.gradientTo}))`
          }}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <Icon className="w-4 h-4" />
              </div>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                {subjectInfo.name}
              </Badge>
            </div>
            <div className="text-sm opacity-90">Grade 8 Level</div>
          </div>
          <h3 className="text-2xl font-semibold leading-tight" data-testid="text-question">
            {flashcard.question}
          </h3>
        </div>

        {/* Hints Section */}
        <CardContent className="p-6 space-y-4">
          <div className="flex items-center justify-between mb-6">
            <h4 className="text-lg font-semibold">Discovery Hints</h4>
            <div className="text-sm text-gray-600 dark:text-gray-400" data-testid="text-hints-count">
              {hintsRevealedCount} of {flashcard.hints.length} hints revealed
            </div>
          </div>

          {/* Hints */}
          <div className="space-y-4">
            {flashcard.hints.map((hint, index) => {
              const isRevealed = revealedHints[index];
              const canReveal = index === hintsRevealedCount;
              
              return (
                <div
                  key={index}
                  className={`hint-item border rounded-lg p-4 transition-all ${
                    isRevealed
                      ? "border-edu-secondary bg-green-50 dark:bg-green-900/20"
                      : canReveal
                      ? "border-gray-200 cursor-pointer hover:shadow-md dark:border-gray-700"
                      : "border-gray-200 opacity-50 dark:border-gray-700"
                  }`}
                  onClick={() => canReveal && revealHint(index)}
                  data-testid={`hint-${index + 1}`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      isRevealed 
                        ? "bg-edu-secondary" 
                        : "bg-gray-100 dark:bg-gray-800"
                    }`}>
                      {isRevealed ? (
                        <Lightbulb className="w-4 h-4 text-white" />
                      ) : (
                        <Lock className="w-4 h-4 text-gray-400" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className={`font-medium ${
                        isRevealed 
                          ? "text-green-800 dark:text-green-200" 
                          : "text-gray-400 dark:text-gray-500"
                      }`}>
                        Hint {index + 1}
                      </div>
                      {isRevealed && (
                        <div className="text-sm text-green-700 dark:text-green-300 hint-text animate-fade-in mt-1">
                          {hint}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Answer Section */}
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            {!answerRevealed ? (
              <Button
                onClick={revealAnswer}
                className="w-full bg-edu-secondary text-white hover:bg-green-600 transition-colors"
                data-testid="button-reveal-answer"
              >
                <Eye className="w-4 h-4 mr-2" />
                Reveal Answer
              </Button>
            ) : (
              <div className="answer-section p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg animate-slide-up" data-testid="answer-section">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-edu-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-green-800 dark:text-green-200 mb-2" data-testid="text-answer">
                      Answer: {flashcard.answer}
                    </div>
                    <p className="text-green-700 dark:text-green-300 text-sm leading-relaxed" data-testid="text-explanation">
                      {flashcard.explanation}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Reset Button */}
          {(hintsRevealedCount > 0 || answerRevealed) && (
            <div className="mt-4">
              <Button
                onClick={resetCard}
                variant="outline"
                size="sm"
                data-testid="button-reset-card"
              >
                Reset Card
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
