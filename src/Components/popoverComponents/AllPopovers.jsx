import { Portfolio } from "./techPortfolio.jsx";
export const AllPopovers = ({ isClicked }) => {
  return (
    isClicked ? <Portfolio /> : <div>Hello</div>
  )
}
