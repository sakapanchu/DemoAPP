import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import LoanSummaryCard from "./LoanSummaryCard";
import type { BorrowerDetail as Detail } from "@/mocks/sample";
import { AlertTriangle, FileText, Send, CheckCircle2 } from "lucide-react";
import { useToast } from "../../hooks/use-toast";

export default function BorrowerDetail({ detail }: { detail: Detail | null }) {
  const { toast } = useToast();

  const handleAction = (action: string) => {
    let message = "";
    switch (action) {
      case "request-documents":
        message = "Documents requested.";
        break;
      case "send-valuer":
        message = "Valuer notified.";
        break;
      case "approve":
        message = "Loan approved.";
        break;
      case "escalate":
        message = "Escalated to Credit Committee.";
        break;
      default:
        message = "Action completed.";
    }
    toast({
      title: "Success",
      description: message,
      className: "bg-gradient-to-br from-green/10 to-accent/10 text-green-900 border-green-500"
    });
  };

  return (
    <Card className="md:col-span-1">
      <CardHeader>
        <CardTitle>Borrower Detail</CardTitle>
      </CardHeader>
      <CardContent>
        {detail ? ( 
          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="text-lg font-semibold">{detail.name}</h2>
                <p className="text-sm text-muted-foreground">{detail.email} • {detail.phone}</p>
              </div>
              <div className="text-right">
                <div className="text-sm">Loan Amount</div>
                <div className="text-xl font-bold">${detail.loan_amount.toLocaleString()}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary">{detail.status}</Badge>
            </div>

            <Accordion type="multiple" className="w-full">
              <AccordionItem value="ai-explain">
                <AccordionTrigger>AI Explainability</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2">
                    {detail.ai_flags.map((flag) => (
                      <li key={flag} className="flex items-center gap-2 text-destructive">
                        <AlertTriangle className="h-4 w-4" />
                        <span>{flag}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Button size="sm" onClick={() => handleAction("request-documents")}><FileText className="h-4 w-4" /> Request Documents</Button>
                    <Button size="sm" variant="secondary" onClick={() => handleAction("send-valuer")}><Send className="h-4 w-4" /> Send to Valuer</Button>
                    <Button size="sm" variant="outline" onClick={() => handleAction("approve")}><CheckCircle2 className="h-4 w-4" /> Approve</Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="grid grid-cols-2 gap-4">
              <LoanSummaryCard label="Employment" value={detail.employment} />
              <LoanSummaryCard label="Existing Loan" value={`$${detail.existing_loan.toLocaleString()}`} />
              <LoanSummaryCard label="Credit Score" value={String(detail.credit_score)} />
              <LoanSummaryCard label="Source of Funds" value={detail.source_of_funds} />
            </div>

            <div className="rounded-lg border bg-amber-50 border-red-300yyy text-amber-900 p-4 flex items-start gap-3">
              <AlertTriangle className="h-5 w-5" />
              <div>
                <p className="text-sm font-medium">Risk Signal</p>
                <p className="text-sm">{detail.risk_signal}</p>
              </div>
            </div>

            <div className="flex justify-end">
              <Button disabled={!detail.risk_signal} onClick={() => handleAction("escalate")}>Escalate to Credit Committee</Button>
            </div>
          </div>
        ) : (
          <p className="text-muted-foreground">Select a borrower to view details.</p>
        )}
      </CardContent>
    </Card>
  );
}
