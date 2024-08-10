"use client";

import FilterCards from "../../../src/components/FilterCards";
const ClientPages = (props: { page: number }) => {
  const { page } = props;
  return (
    <>
      <FilterCards page={page} />
    </>
  );
};
export default ClientPages;
