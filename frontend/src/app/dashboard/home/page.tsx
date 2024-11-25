import { AppSidebar } from "@/components/AppSideBar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Trophy } from "lucide-react";
import { ThumbsUp } from "lucide-react";

const Home = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="bg-transparent">
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="grid gap-4 md:grid-cols-5">
            <div className="h-80 flex flex-col gap-6 p-4 col-span-3 rounded-xl bg-[#1D57C21A]">
              <h1 className="text-3xl font-bold">Hi there!</h1>
              <p className="w-[70%]">
                Create, manage, and participate in transparent and secure voting
                processes in just a few steps.
              </p>
              <div className="grid gap-4 auto-rows-auto md:grid-cols-2">
                <div className="bg-primary h-36 flex flex-col p-4 gap-4 justify-center rounded-xl bg-[#0B1739]">
                  <div className="flex gap-2 items-center">
                    <Trophy className="w-5 h-5 text-white" />
                    <p className="text-white">Elections Created</p>
                  </div>
                  <h1 className="text-4xl font-bold">25</h1>
                </div>
                <div className="bg-primary h-36 flex flex-col p-4 gap-4 justify-center rounded-xl bg-[#0B1739]">
                  <div className="flex gap-2 items-center">
                    <ThumbsUp className="w-5 h-5 text-white" />
                    <p className="text-white">Total Votes</p>
                  </div>
                  <h1 className="text-4xl font-bold">127</h1>
                </div>
                
              </div>
            </div>
            <div className="h-80 col-span-2 rounded-xl bg-muted/50" />
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
          <div className="flex flex-1 flex-col gap-4 p-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="aspect-video h-12 w-full rounded-lg bg-muted/50"
            />
          ))}
        </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Home;
