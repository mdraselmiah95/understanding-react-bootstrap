import React from "react";
import Card from "../Card/Card";

const Body = () => {
  const items = [
    {
      name: "Actress One",
      dis: "Nora Fatehi is a Canadian dancer, model, actress, singer, and producer who is known for her work in the Indian film industry. She has appeared in Hindi, Telugu, Malayalam and Tamil language films",
      img: "https://www.easterneye.biz/wp-content/uploads/2021/07/GettyImages-1156688588-scaled.jpg",
    },
    {
      name: "Actress One",
      dis: "Nora Fatehi is a Canadian dancer, model, actress, singer, and producer who is known for her work in the Indian film industry. She has appeared in Hindi, Telugu, Malayalam and Tamil language films",
      img: "https://www.easterneye.biz/wp-content/uploads/2021/07/GettyImages-1156688588-scaled.jpg",
    },
    {
      name: "Actress One",
      dis: "Nora Fatehi is a Canadian dancer, model, actress, singer, and producer who is known for her work in the Indian film industry. She has appeared in Hindi, Telugu, Malayalam and Tamil language films",
      img: "https://www.easterneye.biz/wp-content/uploads/2021/07/GettyImages-1156688588-scaled.jpg",
    },
    {
      name: "Actress One",
      dis: "Nora Fatehi is a Canadian dancer, model, actress, singer, and producer who is known for her work in the Indian film industry. She has appeared in Hindi, Telugu, Malayalam and Tamil language films",
      img: "https://www.easterneye.biz/wp-content/uploads/2021/07/GettyImages-1156688588-scaled.jpg",
    },
    {
      name: "Actress One",
      dis: "Nora Fatehi is a Canadian dancer, model, actress, singer, and producer who is known for her work in the Indian film industry. She has appeared in Hindi, Telugu, Malayalam and Tamil language films",
      img: "https://www.easterneye.biz/wp-content/uploads/2021/07/GettyImages-1156688588-scaled.jpg",
    },
    {
      name: "Actress One",
      dis: "Nora Fatehi is a Canadian dancer, model, actress, singer, and producer who is known for her work in the Indian film industry. She has appeared in Hindi, Telugu, Malayalam and Tamil language films",
      img: "https://www.easterneye.biz/wp-content/uploads/2021/07/GettyImages-1156688588-scaled.jpg",
    },
    {
      name: "Actress One",
      dis: "Nora Fatehi is a Canadian dancer, model, actress, singer, and producer who is known for her work in the Indian film industry. She has appeared in Hindi, Telugu, Malayalam and Tamil language films",
      img: "https://www.easterneye.biz/wp-content/uploads/2021/07/GettyImages-1156688588-scaled.jpg",
    },
    {
      name: "Actress One",
      dis: "Nora Fatehi is a Canadian dancer, model, actress, singer, and producer who is known for her work in the Indian film industry. She has appeared in Hindi, Telugu, Malayalam and Tamil language films",
      img: "https://www.easterneye.biz/wp-content/uploads/2021/07/GettyImages-1156688588-scaled.jpg",
    },
    {
      name: "Actress One",
      dis: "Nora Fatehi is a Canadian dancer, model, actress, singer, and producer who is known for her work in the Indian film industry. She has appeared in Hindi, Telugu, Malayalam and Tamil language films",
      img: "https://www.easterneye.biz/wp-content/uploads/2021/07/GettyImages-1156688588-scaled.jpg",
    },
    {
      name: "Actress One",
      dis: "Nora Fatehi is a Canadian dancer, model, actress, singer, and producer who is known for her work in the Indian film industry. She has appeared in Hindi, Telugu, Malayalam and Tamil language films",
      img: "https://www.easterneye.biz/wp-content/uploads/2021/07/GettyImages-1156688588-scaled.jpg",
    },
  ];
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {items.map((item) => (
        <Card item={item} />
      ))}
    </div>
  );
};

export default Body;
