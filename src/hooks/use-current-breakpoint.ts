import { useTheme, useMediaQuery, Breakpoint } from "@mui/material";

export function useCurrentBreakpoint() {
  const theme = useTheme();
  let currentBreakpoint: Breakpoint = "xs";

  if (useMediaQuery(theme.breakpoints.down("sm"))) currentBreakpoint = "xs";

  if (useMediaQuery(theme.breakpoints.between("sm", "md")))
    currentBreakpoint = "sm";

  if (useMediaQuery(theme.breakpoints.between("md", "lg")))
    currentBreakpoint = "md";

  if (useMediaQuery(theme.breakpoints.between("lg", "xl")))
    currentBreakpoint = "lg";

  if (useMediaQuery(theme.breakpoints.up("xl"))) currentBreakpoint = "xl";

  return { currentBreakpoint };
}
