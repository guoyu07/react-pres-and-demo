import React from "react"
import { Heading, Text, Quote, List, ListItem, BlockQuote, Cite, Image, tile, Slide } from "spectacle"
import { names } from "../../assetFileNames"
import glamorous from "glamorous"

export const Trends = () => (
    <Slide>
        <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            react, angular, vue download trends
        </Heading>
        <br/>
            <Image src={require(`../../assets/other/${"trends.png"}`)} />
        <br/>
    </Slide>
)
