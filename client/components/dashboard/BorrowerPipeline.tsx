import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import type { Borrower } from "@/mocks/sample";

export type PipelineData = {
  new: Borrower[];
  in_review: Borrower[];
  approved: Borrower[];
};

export default function BorrowerPipeline({
  activeTab,
  onTabChange,
  pipeline,
  activeBorrowerId,
  onSelect,
}: {
  activeTab: "new" | "in_review" | "approved";
  onTabChange: (t: "new" | "in_review" | "approved") => void;
  pipeline: PipelineData;
  activeBorrowerId?: string;
  onSelect: (b: Borrower) => void;
}) {
  return (
    <Card className="md:col-span-1">
      <CardHeader>
        <CardTitle>Pipeline</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={(v) => onTabChange(v as any)} className="w-full">
          <TabsList className="grid grid-cols-3">
            <TabsTrigger value="new">New</TabsTrigger>
            <TabsTrigger value="in_review">In Review</TabsTrigger>
            <TabsTrigger value="approved">Approved</TabsTrigger>
          </TabsList>
          <TabsContent value="new" className="mt-4">
            <BorrowerList items={pipeline.new} onSelect={onSelect} activeId={activeBorrowerId} />
          </TabsContent>
          <TabsContent value="in_review" className="mt-4">
            <BorrowerList items={pipeline.in_review} onSelect={onSelect} activeId={activeBorrowerId} />
          </TabsContent>
          <TabsContent value="approved" className="mt-4">
            <BorrowerList items={pipeline.approved} onSelect={onSelect} activeId={activeBorrowerId} emptyLabel="No approved borrowers" />
          </TabsContent>
        </Tabs>

        <Separator className="my-4" />

        <div>
          <p className="text-xs font-semibold text-muted-foreground">F-SANATISED ACTIVE</p>
          <RadioGroup defaultValue="on" className="mt-2 grid grid-cols-2 gap-2">
            <div className="flex items-center space-x-2 rounded-md border p-2">
              <RadioGroupItem value="on" id="fs-on" />
              <Label htmlFor="fs-on">On</Label>
            </div>
            <div className="flex items-center space-x-2 rounded-md border p-2">
              <RadioGroupItem value="off" id="fs-off" />
              <Label htmlFor="fs-off">Off</Label>
            </div>
          </RadioGroup>
        </div>
      </CardContent>
    </Card>
  );
}

function BorrowerList({ items, onSelect, activeId, emptyLabel }: { items: Borrower[]; onSelect: (b: Borrower) => void; activeId?: string; emptyLabel?: string }) {
  if (!items.length) return <p className="text-sm text-muted-foreground">{emptyLabel ?? "No borrowers"}</p>;
  return (
    <ul className="space-y-2">
      {items.map((b) => (
        <li key={b.id}>
          <button onClick={() => onSelect(b)} className={`w-full rounded-lg border p-3 text-left hover:bg-accent ${activeId === b.id ? "bg-accent" : ""}`}>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">{b.name}</div>
                <div className="text-xs text-muted-foreground">{b.loan_type}</div>
              </div>
              <div className="text-right">
                <div className="font-semibold">${b.amount.toLocaleString()}</div>
                <Badge variant="outline" className="mt-1">{b.status}</Badge>
              </div>
            </div>
          </button>
        </li>
      ))}
    </ul>
  );
}
