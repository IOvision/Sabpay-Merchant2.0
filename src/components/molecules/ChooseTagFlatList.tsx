import React, { Dispatch } from 'react'
import {View, FlatList, StyleProp, ViewStyle} from 'react-native';
import { Divider } from 'react-native-paper';
import ChooseTagItem from '../atoms/ChooseTagItem';

export interface Props {
    data: {
        title: string,
        tags: string[]
    },
    style: StyleProp<ViewStyle>,
    navigation: any,
    tagList: string[]
    setTagList: Dispatch<string[]>
}

const ChooseTagFlatList: React.FC<Props> = ({data, style, tagList, setTagList}) => {
    return (
        <View style={style}>
            <FlatList
                data={data.tags}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => {
                return ( 
                        <ChooseTagItem
                            category={data.title}
                            title={item}
                            tagList={tagList}
                            setTagList={setTagList}
                        />
                    )
                }}
                ItemSeparatorComponent={()=> <Divider style={{ marginVertical: 10 }}/>}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default ChooseTagFlatList
