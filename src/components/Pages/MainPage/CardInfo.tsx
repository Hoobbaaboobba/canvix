import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";

const CardInfo = () => {
  return (
    <div className="flex w-full max-w-[1400px] flex-col items-start justify-start gap-6">
      <h1 className="text-4xl font-semibold text-white sm:text-6xl">
        Ready to take your <br />
        <span className="text-light-green">Business Growth</span> <br />
        to the next level? <br />
      </h1>
      <p className="text-sm text-white sm:text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit- et ut <br />{" "}
        massa libero egestas malesuada viverra gravida libero cursus <br />{" "}
        nulla leo pulvinar.
      </p>
      <Button variant="light" size="light">
        <div className="rounded-full bg-black p-1">
          <ChevronRightIcon className="text-white" />
        </div>
        <span className="ml-2">Start your Free Trial</span>
      </Button>
      <div className="mt-8 sm:mt-24">
        <h2 className="text-lg font-semibold text-light-green">
          Trusted by Leading Brands
        </h2>
        <div className="-ml-3 mt-4 grid max-w-[680px] grid-cols-2 items-center justify-center sm:grid-cols-4">
          <img src="/images/greenish.png" alt="" />
          <img src="/images/automation.png" alt="" />
          <img src="/images/leaf.png" alt="" />
          <img src="/images/mindfulness.png" alt="" />
        </div>
      </div>
      <img
        src="/images/canvix-main-photo.png"
        alt="main-photo"
        className="relative hidden xl:absolute xl:-top-12 xl:right-0 xl:block"
      />
    </div>
  );
};

export default CardInfo;
