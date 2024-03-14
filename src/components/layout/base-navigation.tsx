import { Container, ContainerProps } from "@mui/material";
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
        py: 1,
        ...sx,
      }}
      {...rest}
    >
      <img
        src="/brand.png"
        height={24}
        style={{
          cursor: "pointer",
        }}
        onClick={() => navigate({ to: "/" })}
      />
      {children}
    </Container>
  );
}
