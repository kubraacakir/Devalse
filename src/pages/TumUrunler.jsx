import React, { useEffect, useState } from "react";
import { Divider, Image } from "semantic-ui-react";
import { IsletmeService } from "../services/IsletmeService";

export default function TumUrunler() {
  const service = new IsletmeService();
  const [urunler, setUrunler] = useState(null);

  async function urunleriGetir() {
    let response = await service.getAllProduct();
    setUrunler(response.data);
  }

  useEffect(() => {
    urunleriGetir();
  }, []);

  if (urunler === null) {
    return null;
  } else {
    const grupBoyutu = 5;

    return (
      <div>
        {urunler.map((urun, index) => {
          if (index % grupBoyutu === 0) {
            return (
              <div key={index}>
                <Image.Group size="small">
                  {urunler.slice(index, index + grupBoyutu).map((urunSlice) => (
                    <Image
                      key={urunSlice.id}
                      src={urunSlice.imagePath}
                      bordered
                    />
                  ))}
                </Image.Group>
                <Divider hidden />
              </div>
            );
          }
          return null;
        })}
      </div>
    );
  }
}
