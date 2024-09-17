import {StatusBar,Text,View} from 'react-native';
import { Link } from 'expo-router';

export default function App(){
    return(
        <View>
            <Text className="text-3xl">Pirates Math</Text>
            <StatusBar style="auto"/>
            <Link href="/compass" style={{color: 'blue'}}>Go to Compass Game</Link>
        </View>
    );
}

