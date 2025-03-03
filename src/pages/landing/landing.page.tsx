import { ReactNode } from "react";
import "./landing.page.css";
import { HomeBannerComponent } from "../../components/banner";
import { 
  SingleProductGrid, 
  HomeSectionTitle
} from "../../components/common";
import { toast } from "react-toastify";
// receive and create
// props
// state   ===> hook-> can be used in functional
const LandingPage = (): ReactNode => {  
  toast.success("Manish")
  return (
    <> 
      <HomeBannerComponent />

      <div className="bg-lime-50 my-10">
        <HomeSectionTitle>
          Brand Choice
        </HomeSectionTitle>
      </div>


      <div className="bg-lime-50">
        <HomeSectionTitle>Customer's Choice</HomeSectionTitle>
        <div className="mx-auto px-4  mt-6 sm:px-6 lg:px-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <SingleProductGrid />
          <SingleProductGrid />     
          <SingleProductGrid />     
          <SingleProductGrid />     
          <SingleProductGrid />     
          <SingleProductGrid />     
          <SingleProductGrid />     
          <SingleProductGrid />     
        </div>
       </div>
   </>
  );
};

export default LandingPage;
