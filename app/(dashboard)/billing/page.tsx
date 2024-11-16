import { getAvailableCredits } from "@/actions/billing/getAvailableCredits";
import { Skeleton } from "@/components/ui/skeleton";
import { waitFor } from "@/lib/helper/waitFor";
import { Suspense } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ReactCountUpWrapper from "@/components/ReactCountUpWrapper";
import { ArrowLeftRightIcon, CoinsIcon } from "lucide-react";
import CreditsPurchase from "./_components/CreditsPurchase";
import { Period } from "@/types/analytic";
import { GetCreditUsageInPeriod } from "@/actions/analytics/GetCreditUsageInPeriod";
import CreditUsageChart from "./_components/CreditUsageChart";
import { GetUserPurchaseHistory } from "@/actions/billing/getUserPurchaseHistory";
import InvoiceButton from "./_components/InvoiceButton";

export default function BillingPage() {
  return (
    <div className="mx-auto p-4 space-y-8">
      <h1 className="text-3xl font-bold ">Billing</h1>
      <Suspense fallback={<Skeleton className="w-full h-[166px]" />}>
        <BalanceCard />
      </Suspense>
      <CreditsPurchase />
      <Suspense fallback={<Skeleton className="w-full h-[300px]" />}>
        <CreditUsageCard />
      </Suspense>
      <Suspense fallback={<Skeleton className="w-full h-[300px]" />}>
        <TransactionHistoryCard />
      </Suspense>
    </div>
  );
}

async function BalanceCard() {
  await waitFor(5000);
  const userBalance = await getAvailableCredits();
  return (
    <Card className="bg-gradient-to-br from-primary/10 via-primary/5 to-background-border-primary/20 flex flex-col justify-between overflow-hidden">
      <CardContent className="p-6 relative items-center">
        <div className="flex justify-between items-center ">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-1">
              Available credits
            </h3>
            <p className="text-4xl font-bold text-primary">
              <ReactCountUpWrapper value={userBalance} />
            </p>
          </div>
        </div>
        <CoinsIcon
          className="text-primary opacity-20 absolute bottom-0 right-0"
          size={140}
        />
      </CardContent>
      <CardFooter className="text-sm text-muted-foreground">
        When your credit balance reaches 0, your workflows will stop running.
      </CardFooter>
    </Card>
  );
}

async function CreditUsageCard() {
  const period: Period = {
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  };

  const data = await GetCreditUsageInPeriod(period);
  return (
    <CreditUsageChart
      data={data}
      title="Credits consumed"
      description="Daily credits consumed in the corrent month"
    />
  );
}

async function TransactionHistoryCard() {
  const purchases = await GetUserPurchaseHistory();
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-bold items-center gap-2 flex">
          <ArrowLeftRightIcon className="w-6 h-6 text-primary mr-2" />
          Transaction history
        </CardTitle>
        <CardDescription>
          All your transaction history in the current month, and download
          invoices
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {purchases.length === 0 && (
          <div className="flex justify-center items-center h-24">
            <p className="text-muted-foreground">No transactions found</p>
          </div>
        )}
        {purchases.map((purchase) => (
          <div
            key={purchase.id}
            className="flex justify-between items-center py-3 border-b last:border-b-0"
          >
            <div>
              <p className="font-medium">{formatDate(purchase.date)}</p>
              <p className="text-sm text-muted-foreground">
                {purchase.description}
              </p>
            </div>
            <div className="text-right">
              <p className="font-medium">
                {formatAmount(purchase.amount, purchase.currency)}{" "}
              </p>
              <InvoiceButton id={purchase.id} />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-IN", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

function formatAmount(amount: number, currency: string) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency,
  }).format(amount / 100);
}
