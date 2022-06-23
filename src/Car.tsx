type CarType = {
    topCars: Array<TopCarsType>
}
type TopCarsType = {
    manufacturer: string
    model: string
}

export const Car = (props: CarType) => {
    return (
        <table>
            {
                props.topCars.map((car, index) => {
                    return (
                        <>
                            <tr>
                                <td>{index + 1} {car.manufacturer}</td>
                                <td>{car.model}</td>
                            </tr>
                        </>

                    )
                })
            }
        </table>
    )
}