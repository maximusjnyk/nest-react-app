import { FC } from 'react'
import { Line } from "../../ui/Line";
import { MostPopularVideo } from "./MostPopularVideo";
import { TopChanel } from "./TopChanel";

export const RightSide: FC = () => {
    return (
        <div className='right_side'>
            <Line />
            <MostPopularVideo />
            <TopChanel />
        </div>
    );
};