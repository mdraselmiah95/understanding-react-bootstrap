import React from "react";
import Card from "../Card/Card";

const Body = () => {
  const items = [
    {
      name: "Actress One",
      dis: "Nora Fatehi is a Canadian dancer, model, actress, singer, and producer who is known for her work in the Indian film industry. She has appeared in Hindi, Telugu, Malayalam and Tamil language films",
      img: "https://www.bollywoodhungama.com/wp-content/uploads/2016/03/Nora-Fatehi-3-10.jpg",
    },
    {
      name: "Actress One",
      dis: "Nora Fatehi is a Canadian dancer, model, actress, singer, and producer who is known for her work in the Indian film industry. She has appeared in Hindi, Telugu, Malayalam and Tamil language films",
      img: "https://www.bollywoodhungama.com/wp-content/uploads/2016/03/Nora-Fatehi-2-12.jpg",
    },
    {
      name: "Actress One",
      dis: "Nora Fatehi is a Canadian dancer, model, actress, singer, and producer who is known for her work in the Indian film industry. She has appeared in Hindi, Telugu, Malayalam and Tamil language films",
      img: "https://www.bollywoodhungama.com/wp-content/uploads/2016/03/Nora-Fatehi-2-9.jpg",
    },
    {
      name: "Actress One",
      dis: "Nora Fatehi is a Canadian dancer, model, actress, singer, and producer who is known for her work in the Indian film industry. She has appeared in Hindi, Telugu, Malayalam and Tamil language films",
      img: "https://im.indiatimes.in/content/itimes/photo/2015/Dec/9/1449653773-nora-fatehi-sexy-back.jpg?w=1310&h=864&cc=1",
    },
    {
      name: "Actress One",
      dis: "Nora Fatehi is a Canadian dancer, model, actress, singer, and producer who is known for her work in the Indian film industry. She has appeared in Hindi, Telugu, Malayalam and Tamil language films",
      img: "https://www.bollywoodhungama.com/wp-content/uploads/2016/03/Nora-Fatehi.jpg",
    },
    {
      name: "Actress One",
      dis: "Nora Fatehi is a Canadian dancer, model, actress, singer, and producer who is known for her work in the Indian film industry. She has appeared in Hindi, Telugu, Malayalam and Tamil language films",
      img: "https://www.bollywoodhungama.com/wp-content/uploads/2016/03/Nora-Fatehi-01104-4.jpg",
    },
    {
      name: "Actress One",
      dis: "Nora Fatehi is a Canadian dancer, model, actress, singer, and producer who is known for her work in the Indian film industry. She has appeared in Hindi, Telugu, Malayalam and Tamil language films",
      img: "https://www.bollywoodhungama.com/wp-content/uploads/2016/03/Nora-Fatehi-16.jpg",
    },
    {
      name: "Actress One",
      dis: "Nora Fatehi is a Canadian dancer, model, actress, singer, and producer who is known for her work in the Indian film industry. She has appeared in Hindi, Telugu, Malayalam and Tamil language films",
      img: "https://www.bollywoodhungama.com/wp-content/uploads/2016/03/Nora-Fatehi-1-7.jpg",
    },
    {
      name: "Actress One",
      dis: "Nora Fatehi is a Canadian dancer, model, actress, singer, and producer who is known for her work in the Indian film industry. She has appeared in Hindi, Telugu, Malayalam and Tamil language films",
      img: "https://www.bollywoodhungama.com/wp-content/uploads/2016/03/Nora-Fatehi-00-1.jpg",
    },
    {
      name: "Actress One",
      dis: "Nora Fatehi is a Canadian dancer, model, actress, singer, and producer who is known for her work in the Indian film industry. She has appeared in Hindi, Telugu, Malayalam and Tamil language films",
      img: "https://www.bollywoodhungama.com/wp-content/uploads/2016/03/Nora-Fatehi2-3.jpg",
    },
    {
      name: "Actress One",
      dis: "Nora Fatehi is a Canadian dancer, model, actress, singer, and producer who is known for her work in the Indian film industry. She has appeared in Hindi, Telugu, Malayalam and Tamil language films",
      img: "https://www.bollywoodhungama.com/wp-content/uploads/2016/03/Nora-Fatehi-2-6.jpg",
    },
    {
      name: "Actress One",
      dis: "Nora Fatehi is a Canadian dancer, model, actress, singer, and producer who is known for her work in the Indian film industry. She has appeared in Hindi, Telugu, Malayalam and Tamil language films",
      img: "https://www.bollywoodhungama.com/wp-content/uploads/2016/03/Nora-Fatehi-9-1.jpg",
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
