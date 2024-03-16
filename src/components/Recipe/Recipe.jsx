import PropTypes from 'prop-types';
import { useState } from 'react';

const Recipe = ({data}) => {
    // console.log(data);
    const {name,description,image,ingredients,preparing_time,calories} = data
    // console.log(name,description,image,ingredients,preparing_time,calories,tags);

    const [isShowMore, setIsShowMore] = useState(false)

    // const handleShowMoreButton = () => {

    //     if (!isShowMore) {
    //         // const limitedData = ingredients.splice(0,8);

    //         ingredients.splice(0,8)

    //         // const showLimitedList = limitedData.map( (element,index) => <li key={index}>{element}</li>)

    //         // return showLimitedList
    //     }

    //     return ingredients
    // }

    let limitedData

    if (!isShowMore) {
        
        limitedData = ingredients.slice(0,5)
        console.log( limitedData.length);
    }

    if(isShowMore){
        limitedData = ingredients
        console.log(limitedData.length);
    }

    // const btn = <button onClick={ () => setIsShowMore(!isShowMore)} className='text-[rgba(135,135,135,1)] text-lg'>... See More</button>

    return (
        <>
            <section>
                <div className=' w-[420px] mx-h-[670px] bg-white shadow-xl rounded-2xl py-9'>

                <div className='pb-6'>
                    <img src={image} alt="" className='w-[370px] h-[250px] mx-auto  rounded-2xl' />
                    
                </div>
                    
                    <div className=' px-6 border-b-2 border-dashed'>

                        <h1 className=' text-[rgba(40,40,40,1)] font-semibold text-xl pb-4'>{name}</h1>
                        <p className=' text-[rgba(135,135,135,1)] pb-4'>{description}</p>
                    </div>

                    <div className=' px-8 py-6 relative border-b-2 border-dashed'>

                        <h1 className=' pb-4 font-medium text-lg text-[rgba(40,40,40,1)]'>Ingredients: {ingredients.length}</h1>
                        <ul className='pb-4 px-3'>
                        {
                            // limitedData.map( (element, index) => <li  data-after={' See More ...'}  className={`list-decimal text-[rgba(135,135,135,1)] text-lg after:content-[attr(data-after)]`} key={index}>{element}</li>)
                            limitedData.map( (element, index) => <li className=" list-disc text-[rgba(135,135,135,1)] text-lg  " key={index}>{element}</li>)
                        }
                        </ul>

                    <button onClick={ () => setIsShowMore(!isShowMore)} className='text-[rgba(135,135,135,1)] text-lg absolute bottom-2 right-6 '>{ isShowMore? "See Less":"... See More"}</button>
                    </div>

                    <div className=' flex justify-between items-center px-8 pt-4 pb-3'>

                        <div className=' flex items-center gap-2'>

                            <img src='time.svg' alt="" />

                            <p>{preparing_time}</p>
                        </div>

                        <div className=' flex items-center gap-2'>

                            <img src="calories.svg" alt="" />

                            <p>{calories}</p> 
                            
                        </div>
                    </div>

                    <div className=' px-8 pt-4'>
                        <button className='text-[rgba(21,11,43,1)] bg-[rgba(11,229,138,1)]  font-medium rounded-full text-sm px-7 py-3 text-center '>Want to cook</button>
                    </div>

                </div>
            </section>
        </>
    );
};

Recipe.propTypes = {

    data: PropTypes.object.isRequired
}

export default Recipe;