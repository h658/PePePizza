export default function SectionHeaders({ subHeader, mainHeader }) {
    return (
        <>
            <div className="text-center">
                <div className=" text-gray-500 leading-4">
                    <h3>
                        {subHeader}
                    </h3>
                </div>
                <h2 className="text-red-600  font-semibold text-4xl italic">
                    {mainHeader}
                </h2>
            </div>
        </>
    );
}