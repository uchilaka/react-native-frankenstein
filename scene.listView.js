import React, { Component } from 'react';
import { AppRegistry, ListView, Text, View } from 'react-native';

export default class ListViewBasics extends Component {
    // Initialize the hardcoded data
    constructor(props) {
        super(props);

        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

        this.state = {
            dataSource: ds.cloneWithRows([
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
            ])
        };
    }
    render() {
        // Some fancy notation here being used for inline functions! :O
        return (
            // pading top is 65 + 22
            <View style={{ flex: 1, paddingTop: 87 }}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <Text>{rowData}</Text>}
                    />
            </View>
        );
    }
}