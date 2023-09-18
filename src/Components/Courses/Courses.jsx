/* eslint-disable react/jsx-key */
import { useEffect } from "react";
import { useState } from "react";
import { BiBookOpen } from 'react-icons/bi';
import Cart from "../Cart/Cart";
import Swal from 'sweetalert2'


const Courses = () => {
    const [allCourse, setAllcourse] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState([]);
    const [remaining, setRemaining] = useState(20);
    const [totalCredit, setTotalCredit] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);


    useEffect(() => {
        fetch('courses.json')
            .then(res => res.json())
            .then(data => setAllcourse(data))
    }, [])

    const handleSelectCourse = (course) => {

        let PriceCount = course.price;

        const isExist = selectedCourse.find(item => item.id == course.id);

        let CreditCount = course.credit;

        if (isExist) {
            Swal.fire({
                title: 'Already Selected This Course',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              });
        }
        else {

            selectedCourse.forEach(item => {
                CreditCount = CreditCount + item.credit;
                PriceCount = PriceCount + item.price;
            })

            const remaining = 20 - CreditCount;
              if (CreditCount > 20) {
                Swal.fire({
                    title: 'Can be taken maximum of 20 credit hour, more credit cannot be taken',
                    showClass: {
                      popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                      popup: 'animate__animated animate__fadeOutUp'
                    }
                  });
                //alert("Somy ses");
            }
            else { 
                setTotalCredit(CreditCount);
                setRemaining(remaining);
                setTotalPrice(PriceCount);
                setSelectedCourse([...selectedCourse, course]);
            }
        }


    }

    return (

        <div className="container flex justify-between mx-auto px-4 pb-12 lg:px-1">
            <div className="home-containerr flex gap-4 md:m-auto">
                <div className="card-containerr lg:w-[1000px] gap-4 grid lg:grid-cols-3">
                    {
                        allCourse.map((course) => (
                            <div key={course.id} className="card w-80 flex relative flex-col rounded-lg bg-white">
                                <div className="card-img">
                                    <img src={course.cover} alt="" className="rounded-xl m-auto p-5" />
                                </div>
                                <div className="card-details flex flex-col px-5">
                                    <div className="text-lg font-semibold pb-3">
                                        {course.title}
                                    </div>
                                    <div className="course-details text-[#13101099] text-sm font-normal">
                                        {course.details}
                                    </div>
                                    <div className="pc text-base font-medium flex gap-2 items-center py-3">
                                        $ Price: {course.price}
                                        <BiBookOpen /> Credit: {course.credit}hr
                                    </div>
                                    <button onClick={() => handleSelectCourse(course)} className="bg-blue-500 mb-4 py-1 rounded-md text-white">Select</button>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className="cart w-64">
                    <Cart
                        selectedCourse={selectedCourse}
                        totalPrice={totalPrice}
                        remaining={remaining}
                        totalCredit={totalCredit}>

                    </Cart>
                </div>
            </div>
        </div>


    );
};

export default Courses;