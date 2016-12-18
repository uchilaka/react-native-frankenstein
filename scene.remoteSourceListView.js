import React, { Component } from 'react';
import { AppRegistry, ListView, Text, View } from 'react-native';

export default class RemoteSourceListView extends Component {
    // Initialize the hardcoded data
    constructor(props) {
        super(props);

        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

        this.state = {
            /*dataSource: ds.cloneWithRows([
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
            ])*/
            dataSource: ds.cloneWithRows([])
        };

        const getPostsAsync = () => {
            var scene = this;
            fetch('https://uchechilaka.com/wp-json/wp/v2/posts')
                .then((response) => response.json())
                .then((responseJson) => {
                    scene.state = {
                        dataSource: ds.cloneWithRows(responseJson)
                    };
                    return responseJson;
                })
                .catch((error) => {
                    console.error(error);
                });
        }

        // bind async post fetch
        this.getPostsAsyc = this.getPostsAsyc.bind(this);

        // request posts from datasource
        var posts = this.getPostsAsyc();

        // @TODO poll for updates to posts
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