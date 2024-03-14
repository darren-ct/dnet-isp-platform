import { useCurrentBreakpoint } from "../../../hooks";

export function useLoginPage() {
  const { currentBreakpoint } = useCurrentBreakpoint();

  const isHideImage = currentBreakpoint === "sm" || currentBreakpoint === "xs";

  let imageWidth = 400;
  if (currentBreakpoint === "md") imageWidth = 340;

  return { isHideImage, imageWidth };
}
