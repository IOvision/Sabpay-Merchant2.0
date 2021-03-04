import React, { Dispatch, useState } from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { Checkbox } from 'react-native-paper'
import { connect } from 'react-redux'
import Inventory from '../../models/Inventory'
import { RootState } from '../../redux/store'
import {HeaderText} from '../atoms/Text'

export interface Props {
    category: string
    title: string
    inventory: Inventory
    tagList: string[]
    setTagList: Dispatch<string[]>
}

const ChooseTagItem: React.FC<Props> = ({category, title, inventory, tagList, setTagList}) => {
    const [checked, setChecked] = useState(category in inventory.tags ? inventory.tags[category].includes(title) : false)
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: "https://images.theconversation.com/files/282104/original/file-20190701-105182-1q7a7ji.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop"}}/>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <HeaderText style={{marginStart: 10}}>{title.replace(/_/gi, " ")}</HeaderText>
                <Checkbox
                    status={checked ? 'checked' : 'unchecked'}
                    onPress={() => {
                        if (checked) {
                            const array = tagList.filter(e => e !== title)
                            setTagList(array)
                        } else {
                            const array = [...tagList, title]
                            setTagList(array)
                        }
                        setChecked(!checked)
                    }}
                />
            </View>
        </View>
    )
}

const mapStateToProps = (state: RootState) => {
    return {
        inventory: state.inventoryReducer.inventory
    }
}

export default connect(mapStateToProps)(ChooseTagItem)

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    image: {
        width: 70, 
        height: 70,
        borderRadius: 10,
    }
})