import LoadingGIF from "../assests/Loading.gif";

const Loading = () => {
    const loadStyle = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)"
      };
  return (
    <div style={ loadStyle }>
      <img src={ LoadingGIF } alt="Loading..."/>
    </div>
  );
};

export default Loading;
