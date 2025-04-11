import ExploreCategory from "@/components/router/explore/ExploreCategory";
import MainHeader from "@/components/shared/header/MainHeader";
import GradientImage from "@/components/shared/main/GradientImage";
import PlayerWrapper from "@/components/shared/player/PlayerWrapper";
import PagePadding from "@/components/shared/main/PagePadding";
import { sleep } from "@/lib/utils";

export default async function ExplorePage() {
  await sleep(2000);

  return (
    <>
      <main className="w-full md:w-[calc(100%_-_100px)] mlg:w-[calc(100%_-_240px)] h-full main-content relative">
        <MainHeader />
        <GradientImage />
        <PlayerWrapper />
        <PagePadding>
          <div className="main-content-wrapper relative z-[60]">
            <ExploreCategory />
          </div>
        </PagePadding>
      </main>
    </>
  );
}
