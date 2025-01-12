import { SignUp } from "@clerk/nextjs";
export default function Page() {
  return (
    <div className="h-[100%] flex flex-col justify-center items-center pt-5">
      <SignUp />
    </div>
  );
}
