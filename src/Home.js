import styled from "styled-components";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Truested from "./components/Truested";
import FeatureProduct from "./components/FeatureProduct";



const Home = () => {

  const data = {

            name:"thapa Store"
  }

  return (
   
         <>
       
        <HeroSection myData={data}/>
          <FeatureProduct/>
          <Services/>
          <Truested/>
         

      </>
  )
}

const Wrapper = styled.section`

        
         height:100vh;
          background-color:${({theme})=>theme.colors.bg};

       

`

export default Home