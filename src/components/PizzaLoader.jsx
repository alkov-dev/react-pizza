//https://danilowoz.github.io/create-content-loader/


import React from "react"
import ContentLoader from "react-content-loader"

const PizzaLoader = (props) => (
    <ContentLoader 
    speed={2}
    width={250}
    height={450}
    viewBox="0 0 250 450"
    backgroundColor="#00f054"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="121" cy="125" r="117" /> 
    <rect x="44" y="262" rx="0" ry="0" width="157" height="26" /> 
    <rect x="6" y="309" rx="4" ry="4" width="229" height="60" /> 
    <rect x="60" y="387" rx="23" ry="23" width="125" height="38" />
  </ContentLoader>
)

export default PizzaLoader