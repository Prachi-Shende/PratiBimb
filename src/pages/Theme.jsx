import { useState, useEffect } from "react";

const Theme = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check screen size
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768); // Standard tablet/mobile breakpoint
    };

    // Initial check
    checkScreenSize();

    // Add event listener for window resizing
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div
      style={{
        marginTop: "80px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "calc(100vh - 80px)",
        padding: "20px",
        boxSizing: "border-box",
        overflow: "hidden"
      }}
    >
      {/* PC Alert Section - Only rendered if isMobile is true */}
      {isMobile && (
        <div style={{
          marginBottom: "15px",
          padding: "10px 20px",
          backgroundColor: "#fff3cd",
          color: "#856404",
          borderRadius: "8px",
          fontSize: "14px",
          fontWeight: "500",
          border: "1px solid #ffeeba",
          textAlign: "center"
        }}>
          For the best experience, please view this board on a PC.
        </div>
      )}

      <iframe
        src="https://engineers-vision-board.vercel.app/"
        title="Vision Board"
        style={{
          width: "95%",
          flex: 1,
          border: "none",
          borderRadius: "12px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
        }}
      />
    </div>
  );
};

export default Theme;