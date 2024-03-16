import PropTypes from "prop-types"

const Chart = ({recipe}) => {

    
    return (
        <>
            <section className=" w-[470px] bg-white shadow-xl rounded-lg my-14 px-3 border-2 border-[#28282833] pb-12 ">


                <section>



                <div className="text-center border-b-2 px-12 my-6 pb-4 mx-8">
                    <h1 className=" text-[#282828] font-medium text-2xl">Want to cook: 01</h1>
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
            {/* <tr className="bg-white border-b  ">
                <th scope="row" className="px-2 py-4 font-medium  ">
                    1
                </th>
                <th scope="row" className="px-3 py-4 font-medium text-wrap  ">
                    Apple MacBook Pro 17
                </th>
                <td className="px-3 py-4">
                    Silver
                </td>
                <td className="px-3 py-4">
                    $2999
                </td>
                <td className=" py-4">
                    <button className="text-[rgba(21,11,43,1)] bg-[rgba(11,229,138,1)]  font-medium rounded-full text-sm px-4 py-3 text-center">Preparing</button>
                </td>
            </tr> */}
            {
                recipe.map( (element, index) => <tr className="bg-white border-b" key={index}>{element}</tr>)

            }
            
        </tbody>
    </table>
</div>

                </div>

            </section>

            </section>
        </>
    );
};

Chart.propTypes = {

    recipe: PropTypes.array.isRequired
}

export default Chart;