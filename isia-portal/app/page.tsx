import QuickActions from "@/components/QuickActions";
import ActivityList from "@/components/ActivityList";
import UpcomingTraining from "@/components/UpcomingTraining";
import CommunityBanner from "@/components/CommunityBanner";

export default function Home() {
  return (
    <>
      <header className="mb-10 mt-20">
        <h1 className="text-3xl font-extrabold text-primary tracking-tight">Welcome back, James</h1>
        <p className="text-on-surface-variant mt-2 font-body">Your membership is active until December 31, 2024.</p>
      </header>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10">
        <QuickActions />
        <ActivityList />
        <UpcomingTraining />
      </div>

      <CommunityBanner />
    </>
  );
}
