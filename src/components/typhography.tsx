interface ITitle {
  text: string;
}
export const Title = ({ text }: ITitle) => {
  return (
    <h1
      className="font-dnf text-3xl text-white text-center"
      style={{
        margin: 0,
        // fontFamily: "DnfBitbeatV2",
      }}
    >
      {text}
    </h1>
  );
};
