import React from "react";
import ContentLoader from "react-content-loader";

const Sceleton = (props) => (
  <ContentLoader
    speed={2}
    width={350}
    height={407}
    viewBox="0 0 350 407"
    backgroundColor="#fff"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="NaN" y="NaN" rx="0" ry="0" width="NaN" height="NaN" />
    <rect x="-67" y="106" rx="0" ry="0" width="66" height="23" />
    <rect x="35" y="23" rx="31" ry="31" width="237" height="220" />
    <rect x="30" y="349" rx="0" ry="0" width="81" height="24" />
    <rect x="202" y="352" rx="0" ry="0" width="106" height="25" />
    <rect x="34" y="302" rx="0" ry="0" width="130" height="26" />
    <rect x="209" y="299" rx="0" ry="0" width="95" height="26" />
  </ContentLoader>
);

export default Sceleton;
