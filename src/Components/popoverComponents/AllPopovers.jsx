import { Portfolio } from "./techPortfolio";
export const AllPopovers = ({ clickedPopover }) => {
  const popovers = [
    { id: 1, component: < Portfolio /> }
  ];
  return (
    <>
      {clickedPopover[0] && popovers[0].component}
    </>
  );
}
