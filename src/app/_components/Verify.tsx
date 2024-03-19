"use client";
import ButtonComponent from "./ButtonComponent";

const Verify = () => {
    const userEmail='abc'
    return (
        <div className="flex justify-center items-center mt-10">
            {/* main div */}
            <div className="border p-12 rounded-3xl w-[576px] h-[453px]">
                {/* border div  */}
                <div className="mb-8 flex justify-center">
                    {/* heading verify your email */}
                    <h1 className="text-4xl font-bold text-center">Verify Your email</h1>
                </div>

                <div className="mb-4 ">
                    {/* enter the 8 digit code you have received on email */}
                    <p className="mb-2 text-center">Enter the 8 digit code you have received on <br/>
                     {userEmail.slice(0, 3)}***@gmail.com</p>
                    
                    <p className="mb-2">Code:</p>
                    <div className="flex">
                        {/* 8 small boxes to enter the OTP */}
                        {Array.from({ length: 8 }, (_, index) => (
                            <input
                                key={index}
                                type="text"
                                maxLength={1}
                                placeholder="0"
                                className="w-12 h-12 text-center border rounded-md mr-2"
                            />
                        ))}
                    </div>
                </div>

                <div>
                    {/* use ButtonComponent */}
                    <ButtonComponent buttonText="VERIFY" />
                </div>
            </div>
        </div>
    );
};

export default Verify;
