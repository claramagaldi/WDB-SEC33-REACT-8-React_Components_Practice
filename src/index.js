//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

import React from "react";
import ReactDOM from "react-dom";
const food1 = "https://spotleb.com/wp-content/uploads/2021/05/image-crosp.jpg";
const food2 =
  "https://static.clubedaanamariabraga.com.br/wp-content/uploads/2018/11/estrogonofe-de-carne.jpg";
const food3 =
  "https://www.sun-sentinel.com/resizer/qA7BHnjvm9KZZth7-MRCah0CDKQ=/1200x0/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/EHR3UYHUTVC7TD4R6V7XKWHHZU.jpg";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Food
    </h1>
    <div>
      <img className="food-img" alt="food1" src={food1} />
      <img className="food-img" alt="food2" src={food2} />
      <img className="food-img" alt="food3" src={food3} />
    </div>
  </div>,
  document.getElementById("root")
);
