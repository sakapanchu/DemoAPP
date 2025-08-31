import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { onboarding } from "@/mocks/sample";

export default function OnboardingWorkflow() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Onboarding Workflow</CardTitle>
      </CardHeader>
      <CardContent>
        <ol className="list-decimal pl-5 space-y-2 text-sm">
          {onboarding.steps.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ol>
      </CardContent>
    </Card>
  );
}
