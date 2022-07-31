import React, {Component} from 'react';
import {FlatList, Text, TextInput, TouchableOpacity, View} from 'react-native';

class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      apiData: '',
      pokemonID:null
    };
  }
  componentDidMount() {
      fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1000')
          .then((response) => response.json())
          .then((json) => {
            this.setState({apiData:json?.results})
          })
          .catch((error) =>alert(error?.message))
          .finally(() => console.log(false));
  }
  handlePokemonClick(item){
    this.props.navigation.navigate('PokemonDetails',{pokemonURL:item?.url})
  }
   renderItem = ({ item }) => {
     return(
         <TouchableOpacity onPress={()=>this.handlePokemonClick(item)}>
           <View style={{
             backgroundColor: 'blue',
             padding: 20,
             marginVertical: 8,
             marginHorizontal: 16,
           }}>
             <Text style={{color:'white'}}>{'Pokemon Name:'}{item.name}</Text>
           </View>
         </TouchableOpacity>


     )
   }
   handleSubmitButtonClick(){
      const {pokemonID}=this.state;
      if(pokemonID.length > 0){
          this.props.navigation.navigate('PokemonDetails',{pokemonURL:`https://pokeapi.co/api/v2/pokemon/${pokemonID}`})
      }else {
          alert('Please enter valid id')
      }

   }





  render() {
    const {pokemonID,apiData}=this.state
    return (
      <View>
       <View>
         <TextInput
             style={{borderWidth: 2, padding: 10, margin: 10}}
             placeholder={'Search here  Pokemon id'}
             value={pokemonID}
             keyboardType={'number-pad'}
             onChangeText={text => {
               this.setState({pokemonID: text});
             }}
         />
         <TouchableOpacity
             onPress={() => this.handleSubmitButtonClick()}
             style={{
               width: '90%',
               alignSelf: 'center',
               backgroundColor: 'green',
               paddingVertical: 10,
               margin: 10,
             }}>
           <Text style={{textAlign: 'center'}}>{'submit'}</Text>
         </TouchableOpacity>

       </View>
        <FlatList
            data={apiData}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index}
            keyboardShouldPersistTaps="always"
        />
      </View>
    );
  }
}
export default HomeScreen;
