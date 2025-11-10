import { Audio } from "react-loader-spinner";
const Loader = () => {
  return (
    <>
      <Audio
        height="20"
        width="20"
        color="#fff"
        ariaLabel="audio-loading"
        wrapperStyle={{}}
        wrapperClass="wrapper-class"
        visible={true}
      />
    </>
  );
};

export default Loader;
