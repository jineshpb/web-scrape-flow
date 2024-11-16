"use client";

import { PurchaseCredits } from "@/actions/billing/purchaseCredits";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CreditsPack, PackId } from "@/types/billing";
import { useMutation } from "@tanstack/react-query";
import { CoinsIcon, CreditCard } from "lucide-react";

import React, { useState } from "react";
import { toast } from "sonner";

function CreditsPurchase() {
  const [selectedPack, setSelectedPack] = useState<PackId | null>(
    PackId.MEDIUM
  );

  const mutation = useMutation({
    mutationFn: PurchaseCredits,
    onSuccess: () => {
      toast.success("Credits purchased successfully");
    },
    onError: () => {
      toast.error("Something went wrong");
    },
  });
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-bold flex items-center gap-2">
          <CoinsIcon className="w-6 h-6 text-primary mr-2" />
          Purchase credits
        </CardTitle>
        <CardDescription>
          Purchase credits to continue using the app.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <RadioGroup
          onValueChange={(value) => setSelectedPack(value as PackId)}
          value={selectedPack!}
        >
          {CreditsPack.map((pack) => (
            <div
              key={pack.id}
              className="flex items-center p-3 rounded-lg space-x-3 bg-secondary/50 hover:bg-secondary transition-colors"
              onClick={() => setSelectedPack(pack.id)}
            >
              <RadioGroupItem value={pack.id} id={pack.id} />
              <Label
                htmlFor={pack.id}
                className="flex justify-between w-full cursor-pointer"
              >
                <span className="font-medium">
                  {pack.name} - {pack.label}
                </span>
                <span className="font-bold text-primary ">
                  ${(pack.price / 100).toFixed(2)}
                </span>
              </Label>
            </div>
          ))}
        </RadioGroup>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button
          disabled={mutation.isPending}
          onClick={() => mutation.mutate(selectedPack as PackId)}
        >
          <CreditCard className="w-5 h-5 mr-2" />
          Purchase credits
        </Button>
      </CardFooter>
    </Card>
  );
}

export default CreditsPurchase;
