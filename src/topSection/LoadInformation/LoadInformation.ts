interface ForLoad {
  load: boolean;
  setLoad: React.Dispatch<React.SetStateAction<boolean>>;
}
const searchElem = async () => {
  try {
    const totalPerson = await fetch("https://swapi.dev/api/people/")
      .then((el) => el.json())
      .then((el) => el.count);
    return Number(totalPerson);
  } catch {
    return 0;
  }
};
const counterPages = (totalPerson: number) => {
  if (totalPerson == 0) {
    return 0;
  }
  return Math.floor(
    totalPerson % 10 == 0 ? totalPerson / 10 : totalPerson / 10 + 1,
  );
};

const getArrayLinks = (count: number) => {
  const allPeople = [];
  while (count != 0) {
    allPeople.push(`https://swapi.dev/api/people/?page=${count}`);
    count--;
  }
  return allPeople;
};
const getAllPeople = async (arrayLinks: string[]) => {
  const listPeople = await Promise.all(
    arrayLinks.map(async (el) => {
      const step1 = await fetch(el);

      const step2 = await step1.json();

      const step3 = await step2.results;

      return step3;
    }),
  );
  return listPeople;
};

const allFunction = async ({ setLoad }: ForLoad) => {
  try {
    const totalPerson = await searchElem();
    const counterPage = counterPages(totalPerson);
    const arrayAllLinks = getArrayLinks(counterPage);
    const allPeopleInfo = await getAllPeople(arrayAllLinks);
    const allPeopleInfo_step2 = allPeopleInfo.reduceRight((buf, el) => {
      buf.push(...el);
      return buf;
    }, []);

    //  const q =  useSearchQuery("all", JSON.stringify(allPeopleInfo_step2))
    localStorage.setItem("all", JSON.stringify(allPeopleInfo_step2));
    setLoad(false);
  } catch {
    console.log("Ошибка получения данных");
  }
};
export { allFunction, searchElem };
