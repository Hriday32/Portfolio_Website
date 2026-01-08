import Hero from "@/components/hero";
import { ThemeProvider } from "next-themes";
import { Theme } from "@radix-ui/themes";

export default function Home() {
  return (
    <ThemeProvider>
      <Theme appearance="dark">
        <Hero />
      </Theme>
    </ThemeProvider>
  );
}
