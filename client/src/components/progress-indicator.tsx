import { Card, CardContent } from "@/components/ui/card";

interface ProgressIndicatorProps {
  currentCard: number;
  totalCards: number;
  completedCards: number;
}

export default function ProgressIndicator({ currentCard, totalCards, completedCards }: ProgressIndicatorProps) {
  const progressPercentage = totalCards > 0 ? Math.round((completedCards / totalCards) * 100) : 0;

  return (
    <Card className="bg-white shadow-sm border border-gray-200 dark:bg-card dark:border-border">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold" data-testid="text-learning-progress">
            Learning Progress
          </h3>
          <span className="text-sm text-gray-600 dark:text-gray-400" data-testid="text-progress-percentage">
            {progressPercentage}% Complete
          </span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div 
            className="bg-edu-secondary h-2 rounded-full transition-all duration-300" 
            style={{ width: `${progressPercentage}%` }}
            data-testid="progress-bar"
          ></div>
        </div>
        <div className="flex items-center justify-between mt-3 text-sm text-gray-600 dark:text-gray-400">
          <span data-testid="text-completed-cards">
            {completedCards} card{completedCards !== 1 ? 's' : ''} completed
          </span>
          <span data-testid="text-remaining-cards">
            {totalCards - completedCards} card{(totalCards - completedCards) !== 1 ? 's' : ''} remaining
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
