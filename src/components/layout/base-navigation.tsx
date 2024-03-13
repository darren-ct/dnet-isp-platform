import { Container, Typography, ContainerProps } from "@mui/material";

type BaseNavigationProps = ContainerProps;

export function BaseNavigation({
  children,
  sx,
  ...rest
}: BaseNavigationProps): JSX.Element {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        px: 4,
        py: 2,
        ...sx,
      }}
      {...rest}
    >
      <Typography variant="h4" component="p" color="primary.main">
        My Logo
      </Typography>
      {children}
    </Container>
  );
}
