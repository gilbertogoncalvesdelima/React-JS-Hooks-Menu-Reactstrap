import React from "react";
import Masony from "react-masonry-component";
import "./style.css";

const PHOTOS = [
  {
    imageUrl:
      "https://cdn.pixabay.com/photo/2020/06/14/03/09/women-5296386_960_720.jpg",
  },
  {
    imageUrl:
      "https://cdn.pixabay.com/photo/2020/06/14/11/23/wanderer-5297457_960_720.jpg",
  },
  {
    imageUrl:
      "https://cdn.pixabay.com/photo/2020/06/18/18/53/the-cliffs-5314651_960_720.jpg",
  },
  {
    imageUrl:
      "https://cdn.pixabay.com/photo/2020/06/19/09/16/fantasy-5316369_960_720.jpg",
  },
  {
    imageUrl:
      "https://cdn.pixabay.com/photo/2020/06/18/09/42/flowers-5312741_960_720.jpg",
  },
  {
    imageUrl:
      "https://cdn.pixabay.com/photo/2020/06/20/10/26/plant-5320443_960_720.jpg",
  },
  {
    imageUrl:
      "https://cdn.pixabay.com/photo/2020/02/25/19/16/stawberry-4879794_960_720.jpg",
  },
  {
    imageUrl:
      "https://cdn.pixabay.com/photo/2019/12/11/15/12/dogs-4688586_960_720.jpg",
  },
  {
    imageUrl:
      "https://cdn.pixabay.com/photo/2020/02/06/08/51/water-4823443_960_720.jpg",
  },
  {
    imageUrl:
      "https://cdn.pixabay.com/photo/2018/05/26/10/54/strawberries-3431122_960_720.jpg",
  },
  {
    imageUrl:
      "https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416_960_720.jpg",
  },
  {
    imageUrl:
      "https://cdn.pixabay.com/photo/2017/10/18/16/08/wolf-2864647_960_720.jpg",
  },
  {
    imageUrl:
      "https://cdn.pixabay.com/photo/2016/01/19/17/41/friends-1149841_960_720.jpg",
  },
  {
    imageUrl:
      "https://cdn.pixabay.com/photo/2020/02/25/19/16/stawberry-4879794_960_720.jpg",
  },
  {
    imageUrl:
      "https://cdn.pixabay.com/photo/2019/12/11/15/12/dogs-4688586_960_720.jpg",
  },
  {
    imageUrl:
      "https://cdn.pixabay.com/photo/2020/02/06/08/51/water-4823443_960_720.jpg",
  },
];

// Masory Options
const masonryOptions = {
  fitWidth: false,
  columnWidth: 300,
  gutter: 30,
  itemSelector: ".photo-item",
};

const App = () => {
  return (
    <div>
      <style />
      <Masony
        className={"photo-list"}
        elementType={"ul"}
        options={masonryOptions}
        disableImagesLoaded={false}
        updateOnEachImageLoad={false}
      >
        {PHOTOS.map((photo) => (
          <li className={`photo-item`}>
            <img src={photo.imageUrl} alt="" />
          </li>
        ))}
      </Masony>
    </div>
  );
};

export default App;
