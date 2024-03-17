import PropTypes from 'prop-types';
import Cooking from '../Cooking/Cooking';
import { useState } from 'react';

const CalculateTable = ({item}) => {
    console.log(item);

    const [cookingItems, setCookingItems] = useState([])

    function handleCookingItems(element){

        const newCookingItems = [...cookingItems,element]

        setCookingItems(newCookingItems)

    }
    return (
        <>
            <section className=" py-20">
                <div className="w-[470px] bg-white shadow-xl pb-12 rounded-lg">

                    <section>
                        <div className=" text-center py-8 px-12 ">

                            <h1 className=" text-[#282828] font-medium border-b-2 pb-5 text-2xl ">Want to Cook: {item.length}</h1>
                        </div>



                        <div className="relative overflow-x-auto sm:rounded-lg px-4">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 mb-6">
                                <thead className="text-xs text-gray-700 uppercase  ">
                                    <tr>
                                        <th scope="col" className="px-1 py-3 text-wrap">
                                            SL
                                        </th>
                                        <th scope="col" className=" w-28 px-1 py-3 text-wrap">
                                            Name
                                        </th>
                                        <th scope="col" className="pr-8 pl-3 py-3">
                                            Time
                                        </th>
                                        <th scope="col" className="pl-5 py-3">
                                            Calories
                                        </th>
                                        <th scope="col" className="px-1 py-3">

                                        </th>
                                    </tr>
                                </thead>

                                <tbody>

                                    {
                                        item.map( (element,index) => <tr key={index} className="bg-[#28282808] border-b pb-4 ">


                                        <td scope="row" className="px-2 py-4 font-medium text-[#282828B2] text-wrap w-8 ">
                                            {index + 1}
                                        </td>
                                        <td scope="row" className="px-2 py-4 font-medium text-[#282828B2] text-wrap w-28 ">
                                            {element.name}
                                        </td>
                                        <td className="px-2 py-4 font-medium text-[#282828B2] text-wrap w-8">
                                            {element.preparing_time}
                                        </td>
                                        <td className="pl-5 py-4 font-medium text-[#282828B2] text-wrap w-8">
                                            {element.calories}
                                        </td>
                                        <td className="pl-4 py-4 font-medium text-[#282828B2] text-wrap w-8">
                                        <button className='text-[rgba(21,11,43,1)] bg-[rgba(11,229,138,1)]  font-medium rounded-xl text-lg px-2 py-3 text-center ' onClick={() => {handleCookingItems(element)}}>Preparing</button>
                                        </td>
    
                                        </tr>)
                                    }

                                    

                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section>
                        {/* <div className=" text-center py-8 px-12">

                            <h1 className=" text-[#282828] font-medium border-b-2 pb-5 text-2xl ">Currently cooking:{}</h1>
                        </div> */}



                        {/* <div className="relative overflow-x-auto sm:rounded-lg px-4">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 mb-6">
                                <thead className="text-xs text-gray-700 uppercase  ">
                                    <tr>
                                        <th scope="col" className="px-1 py-3 text-wrap">
                                            SL
                                        </th>
                                        <th scope="col" className=" w-28 px-1 py-3 text-wrap">
                                            Name
                                        </th>
                                        <th scope="col" className="pr-8 pl-3 py-3">
                                            Time
                                        </th>
                                        <th scope="col" className="pl-5 py-3">
                                            Calories
                                        </th>
                                        
                                    </tr>
                                </thead>

                                {
                                        currentlyCookingItem.map( (element,index) => <tbody key={index}>{element}</tbody>)
                                    } 

                            </table>
                        </div> */}

                        <Cooking cookingItems={cookingItems} />

                    </section>



                </div>
            </section>
        </>
    );
};

CalculateTable.propTypes = {

    item: PropTypes.array.isRequired,
    // currentlyCookingItem: PropTypes.array.isRequired,
}
export default CalculateTable;