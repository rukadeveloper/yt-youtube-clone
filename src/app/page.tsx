import MainHeader from "@/components/shared/header/MainHeader";
import GradientImage from "@/components/shared/main/GradientImage";
import HomeMainContents from "@/components/shared/main/HomeMainContents";
import PagePadding from "@/components/shared/main/PagePadding";
import PlayerWrapper from "@/components/shared/player/PlayerWrapper";
import { sleep } from "@/lib/utils";

export default async function Home() {
  await sleep(2000);

  return (
    <>
      <main className="w-auto xs:flex-1 h-full main-content relative">
        <MainHeader />
        <GradientImage />
        <PlayerWrapper />
        <PagePadding>
          <div className="main-content-wrapper relative z-[60]">
            <HomeMainContents />
          </div>
        </PagePadding>
      </main>
    </>
  );
}
