
import Profile from "@/components/Profile";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Profile
        name="Rambo Ramb"
        job="Software Engineer"
        profileImage="https://via.placeholder.com/150" 
        bannerImage="https://via.placeholder.com/600"
      />
    </main>
  );
}
