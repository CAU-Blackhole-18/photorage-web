type SpacerPropsType = {
  axis?: string;
  size: number;
};

const Spacer = (props: SpacerPropsType) => {
  const { axis, size } = props;
  const width = axis === "horizontal" ? size : 1;
  const height = axis === "horizontal" ? 1 : size;
  return (
    <span
      style={{
        display: "block",
        width,
        minWidth: width,
        height,
        minHeight: height,
      }}
    />
  );
};
export default Spacer;
