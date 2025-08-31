import { useMemo, useState } from "react";
import BorrowerPipeline from "@/components/dashboard/BorrowerPipeline";
import BorrowerDetail from "@/components/dashboard/BorrowerDetail";
import BrokerOverview from "@/components/dashboard/BrokerOverview";
import OnboardingWorkflow from "@/components/dashboard/OnboardingWorkflow";
import { pipeline, borrowerDetail as defaultDetail, borrowerDetails, type Borrower, type BorrowerDetail } from "@/mocks/sample";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<"new" | "in_review" | "approved">("new");
  const [activeBorrower, setActiveBorrower] = useState<Borrower | null>(pipeline.new[0] ?? null);

  const detail: BorrowerDetail | null = useMemo(() => {
    if (!activeBorrower) return null;
    const fromMap = borrowerDetails[activeBorrower.id];
    if (fromMap) return fromMap;
    return { ...defaultDetail, id: activeBorrower.id, name: activeBorrower.name, loan_amount: activeBorrower.amount, status: activeBorrower.status };
  }, [activeBorrower]);

  return (
    <div className="container py-6 md:py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <BorrowerPipeline
          activeTab={activeTab}
          onTabChange={setActiveTab}
          pipeline={pipeline}
          activeBorrowerId={activeBorrower?.id}
          onSelect={setActiveBorrower}
        />

        <BorrowerDetail detail={detail} />

        <div className="md:col-span-1 space-y-6">
          <div className="hidden md:block">
            <BrokerOverview />
          </div>

          <Card className="md:hidden">
            <CardHeader>
              <CardTitle>Broker & Workflow</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                <AccordionItem value="broker">
                  <AccordionTrigger>Broker Overview</AccordionTrigger>
                  <AccordionContent>
                    <BrokerOverview />
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="workflow">
                  <AccordionTrigger>Onboarding Workflow</AccordionTrigger>
                  <AccordionContent>
                    <OnboardingWorkflow />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <div className="hidden md:block">
            <OnboardingWorkflow />
          </div>
        </div>
      </div>
    </div>
  );
}
