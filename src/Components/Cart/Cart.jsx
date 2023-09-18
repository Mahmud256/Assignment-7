/* eslint-disable react/prop-types */
const Cart = ({ selectedCourse, remaining, totalCredit, totalPrice }) => {
    console.log(totalCredit);

    return (
        <div className="bg-[#FFFFFF] p-4">
            <h1 className="text-[#2F80ED] text-base font-bold mb-3">Credit Hour Remaining {remaining} hr</h1>
            <hr></hr>
            <h1 className="text-base font-bold my-3">Course Name</h1>
            <ol className='text-sm'>
                {selectedCourse.map((course, index) => (
                    <li key={course.id}>{`${index + 1}. ${course.title}`}</li>
                ))}
            </ol>
            <hr className="mt-3"></hr>
            <h1 className="text-[#1C1B1BCC] text-base font-medium my-3">
                Total Credit Hour : {totalCredit}
            </h1>
            <hr className="mt-3"></hr>
            <h1 className="text-[#1C1B1BCC] text-base font-medium my-3">
                Total Price : {totalPrice} USD
            </h1>
        </div>
    );
};

export default Cart;
