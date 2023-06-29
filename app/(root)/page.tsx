import { ModeToggle } from "@/components/ui/LightDarkMode";
import { UserButton } from "@clerk/nextjs";

const SetupPage = () => {
  return (
    <div>
      <UserButton afterSignOutUrl="/"/>
      <ModeToggle/>
    </div>
  )
}

export default SetupPage;