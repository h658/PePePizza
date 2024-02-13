export default function MenuItem({pizName, pizImg, pizInfo, pizPrice}){
    return(
        <>
        <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white hover:shadow-md hover:shadow-black-400">
        <img src={pizImg} alt="pizza" className="max-h-40 mx-auto"/>
        <h4 className="font-semibold my-3 text-xl">{pizName}</h4>
        <p className="text-sm my-1">{pizInfo}</p>
        <button className="bg-red-600 rounded-full text-white px-6 py-4">{pizPrice}</button>
        </div>
        </>
    );
}