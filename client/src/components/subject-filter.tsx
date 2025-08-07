import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mountain, Calculator, FlaskConical, Layers } from "lucide-react";

interface SubjectFilterProps {
  selectedSubject: string;
  onSubjectChange: (subject: string) => void;
}

const subjects = [
  { id: "all", name: "All Subjects", icon: Layers, color: "edu-primary" },
  { id: "geology", name: "Geology", icon: Mountain, color: "geology" },
  { id: "math", name: "Mathematics", icon: Calculator, color: "math" },
  { id: "science", name: "Science", icon: FlaskConical, color: "science" },
];

export default function SubjectFilter({ selectedSubject, onSubjectChange }: SubjectFilterProps) {
  return (
    <Card className="bg-white shadow-sm border border-gray-200 dark:bg-card dark:border-border">
      <CardContent className="p-6">
        <h2 className="text-lg font-semibold mb-4">Choose Your Subject</h2>
        <div className="flex flex-wrap gap-3">
          {subjects.map((subject) => {
            const Icon = subject.icon;
            const isSelected = selectedSubject === subject.id;
            
            return (
              <Button
                key={subject.id}
                onClick={() => onSubjectChange(subject.id)}
                data-testid={`button-filter-${subject.id}`}
                variant="outline"
                className={`px-4 py-2 font-medium transition-all hover:shadow-md ${
                  isSelected
                    ? subject.id === "all"
                      ? "bg-edu-primary text-white border-edu-primary hover:bg-edu-primary"
                      : subject.id === "geology"
                      ? "bg-geology text-white border-geology hover:bg-geology"
                      : subject.id === "math"
                      ? "bg-math text-white border-math hover:bg-math"
                      : "bg-science text-white border-science hover:bg-science"
                    : subject.id === "geology"
                    ? "border-geology geology hover:bg-geology hover:text-white"
                    : subject.id === "math"
                    ? "border-math math hover:bg-math hover:text-white"
                    : subject.id === "science"
                    ? "border-science science hover:bg-science hover:text-white"
                    : "border-edu-primary edu-primary hover:bg-edu-primary hover:text-white"
                }`}
              >
                <Icon className="w-4 h-4 mr-2" />
                {subject.name}
              </Button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
