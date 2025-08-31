import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { TrendingUp, Phone, Mail, MessageSquare } from "lucide-react";
import { brokerInfo } from "@/mocks/sample";

export default function BrokerOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Broker Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold">{brokerInfo.name}</h3>
              <p className="text-sm text-muted-foreground">Broker</p>
            </div>
            <div className="flex gap-2">
              <Button variant="secondary" size="icon"><Phone className="h-4 w-4" /></Button>
              <Button variant="secondary" size="icon"><Mail className="h-4 w-4" /></Button>
              <Button variant="secondary" size="icon"><MessageSquare className="h-4 w-4" /></Button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <Stat label="Deals" value={String(brokerInfo.deals)} />
            <Stat label="Approval Rate" value={brokerInfo.approval_rate} />
            <Stat label="Pending" value={`$${brokerInfo.pending.toLocaleString()}`} />
          </div>

          <div className="flex items-center justify-between rounded-md border p-3">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              <span className="text-sm font-medium">AI Assistant</span>
            </div>
            <Switch defaultChecked />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border p-3 text-center">
      <div className="text-xl font-bold">{value}</div>
      <div className="text-xs text-muted-foreground">{label}</div>
    </div>
  );
}
