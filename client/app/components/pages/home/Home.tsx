import React, { FC } from 'react';

import { Layout } from "../../Layout/Layout";
import { WeeklyFeatured } from "./WeeklyFeatured/WeeklyFeatured";
import { Line } from "../../ui/Line";
import { Recommended } from "./recommended/Recommended";
import { RightSide } from "../../Layout/RightSide/RightSide";
import { useAuth } from "../../../hooks/useAuth";

export const Home: FC = () => {
    const { user } = useAuth()
    console.log(user)

    return (
        <Layout title='Youtube best video'>
            <div className='content-wrapper'>
                <div className='left_side'>
                    <WeeklyFeatured/>
                    <Line/>
                    <Recommended/>
                </div>
                <RightSide/>
            </div>
        </Layout>

    )
};

