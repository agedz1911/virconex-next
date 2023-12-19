import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FacebookIcon } from "lucide-react";
import Image from "next/image";

const page = () => {
  return (
    <div className="flex flex-col items-center w-full p-6">
      <div className="rounded-lg bg-slate-50 py-10 px-6 w-full md:max-w-sm">
        {/* <div className="items-center space-y-2 justify-center flex flex-col">
          <Image src="/images/logo.png" alt="Logo" width={200} height={54} />
          <h1 className="font-semibold text-xl">Sign in to Virconex</h1>
        </div> */}
        <h1 className="font-semibold text-center text-xl">Sign in to Virconex</h1>
        <form>
          <div className="space-y-1 mt-3 lg:mt-5">
            <Label htmlFor="email" className="text-muted-foreground">
              Email
            </Label>
            <Input
              placeholder="enter your email address.."
              type="email"
              name="email"
              className="text-xs placeholder:text-muted-foreground w-full inline-block"
            />
          </div>
          <div className="space-y-1 mt-2">
            <Label htmlFor="password" className="text-muted-foreground">
              Password
            </Label>
            <Input
              placeholder="enter your email password.."
              type="password"
              name="password"
              className="text-xs placeholder:text-muted-foreground w-full inline-block"
            />
          </div>
          <Button className="w-full mt-6">Sign in</Button>
        </form>
        <div className="relative mt-2">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t"></span>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-slate-50 px-2 text-muted-foreground">or</span>
          </div>
        </div>
        <div className="flex flex-row items-center justify-evenly mt-2">
          <Button
            variant={"outline"}
            size={"icon"}
            className="hover:bg-secondary"
          >
            <Image
              src="/images/google.svg"
              alt="google"
              width={100}
              height={100}
            />
          </Button>
          <Button size={"icon"} className="bg-blue-700 hover:bg-blue-600">
            <FacebookIcon className="" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default page;
