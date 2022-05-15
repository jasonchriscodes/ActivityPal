import React from "react";
import { Dimmer, Loader } from "semantic-ui-react";

interface Props {
  inverted?: boolean; // give dark or light background
  content?: string; // loading text
}

export default function LoadingComponent({
  inverted = true,
  content = "Loading...",
}: Props) {
  return (
    <Dimmer active={true} inverted={inverted}>
      <Loader content={content} />
    </Dimmer>
  );
}
