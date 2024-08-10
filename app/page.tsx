import classBSection from "./BSection.module.css";
import FilterCards from "../src/components/FilterCards";
import RightSection from "../src/components/RightSection/RightSection";
//
export default function Home() {
  return (
    <>
      <main className={classBSection.main_content}>
        <div className={classBSection.main_container}>
          <div className={classBSection.main_container_left}>
            <FilterCards page={1} />
          </div>
          <div className={classBSection.main_container_right}>
            <RightSection />
          </div>
        </div>
      </main>
    </>
  );
}
