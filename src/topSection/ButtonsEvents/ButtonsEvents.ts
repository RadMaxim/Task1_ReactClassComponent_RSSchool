import { ElementType } from "../../All_Interface/TopSection";
interface ForSetError {
  err: boolean;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
}
const button_err = ({ setError }: ForSetError) => {
  setError(false);
};
const button_click = () => {
  const input_val: string = document
    .getElementsByTagName("input")[0]
    .value.trim();
  localStorage.setItem("input_value", input_val);

  const all_people_info: ElementType[] = JSON.parse(
    localStorage.getItem("all") || "[]",
  );

  const filter_array = Array.from(all_people_info).filter((el: ElementType) => {
    if (input_val.length == 0) return true;
    if (
      String(el.name)
        .toLocaleLowerCase()
        .includes(input_val.toLocaleLowerCase())
    ) {
      return true;
    }
    return false;
  });
  localStorage.setItem("filter_array", JSON.stringify(filter_array));
  window.location.reload();
};

export { button_err, button_click };
