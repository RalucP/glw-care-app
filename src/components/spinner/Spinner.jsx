import { SpinnerContainer, SpinnerOverlay } from "./Spinner.styles";

const Spinner = () => (
  <SpinnerOverlay data-testid='spinner'>
    <SpinnerContainer />
  </SpinnerOverlay>
);

export default Spinner;