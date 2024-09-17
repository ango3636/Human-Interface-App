import {StatusBar, StyleSheet,Text,View} from 'react-native';
import { Link } from 'expo-router';

export default function App(){
    return(
        <View style={styles.container}>
            <Text>Pirates Math</Text>
            <StatusBar style="auto"/>
            <Link href="/compass" style={{color: 'blue'}}>Go to Compass Game</Link>
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