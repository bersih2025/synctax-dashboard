
import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface DashboardCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  trend: string;
}

const DashboardCard = ({ title, value, icon: Icon, trend }: DashboardCardProps) => {
  const isPositive = trend.startsWith("+");

  return (
    <Card className="p-6 card-hover">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>
          <h3 className="text-2xl font-bold mt-2">{value}</h3>
        </div>
        <div className="rounded-full p-2 bg-primary/10">
          <Icon className="h-5 w-5 text-primary" />
        </div>
      </div>
      <p className={`mt-4 text-sm ${isPositive ? "text-green-500" : "text-red-500"}`}>
        {trend} from last month
      </p>
    </Card>
  );
};

export default DashboardCard;
