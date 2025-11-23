import { Assets } from "../Assets/assets";
export default function Contact() {
  return (
   
 
    <div
      className="contact-page"
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${Assets.leahandritadesign})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
         borderRadius: "2%",
         marginTop:"1%",
         marginBottom: "1%",
      }}
    >
      <div
        style={{
          padding: "20px",
          maxWidth: "500px",
          width: "100%",
          background: "rgba(255, 255, 255, 0.6)", // translucent overlay for the background that me and my friend made to shine 
          borderRadius: "2%",
          boxShadow: "0 4px 15px rgba(0,0,0,0.3)",

          
        }}
      >
        <h2>Contact Us</h2>
        <h5>For more merch updates</h5>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            marginTop: "20px",
          }}
        >
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea rows="4" placeholder="Your Message"></textarea>
          <button
            type="submit"
            style={{
              backgroundColor: "#007bff",
              color: "white",
              padding: "10px",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Send
          </button>
        </form>
      </div>
    </div>

  );
}
