"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export function ToastSimple() {
  const { toast } = useToast();

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          className: "bg-slate-100 border-1 border-black",
          description: (
            <div>
              <h1 className="text-black w-[200px] ml-10 font-medium">
                <span className="font-extrabold">ed</span>coins{" "}
                <span className="font-extrabold">reward</span> has been
                collected in your account.
              </h1>

              <h2 className="w-[200px] mt-2 text-right font-extrabold text-red-500 cursor-pointer">
                Go to dashboard
              </h2>
            </div>
          ),
        });
      }}
    >
      Show Toast
    </Button>
  );
}
