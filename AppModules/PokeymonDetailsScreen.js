import React,{Component} from "react";
import {Image, Text, View} from "react-native";


class PokeymonDetailsScreen extends Component{
    constructor() {
        super();
        this.state={
            pokemonData:''
        }
    }
    componentDidMount() {
        const {pokemonURL}=this.props.route.params;
        if(pokemonURL !== null && pokemonURL !== undefined && pokemonURL !== '')
        fetch(pokemonURL)
            .then((response) => response.json())
            .then((json) => {
                this.setState({pokemonData:json})
            })
            .catch((error) =>alert(error?.message))
            .finally(() => console.log(false));
    }


    render() {
        const {pokemonData}=this.state;
        let imageUrl=pokemonData?.sprites?.back_default
        return (
            pokemonData !== null && pokemonData !== undefined && pokemonData !== '' &&
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <View style={{borderWidth:2,padding:10,margin:15,borderRadius:5}}>
                    <Text>{'Pokemon ID: '}{pokemonData?.id}</Text>
                    <Text>{'Pokemon Name: '}{pokemonData?.name}</Text>
                    <Image
                        style={{ width: 80,
                            height: 80}}
                        source={{uri: imageUrl}}
                    />
                </View>

            </View>
        );
    }
}

export default PokeymonDetailsScreen
