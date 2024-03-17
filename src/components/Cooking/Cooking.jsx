import PropTypes from "prop-types";
const Cooking = ({cookingItems}) => {
    return (
        <>
            <div className="text-center border-b-2 px-12 my-6 py-4 mx-8">
                    <h1 className=" text-[#282828] font-medium text-2xl"> Currently cooking:  </h1>
                </div>

                <div>
                    

<div className="">
    <table className="w-full text-sm text-center">
        <thead className="text-xs  uppercase  ">
            <tr>
                <td scope="col" className="px-4 py-3">
                    
                </td>
                <th scope="col" className="px-4 py-3">
                    name
                </th>
                <th scope="col" className="px-4 py-3">
                    Time
                </th>
                <th scope="col" className="px-4 py-3">
                    Calories
                </th>
                
            </tr>
        </thead>
        <tbody>
            
            
            {
                cookingItems.map( (element, index) => <tr key={index} className="bg-[#28282808] border-b pb-4 ">


                <td scope="row" className="px-4 py-4 font-medium text-[#282828B2] text-wrap w-8 ">
                    {index + 1}
                </td>
                <td scope="row" className="px-4 py-4 font-medium text-[#282828B2] text-wrap w-28 ">
                    {element.name}
                </td>
                <td className="px-4 py-4 font-medium text-[#282828B2] text-wrap w-8">
                    {element.preparing_time}
                </td>
                <td className="pl-5 py-4 font-medium text-[#282828B2] text-wrap w-8">
                    {element.calories}
                </td>

                </tr>)

            } 

                

            
        </tbody>
    </table>
</div>

                </div>
        </>
    );
};

Cooking.propTypes = {

    cookingItems: PropTypes.array.isRequired
}

export default Cooking;

