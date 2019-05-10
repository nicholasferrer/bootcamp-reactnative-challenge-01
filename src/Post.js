import React from 'react';
import PropTypes from 'prop-types';

import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 5,
    marginTop: 20,
    marginHorizontal: 20,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  author: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    paddingBottom: 10,
  }
});

const Post = ({ data }) => (
  <View style={styles.container}>
    <View style={styles.postHeader}>
      <Text style={styles.title}>
        {data.title}
      </Text>
      <Text style={styles.author}>
        {data.author}
      </Text>
    </View>
    <Text style={styles.content}>
      {data.content}
    </Text>
  </View>
);

Post.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    content: PropTypes.string,
  }).isRequired,
};

export default Post;
