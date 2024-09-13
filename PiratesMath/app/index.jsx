import {StatusBar, StyleSheet,Text,View} from 'react-native';

export default function App(){
    return(
        <View style={styles.container}>
            <Text>Pirates Math</Text>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});