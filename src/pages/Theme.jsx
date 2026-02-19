const Theme = () => {
  return (
    <div
      style={{
        marginTop: "80px", // space below navbar
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100vh - 80px)",
        padding: "20px",
      }}
    >
      <iframe
        src="https://engineers-vision-board.vercel.app/"
        title="Vision Board"
        style={{
          width: "90%",
          height: "100%",
          border: "none",
          borderRadius: "12px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
        }}
      />
    </div>
  );
};

export default Theme;
