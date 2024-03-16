import PropTypes from 'prop-types';

const Recipe = ({data}) => {
    // console.log(data);
    const {name,description,image,ingredients,preparing_time,calories,tags} = data
    console.log(name,description,image,ingredients,preparing_time,calories,tags);
    return (
        <>
            <section>
                <div className=' w-[380px] mx-h-[670px] bg-white shadow-xl'>

                    <img src={image} alt="" className=' w-[311px] h-[200px]' />

                </div>
            </section>
        </>
    );
};

Recipe.propTypes = {

    data: PropTypes.object.isRequired
}

export default Recipe;