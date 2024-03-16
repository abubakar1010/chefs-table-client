import PropTypes from "prop-types";
const Cooking = ({selectedRecipe}) => {
    return (
        <>
            <div className="text-center border-b-2 px-12 my-6 py-4 mx-8">
                    <h1 className=" text-[#282828] font-medium text-2xl"> Currently cooking: 02 </h1>
                </div>

                <div>
                    

<div className="">
    <table className="w-full text-sm text-center">
        <thead className="text-xs  uppercase  ">
            <tr>
                <td scope="col" className="px-2 py-3">
                    
                </td>
                <th scope="col" className="px-3 py-3">
                    name
                </th>
                <th scope="col" className="px-3 py-3">
                    Time
                </th>
                <th scope="col" className="px-3 py-3">
                    Calories
                </th>
                <th scope="col" className=" py-3">
                    
                </th>
                
            </tr>
        </thead>
        <tbody>
            
            
            {
                selectedRecipe.map( (element, index) => <tr className="bg-white border-b" key={index}>{element}</tr>)

            }

                {/* <tr className="bg-[#28282808] border-b pb-4 ">


                <td scope="row" className="px-2 py-4 font-medium text-[#282828B2] text-wrap w-8 ">
                    {serialOfItem}
                </td>
                <td scope="row" className="px-2 py-4 font-medium text-[#282828B2] text-wrap w-28 ">
                    {name}
                </td>
                <td className="px-2 py-4 font-medium text-[#282828B2] text-wrap w-8">
                    {preparing_time}
                </td>
                <td className="pl-5 py-4 font-medium text-[#282828B2] text-wrap w-8">
                    {calories}
                </td>

                </tr> */}

            
        </tbody>
    </table>
</div>

                </div>
        </>
    );
};

Cooking.propTypes = {

    selectedRecipe: PropTypes.array.isRequired
}

export default Cooking;

