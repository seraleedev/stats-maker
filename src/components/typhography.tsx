interface ITitle {
  text: string;
}
export const Title = ({ text }: ITitle) => {
  return (
    <h1
      className="text-lg text-white text-center"
      style={{
        fontFamily: "DnfBitbeatV2, sans-serif",
        margin: 0,
      }}
    >
      {text}
    </h1>
  );
};
