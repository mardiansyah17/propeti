import CardPropety from "@/Components/propety/CardPropety.jsx";

export default function Propeties({propetis}) {
    return (
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-3`}>
            {
                propetis.map((propety, index) => {
                    return <CardPropety key={index} propety={propety}/>
                })
            }
        </div>
    )
}
