import "./App.css";
import { useEffect, useState } from "react";
import Gallery from "./Gallery";
import axios from "axios";
import lastmilelogo from "./images/lastmile.png";
import Flickity from "react-flickity-component";

function App() {
  const [image, setImage] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.vadoo.tv/get_channel_info")
      .then((response) => {
        const datainfo = response.data;
        setImage(datainfo);
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="covergif"></div>

      <div className="lastmile">
        <img src={lastmilelogo} alt="last mile" />
      </div>

      <Flickity
        options={{
          groupCells: true,
          draggable: false,
          freeScroll: true,
          pageDots: false,
        }}
      >
        {image.map((img, index) => {
          return (
            <Gallery
              key={index}
              img={img.thumbnail}
              title={img.title}
              gif={img.gif_thumbnail}
            />
          );
        })}
      </Flickity>
    </>
  );
}

export default App;
