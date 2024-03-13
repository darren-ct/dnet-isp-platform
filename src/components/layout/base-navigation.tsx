import { Container, ContainerProps, Link } from "@mui/material";
import { useNavigate } from "@tanstack/react-router";

type BaseNavigationProps = ContainerProps;

export function BaseNavigation({
  children,
  sx,
  ...rest
}: BaseNavigationProps): JSX.Element {
  const navigate = useNavigate();

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
      <Link
        variant="h5"
        component="p"
        color="primary.main"
        sx={{ cursor: "pointer", textDecorationLine: "none" }}
        onClick={() => navigate({ to: "/" })}
      >
        My Logo
      </Link>
      {children}
    </Container>
  );
}
