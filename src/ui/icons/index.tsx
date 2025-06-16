import DangerTriangle from "./danger-triangle";
import { IconProps, Icons } from "./types";
import TickSquare from "./tick-square";
import InfoSquare from "./info-square";

interface Props extends IconProps {
  type: Icons;
}
export function Icon({ type, color, size }: Props) {
  const props = { color, size };

  switch (type) {
    case Icons.DangerTriangle:
      return <DangerTriangle {...props} />;

    case Icons.InfoSquare:
      return <InfoSquare {...props} />;

    case Icons.TickSquare:
      return <TickSquare {...props} />;

    default:
      return <p>Pick an Icon</p>;
  }
}
