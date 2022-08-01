import React from "react";
import ContentLoader from "react-content-loader";

const LoaderProduct = (props) => (
  <ContentLoader viewBox="0 0 500 600" height="100%" width="100%" {...props}>
    <rect x="0" y="0" rx="10" ry="10" width="100%" height="250" />
    <rect x="2" y="300" rx="0" ry="0" width="500" height="20" />
    <rect x="125" y="350" rx="0" ry="0" width="239" height="20" />
    <rect x="20%" y="450" rx="0" ry="0" width="300" height="50" />
    <rect x="450" y="550" rx="0" ry="0" width="80" height="20" />
  </ContentLoader>
);

export default LoaderProduct;
