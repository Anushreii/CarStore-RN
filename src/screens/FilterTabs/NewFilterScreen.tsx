import React from "react";
import FilterForm from "../../components/FilterContent";

const NewFilterScreen = ()=>{
  return(
    <FilterForm
    modelOptions={['Swift', 'Thar', 'Baleno', 'Wagnor', 'G-wagon']}
    brandOptions={['Maruti', 'Nexa']}>

    </FilterForm>
  )
}
export default NewFilterScreen;