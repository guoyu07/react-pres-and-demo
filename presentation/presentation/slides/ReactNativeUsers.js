import React from "react"
import { Heading, Text, Quote, List, ListItem, BlockQuote, Cite, Image, tile, Slide } from "spectacle"
import { names } from "../../assetFileNames"
import glamorous from "glamorous"

export const BrandTile = glamorous.img({
    display: "inline-flex",
    height: "128px",
    width: "128px",
    margin: "10px",
})

export const ReactNativeUsers = () => (
    <Slide>
        <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            big names using react native
        </Heading><br/>
        {names.reactNative.map((name) => {
            return <BrandTile src={require(`../../assets/sites_using_react_native/${name}`)} />
        })}
    </Slide>
)
